<?php

namespace doris\bugReport\module;

use yii\base\BootstrapInterface;
use yii\base\Module;

class Handler extends Module implements BootstrapInterface
{
    public $controllerNamespace = 'doris\bugReport\module\controllers';

    public function init()
    {
        parent::init();
    }

    public function bootstrap($app)
    {
        $app->getUrlManager()->addRules([
            [
                'class' => 'yii\web\UrlRule',
                'pattern' => $this->id . '/<controller:[\w-]+>',
                'suffix' => '/',
                'verb' => 'POST',
                'route' => $this->id . '/<controller>/index',
            ],
            [
                'class' => 'yii\web\UrlRule',
                'pattern' => $this->id . '/<controller:[\w-]+>',
                'suffix' => '/',
                'verb' => 'GET',
                'route' => $this->id . '/<controller>/veiw',
            ],
        ], false);
    }
}
