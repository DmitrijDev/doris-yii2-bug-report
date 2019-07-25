<?php

namespace doris\bugReport\module\controllers;

use doris\bugReport\module\models\Issue;
use Exception;
use sergios\worksectionApi\src\mappers\CommentMapper;
use sergios\worksectionApi\src\models\Comment;
use sergios\worksectionApi\src\models\User;
use Yii;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\web\UploadedFile;

class IssueController extends Controller
{
    public function actionIndex()
    {
        try {
            $params = Yii::$app->request->post();

            $issue = new Issue();
            $issue->setAttributes(['meta' => $params['meta'], 'description' => $params['description']]);
            if (!$issue->validate()) {
                throw new BadRequestHttpException('Ошибка в описании задачи или в работе приложения. Перезагрузите страницу и попробуйте снова.');
            }

            $comment = new Comment();
            $comment->setAttributes(['text' => $issue->getCommentMessage()]);
            $comment->saveImage(UploadedFile::getInstanceByName('image'));

            $user = new User();
            $user->setAttributes(['email' => $params['user']['email']]);
            $comment->setUser($user);

            foreach ($params['errors'] as $error) {
                $comment->setTodo($error['index'], $error['value']);
            }

            $page = str_replace('https://doris.worksection.com', '', $params['taskUrl']);
            $commentMapper = new CommentMapper($page);
            $createdComment = $commentMapper->create($comment);

            return json_encode($createdComment->getAttributes());
        } catch (Exception $exception) {
            throw new  BadRequestHttpException($exception->getMessage());
        }
    }
}
