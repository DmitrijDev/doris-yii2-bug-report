<?php
/**
 * Created by PhpStorm.
 * User: Дмитрий
 * Date: 03.01.2019
 * Time: 7:28
 */

namespace doris\bugReport\widgets;

use yii\base\Widget;
use yii\helpers\Html;

class BugReportWidget extends Widget
{
    public function run()
    {
        return $this->render('index');
    }
}