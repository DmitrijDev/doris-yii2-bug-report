<?php

namespace doris\bugReport\module\models;

use DateTime;
use doris\bugReport\module\helpers\ImageHelper;
use Exception;
use Yii;
use yii\base\Model;

class Issue extends Model
{
    public $image;
    public $description;
    public $meta;
    public $errors;

    private $hash = null;
    private $email = null;
    private $issueUrl = null;
    private $pathToImage;

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

    public function rules()
    {
        return [
            [['image'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg'],
            [['description'], 'string', 'max' => 2000, 'min' => 20],
            [['meta'], 'safe'],
            [['errors'], 'safe']
        ];
    }

    public function upload()
    {
        if ($this->validate()) {
            $imageHelper = new ImageHelper();
            $this->pathToImage = $imageHelper->saveImage($this->image);

            return true;
        }

        return false;
    }

    public function getCommentData(): array
    {

        $datetime = new DateTime();
        $timestamp = $datetime->getTimestamp();

        $text = implode('<br>', [
            "id: " . $timestamp,
            "----------------------------------",
            "Текст ошибки: {$this->description}",
            "----------------------------------",
            "Ошибка на странице {$this->meta['href']}",
            "Размер экрана (WxY): {$this->meta['viewportWidth']}x{$this->meta['viewportHeight']}",
            "Позиция по скролу (XxY): {$this->meta['scrollX']}x{$this->meta['scrollY']}",
            "Операционная система: {$this->meta['os']}",
            "Данные о браузере: {$this->meta['browser']}, {$this->meta['browserVersion']}",
            "Мета: {$this->meta['source']}"
        ]);

        if ($this->errors) {
            $todo = [];

            foreach ($this->errors as $error) {
                $key = "todo[{$error['index']}]";
                $value = trim($error['value']);
                $index = $error['index'] + 1;

                $todo[$key] = "{$index}. {$value}";
            }
        } else {
            $todo = ['todo[]' => 'Сделано!'];
        }

        return array_merge([
            'action' => 'post_comment',
            'page' => $this->issueUrl,
            'email_user_from' => $this->email,
            'text' => $text,
            'hash' => $this->hash,
            'attach[]' => new \CurlFile($this->pathToImage, 'image/png', 'Screenshot.png')
        ], $todo);
    }
}
