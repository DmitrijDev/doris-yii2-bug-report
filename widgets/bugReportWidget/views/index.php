<?php

use yii\helpers\Url;
use doris\bugReport\assets\BugReportAsset;

BugReportAsset::register($this);
?>

<div class="bug-report-status-bar">
    <div class="bug-report-loader"></div>
    <div class="bug-report-make-screen" onclick="BugReportModule.popup.showWindow()"></div>
</div>

<div class="bug-report-wrap">
    <div class="bug-report-background"></div>

    <div class="bug-report-window">
        <div class="canvas-wrap">
            <div class="tools">
                <div class="tools-wrap">
                    <div id="bugreport-ellipse" class="tool"></div>
                    <div id="bugreport-quadrangle" class="tool"></div>
                    <div id="bugreport-pencil" class="tool active"></div>
                </div>

                <div class="make-screen">
                    <input type="file" id="bg-file-image-load" class="load-from-pc"
                           onchange="BugReportModule.loadImage(event)" accept="image/x-png,image/gif,image/jpeg"/>
                    <label for="bg-file-image-load" class="bg-link">Загрузить</label>
                    <button class="load-from-js bg-link" onclick="BugReportModule.makeScreen()">Сделать скрин</button>
                </div>
            </div>
            <div id="canvasSimpleDiv" class="hide">Тут будет картинка</div>
        </div>

        <div class="bug-report-text-elements">
            <div class="bug-report-text">
                <label>Описание ошибки:</label>
                <textarea id="bug-description"></textarea>
            </div>

            <button class="bug-report-submit bg-button" onclick="BugReportModule.sendReport()">ЗАРЕПОРТИТЬ!</button>
        </div>
    </div>
</div>
