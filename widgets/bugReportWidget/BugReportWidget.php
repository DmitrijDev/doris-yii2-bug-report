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
		$user_ip = Yii::app()->request->getUserHostAddress();

		$ip_list = [];
		if (isset(Yii::$app->params['bugReport']['ipList'])) {
			$ip_list = Yii::$app->params['bugReport']['ipList'];
		}

		if (YII_DEBUG || in_array($user_ip, $ip_list)) {
			return $this->render('index');
		}

		return '';
	}
}