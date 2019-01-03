<?php

use yii\helpers\Url;

?>

asdasdasd

<?= Url::to(['bugReport']) ?>
<script>

    var xhr = new XMLHttpRequest();
    xhr.open('GET', "bugReport");

    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('User\'s name is ' + xhr.responseText);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();

</script>