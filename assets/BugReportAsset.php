<?php

namespace doris\bugReport\assets;

use yii\web\AssetBundle;

class BugReportAsset extends AssetBundle
{
    public $sourcePath = '@doris/bugReport/assets';

    public $js = [
        'js/app.js',
        'js/chunk-vendors.js'
    ];
    public $css = [
        'css/app.css',
        'css/chunk-vendors.css',
    ];
    public $depends = [
    ];

    public $jsOptions = [
        'defer' => 'defer',
    ];
}
