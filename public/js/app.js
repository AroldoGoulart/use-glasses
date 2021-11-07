"use strict";

$(function () {
    const constraints = {
        video: true
    };

    var canvas = null;
    var video = document.querySelector('video');

    function handleSuccess(stream) {
        window.stream = stream;
        video.srcObject = stream;

        $("#tirar_foto").click(takeSnapshot);
    }

    function handleError(error) {
        console.log('getUserMedia error: ', error);
    }

    function takeSnapshot() {
        let context;
        let width = video.offsetWidth,
            height = video.offsetHeight;

        canvas = canvas || document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, width, height);

        $("#video , .tirar_foto-step1").hide();
        $("#snapshot-preview, .tirar_foto-step2").show();
        $("#snapshot-preview, #thephoto").attr("src", canvas.toDataURL('image/png'));
    }

    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);

    if ($('#camera-feed').length > 0) {
        new CameraApp();
    }
    if ($('#camera-container').length > 0) {
        new MedidorDNP('#camera-container', jQuery);
    }

    $("#tirar_foto_sucesso").click(function() {
        $("#snapshot-preview, .tirar_foto-step2").hide();
        $("#camera-container, #side-bar-info").show();
    });

    $("#tirar_outra_foto").click(function() {
        $("#video, .tirar_foto-step1").show();
        $("#snapshot-preview, .tirar_foto-step2").hide();
    });
});
