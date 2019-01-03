<?php

namespace doris\bugReport\assets;

use yii\web\AssetBundle;

class BugReportAsset extends AssetBundle
{
    public $sourcePath = '@doris/bugReport/assets';
    public $js = [
        'js/bug-report.js'
    ];
    public $css = [
        'css/bug-report.css'
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];
}