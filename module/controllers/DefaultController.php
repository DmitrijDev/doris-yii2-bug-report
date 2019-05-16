<?php
/**
 * Created by PhpStorm.
 * User: Дмитрий
 * Date: 03.01.2019
 * Time: 16:56
 */

namespace doris\bugReport\module\controllers;

use DateTime;
use Yii;
use Exception;
use yii\web\Controller;
use doris\bugReport\module\helpers\ImageHelper;

class DefaultController extends Controller
{
    public $hash = null;
    public $email = null;
    public $issueUrl = null;

    public function init()
    {
        if (!isset(Yii::$app->params['bugReport']['apiKey'])) {
            throw new Exception('ApiKey is empty');
        }

        if (!isset(Yii::$app->params['bugReport']['email'])) {
            throw new Exception('User email is empty');
        }

        if (!isset(Yii::$app->params['bugReport']['issueUrl'])) {
            throw new Exception('Page url is empty');
        }

        $this->email = Yii::$app->params['bugReport']['email'];
        $this->issueUrl = Yii::$app->params['bugReport']['issueUrl'];
        $this->hash = md5($this->issueUrl . 'post_comment' . Yii::$app->params['bugReport']['apiKey']);

        parent::init();
    }

    public function actionIndex()
    {
        try {
            $params = Yii::$app->request->post();

            $imageHelper = new ImageHelper();
            $file = $imageHelper->saveImage($params['image']);
            $datetime = \DateTime::getTimestamp();

            $text = implode('<br>', [
                "id: ${$datetime}",
                "----------------------------------",
                "Текст ошибки: {$params['message']}",
                "----------------------------------",
                "Ошибка на странице {$params['meta']['href']}",
                "Размер экрана (WxY): {$params['meta']['viewportWidth']}x{$params['meta']['viewportHeight']}",
                "Позиция по скролу (XxY): {$params['meta']['scrollX']}x{$params['meta']['scrollY']}",
                "Данные об устройстве: {$params['meta']['device']}, {$params['meta']['os']}",
                "Данные о браузере: {$params['meta']['browser']}, {$params['meta']['browserVersion']}",
                "Мета: {$params['meta']['source']}"
            ]);

            $requestData = [
                'action' => 'post_comment',
                'page' => $this->issueUrl,
                'email_user_from' => $this->email,
                'text' => $text,
                'hash' => $this->hash,
                'todo[]' => 'Сделано!',
                'attach[]' => new \CurlFile($file, 'image/png', 'Screenshot.png')
            ];

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'https://doris.worksection.com/api/admin/');
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $requestData);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_HEADER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            $server_output = curl_exec($ch);

            curl_close($ch);

            if ($server_output == "OK") {
                return 'OK';
            } else {
                return $server_output;
            }
        } catch (Exception $exception) {
            return $exception->getMessage();
        }
    }
}
