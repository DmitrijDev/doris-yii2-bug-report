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
    <div class="bug-report-make-screen" onclick="makeScreen()"></div>
</div>

<div class="bug-report-wrap">
    <div class="bug-report-background"></div>

    <div class="bug-report-window">
        <div id="canvasSimpleDiv"></div>

        <div class="bug-report-text">
            <label>Описание ошибки:</label>
            <textarea id="bug-description"></textarea>
        </div>

        <button class="bug-report-submit" onclick="BugReportModule.sendReport()">ЗАРЕПОРТИТЬ!</button>
    </div>
</div>
