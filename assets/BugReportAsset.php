<?php

namespace doris\bugReport\assets;

use yii\web\AssetBundle;

class BugReportAsset extends AssetBundle
{
    public $sourcePath = '@doris/bugReport/assets';

    public $js = [
        'assets/js/app.js',
        'assets/js/chunk-vendors.js'
    ];

    public $css = [
        'assets/css/app.css',
        'assets/css/chunk-vendors.css',
    ];

    public $depends = [];

    public $jsOptions = [
        'defer' => 'defer',
    ];
}
