<?php
/**
 * Created by PhpStorm.
 * User: Дмитрий
 * Date: 03.01.2019
 * Time: 16:56
 */

namespace doris\bugReport\module\controllers;

use Yii;
use Exception;
use yii\web\Controller;

class DefaultController extends Controller
{
    public function actionIndex()
    {
        try {
            $params = Yii::$app->request->post();
            file_put_contents(Yii::getAlias('@webroot') . '/uploads/tests/any.png', $params['image']);
            $cFile = curl_file_create($params['image']);

            $text = implode('<br>', [
                "Ошибка на странице {$params['meta']['href']}",
                "Text ошибки: {$params['message']}",
                "Размер экрана: {$params['meta']['viewportHeight']}x{$params['meta']['viewportWidth']}",
                "Позиция по скролу: {$params['meta']['scrollX']}x{$params['meta']['scrollY']}",
                "Данные об устройстве: {$params['meta']['device']}, {$params['meta']['os']}",
                "Данные о браузере: {$params['meta']['browser']}, {$params['meta']['browserVersion']}",
                "Мета: {$params['meta']['source']}"
            ]);

            $requestData = [
                'action' => 'post_comment',
                'page' => '/project/51000/7532817/',
                'email_user_from' => 'gitarheero@mail.ru',
                'text' => $text,
                'hash' => '5cd547e7a46ee734deda9f52a6c6ec4e',
                'attach' => [$cFile]
            ];

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, 'http://doris.worksection.com/api/admin/');
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $requestData);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
            curl_setopt($ch, CURLOPT_HEADER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: multipart/form-data'));
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

            $server_output = curl_exec($ch);

            curl_close($ch);

            if ($server_output == "OK") {
                return 'lol';
            } else {
                return 'ne lol';
            }
        } catch (Exception $exception) {
            $lol=2;
            return 'ne lol';
        }
    }
}