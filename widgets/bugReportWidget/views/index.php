<?php

use yii\helpers\Url;
use doris\bugReport\assets\BugReportAsset;

BugReportAsset::register($this);
?>

<div class="bug-report-status-bar">
    <div class="bug-report-loader">
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="bug-report-make-screen" onclick="BugReportModule.popup.showWindow()"></div>
</div>

<div class="bug-report-wrap">
    <div class="bug-report-background"></div>

    <div class="bug-report-window">
        <div class="canvas-wrap">
            <div class="tools">
                <div id="bugreport-ellipse"></div>
                <div id="bugreport-quadrangle"></div>
                <div id="bugreport-pencil"></div>
            </div>
            <div id="canvasSimpleDiv" class="hide">Тут будет картинка</div>
            <div class="make-screen">
                <button class="load-from-pc">Загрузить</button>
                <button class="load-from-js" onclick="BugReportModule.makeScreen()">Сделать скрин</button>
            </div>
        </div>

        <div class="bug-report-text-elements">
            <div class="bug-report-text">
                <label>Описание ошибки:</label>
                <textarea id="bug-description"></textarea>
            </div>

            <button class="bug-report-submit" onclick="BugReportModule.sendReport()">ЗАРЕПОРТИТЬ!</button>
        </div>
    </div>
</div>
