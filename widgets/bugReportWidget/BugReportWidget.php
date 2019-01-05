<?php
/**
 * Created by PhpStorm.
 * User: Дмитрий
 * Date: 03.01.2019
 * Time: 7:28
 */

namespace doris\bugReport\widgets\bugReportWidget;

use yii\base\Widget;

class BugReportWidget extends Widget
{
    public function run()
    {
        if (YII_DEBUG) {
            return $this->render('index');
        }

        return '';
    }
}