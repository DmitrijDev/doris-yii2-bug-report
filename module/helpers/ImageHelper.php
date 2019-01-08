<?php

namespace doris\bugReport\module\helpers;

use Yii;
use Exception;

class ImageHelper
{
    private $directory = '';
    private $path = '';

    public function __construct()
    {
        $this->directory = Yii::getAlias('@webroot') . '/uploads/tests';
        $this->path = Yii::getAlias('@web') . '/uploads/tests';
    }

    public function saveImage($data)
    {
        if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
            $data = substr($data, strpos($data, ',') + 1);
            $type = strtolower($type[1]);

            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new Exception('Image type is not support');
            }

            $data = base64_decode($data);

            if (!$data) {
                throw new Exception("Can't undecode image data");
            }
        } else {
            throw new Exception("Data type is invalid");
        }

        $imageName = $this->getImageName($type);
        $file = $this->directory . '/' . $imageName;

        if (file_put_contents($file, $data)) {
            return realpath($this->directory . '/' . $imageName);
        }

        throw new Exception("Can't save image");
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