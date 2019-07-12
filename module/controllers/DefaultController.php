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
use Curl\Curl;
use CurlFile;
use Exception;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use doris\bugReport\module\helpers\ImageHelper;
use doris\bugReport\module\models\Issue;
use yii\web\UploadedFile;

class DefaultController extends Controller
{
    public function actionIssue()
    {
        try {
            $model = new Issue();
            $params = Yii::$app->request->post();
            $params['image'] = UploadedFile::getInstanceByName('image');

            $model->setAttributes($params);

            if (!$model->validate()) {
                throw new Exception('Validation failed. Some data has errors.');
            }

            if (!$model->upload()) {
                throw new Exception('Can\'t save image. Check permissions');
            }

            $commentData = $model->getCommentData();

            $curl = new Curl();
            $curl->setOpt(CURLOPT_FOLLOWLOCATION, true);
            $curl->setHeader('Content-Type', 'multipart/form-data');
            $curl->post('https://doris.worksection.com/api/admin/', $commentData);

            if ($curl->error) {
                throw new BadRequestHttpException($curl->errorMessage);
            }

            return json_encode([
                'description' => $model->description,
                'meta' => $model->meta
            ]);
        } catch (Exception $exception) {
            throw new  BadRequestHttpException($exception->getMessage());
        }
    }
}
