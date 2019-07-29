<?php

namespace doris\bugReport\module\controllers;

use doris\bugReport\module\models\Issue;
use Exception;
use sergios\worksectionApi\src\mappers\CommentMapper;
use sergios\worksectionApi\src\models\Comment;
use sergios\worksectionApi\src\models\User;
use sergios\worksectionApi\src\services\WSRequestCriteria;
use Yii;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\web\UploadedFile;

class CommentController extends Controller
{
    public function actionView()
    {
        try {
            $filter = $params = Yii::$app->request->get()['filter'];

            $mapper = new CommentMapper();
            $collection = $mapper->findByAttributes($filter);

            return json_encode($collection->getModels());
        } catch (Exception $exception) {
            throw new  BadRequestHttpException($exception->getMessage());
        }
    }
}
