<?php

namespace doris\bugReport\assets;

use yii\web\AssetBundle;

class BugReportAsset extends AssetBundle
{
    public $sourcePath = '@doris/bugReport/assets';

    public $js = [
        'js/ajax-module.js',
        'js/bug-report-module.js',
        'js/canvas-module.js',
        'js/index.js',
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
}