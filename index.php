<?php


//Vérification si le framework est disponible
if (!file_exists('antie/php/antieframework.php')) {
    echo "<h2>Framework error</h2>";
    echo "<h4>impossible de trouver le fichier antieframework.php</h4>";
    echo "<h4>Vueillez installer le dossier antie dans le répertoire racine de votre projet</h4>";
    exit;
}

require('antie/php/antieframework.php');
$activer_cache_js = true;
$application_id = "psehbb";
$antie = new AntieFramework('antie/config');
$device_brand = isset($_GET['brand'])? $_GET['brand'] : 'default';
$device_model = isset($_GET['model'])? $_GET['model'] : 'webkit';
$device_brand = $antie->normaliseKeyNames($device_brand);
$device_model = $antie->normaliseKeyNames($device_model);
$device_configuration_name = $device_brand . "-" . $device_model;
$device_configuration_file_path = "antie/config/devices/" . $device_configuration_name . "-default.json";
try {
    $device_configuration = @file_get_contents($device_configuration_file_path);
    if(!$device_configuration)
        throw new Exception("Device ($device_configuration_name) not supported");
} catch(Exception $e){
    echo $e->getMessage(); exit;
}
$device_configuration = preg_replace('/%application%/m', $application_id, $device_configuration);
$device_configuration_decoded = json_decode($device_configuration);
// Set document mime type
header("Content-Type: " . $antie->getMimeType($device_configuration_decoded));
// Set doctype and opening html tag
echo $antie->getDocType($device_configuration_decoded);
echo $antie->getRootHtmlTag($device_configuration_decoded);
?>
<!-- HEAD -->
<head>
    <!-- Device specific head block (API loading etc) -->
<?php
    echo $antie->getDeviceHeaders($device_configuration_decoded);
    ?>
    <!-- Set up require aliases -->
    <script type="text/javascript">
        var require = {
            baseUrl: "",
            paths: {
                <?php echo $application_id; ?>: 'js',
                antie : "antie/static/script"
            },
            priority: [],
            <?php if($activer_cache_js): ?>
                urlArgs: "bust=" +  (new Date()).getTime(),
            <?php endif; ?>
            callback: function() {}
        };
    </script>

    <!-- Load require.js -->
    <script type="text/javascript" src="antie/static/script/lib/require.js"></script>
    <!-- Load application base style sheet -->
    <link rel="stylesheet" href="static/style/style.css"/>
    <!-- Expose device config to framework -->
    <script>
        var antie = {
            framework: {
                deviceConfiguration: <?php echo $device_configuration ?>
            }
        }
    </script>

</head>



<!-- BODY -->

<body style="background: #000;">

<!-- Add in device specific body (Plugins etc) -->
<?php echo $antie->getDeviceBody($device_configuration_decoded); ?>

<!-- Create a loading message -->
<div id="static-loading-screen" style="position: absolute; width: 100%; height: 100%; background: #000;">
    Application is loading...
</div>

<!-- Create a div to house the app -->
<div id="app" class="display-none"></div>

<!-- Load the application and launch, remove loading screen via callback -->
<script type='text/javascript'>
    require(
            [
                'sampleapp/appui/sampleapp'
            ],
            function(SampleApp) {

                require.ready(function() {
                    function onReady() {
                        var staticLoadingScreen = document.getElementById('static-loading-screen');
                        staticLoadingScreen.parentNode.removeChild(staticLoadingScreen);
                    };

                    new SampleApp(
                            document.getElementById('app'),
                            'static/style/',
                            'static/img/',
                            onReady
                    );
                });
            }
    );
</script>

</body>
</html>
