<?php

namespace doris\bugReport\module\helpers;

use Yii;
use yii\helpers\FileHelper;
use Exception;

class ImageHelper
{
    private $directory = '';
    private $path = '';

    public function __construct()
    {
        $imagePath = '/uploads/tests';
        if (isset(Yii::$app->params['bugReport']['imagePath'])) {
            $imagePath = Yii::$app->params['bugReport']['imagePath'];
        }

        $this->directory = Yii::getAlias('@webroot') . $imagePath;
        $this->path = Yii::getAlias('@web') . $imagePath;
    }

    public function saveImage($image)
    {
        try {
            $imageName = $this->getImageName('png');
            $file = $this->directory . '/' . $imageName;

            FileHelper::createDirectory(FileHelper::normalizePath($this->directory), 775);

            $image->saveAs($file);

            return $file;
        } catch (Exception $e) {
            throw new Exception("Can't save image");
        }
    }

    private function getImageName($type)
    {
        $filecount = 0;
        $files = glob($this->directory . "/*");
        if ($files) {
            $filecount = count($files) + 1;
        }

        return $filecount . '.' . $type;
    }
}
