<?php

namespace doris\bugReport\assets;

use yii\web\AssetBundle;

class BugReportAsset extends AssetBundle
{
    public $sourcePath = '@doris/bugReport/assets';

    public $js = [
        'js/helpers/response-module.js',
        'js/helpers/image-maker.js',
        'js/helpers/popup-window.js',
        'js/helpers/canvas-module.js',
        'js/bug-report-module.js',
        'libs/html2canvas.js',
        'libs/detect.min.js',
    ];
    public $css = [
        'css/bug-report.css',
        'css/bug-report-status.css'
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\web\JqueryAsset'
    ];

    public $jsOptions = [
        'defer' => 'defer',
    ];
}