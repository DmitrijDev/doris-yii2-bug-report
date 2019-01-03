<?php

namespace doris\bugReport\module;

use yii\base\BootstrapInterface;
use yii\base\Module;


class Handler extends Module implements BootstrapInterface
{
    public $controllerNamespace = 'doris\compressor\module';
    public $defaultRoute = 'index';

    public function init()
    {
        parent::init();
    }

    public function bootstrap($app)
    {
        $app->getUrlManager()->addRules([
            [
                'class' => 'yii\web\UrlRule',
                'pattern' => $this->id,
                'route' => $this->id . '/default/index'
            ],
        ], false);
    }
}