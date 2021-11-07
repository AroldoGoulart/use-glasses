"use strict";

function instantSetInterval(fn, delay) {
    fn();
    return setInterval(fn, delay);
}

function isIPhone() {
    return (
        (navigator.platform.indexOf("iPhone") != -1) ||
        (navigator.platform.indexOf("iPod") != -1)
    );
}

function CameraApp() {
    function takePicHandler(e) {
        //alert('take');
        var i = 3;
        var button = $(this);
        button.data('default-label', button.html());
        var interval;
        interval = instantSetInterval(function () {
            //button.html(i);
            $('.counter-overlay .big-number').html(i);
            $('.counter-overlay').show();
            if (i-- < 1) {
                clearInterval(interval);
                Webcam.snap(function(data) {
                    $('#camera-result').prepend('<img src="'+data+'">');
                    $('#camera-result').data('dataUri', data);
                    $('#camera-result').show();
                    //button.html(button.data('default-label'));
                    $('.counter-overlay').hide();
                    $('#camera-feed').hide();
                    $('#button-bar').hide();
                });
            }
        }, 1000);
    }
    Webcam.on('error', function (e) {
        
        $('body').append(e);
        //alert(e);
        //console.log(e);
    });
    if (isIPhone()) {
        //alert('a');
        loadIPhone();
        return;
    }
    Webcam.set({
        flip_horiz: true,
        enable_flash: true,
        flashNotDetectedText: ''
    });
    Webcam.attach('camera-feed');
    $('#use-pic').click(function () {
        //alert('use-pic');
        var button = $(this);
        button.data('label', button.html());
        button.html('Processando...');
        button.attr('disabled', '');
        var data = $('#camera-result').data('dataUri');
        button.html('Direcionando...');
        Webcam.upload(data, 'upload.php', function(code, response) {
            location.href = location.protocol+'//'+location.host+location.pathname+'?m=medicao';
            //location.href = location.protocol+'//'+location.host+location.pathname+'?m=fim';
            //button.removeAttr('disabled');
        });
    });
    Webcam.on('live', function (e) {
        //alert('live');
        $('#camera-init-warning').hide();
        var buttonBar = $('#button-bar').detach();
        $('#camera-feed').after(buttonBar);
        buttonBar.show();
        var overlay = $('.camera-overlay').detach();
        $('#camera-feed').append(overlay);
        overlay.show();
        /*$('.camera-overlay').css({
            'width': $('#camera-feed').innerWidth()+'px',
        }).show();*/

        $('#takePic').click(takePicHandler);
        $('#use-pic').removeAttr('disabled');

        var ratio = Webcam.video.videoWidth/Webcam.video.videoHeight;
        var height = parseInt($('#camera-feed').innerWidth(), 10)/ratio;
        //console.log(height);
        $('#camera-feed').css('height', height+'px');
        Webcam.video.style.height = height+'px';
        Webcam.set('dest_height', height);

        var overlay = $('#faceOverlay').detach();
        $('#camera-feed').append(overlay);
        var cameraHeight = parseInt($('#camera-feed').innerHeight(), 10);
        cameraHeight -= .05 * cameraHeight;
        cameraHeight *= -1;
        var overlayMargingTop = cameraHeight + 'px';
        overlay.css({ 'top': overlayMargingTop, 'margin-top': 0, 'display': 'inline-block' });
    });
    $('#take-another').click(function () {
        $('#button-bar').show();
        $('#camera-result').hide();
        $('#camera-result img').remove();
        $('#camera-feed').show();
        $('#use-pic').removeAttr('disabled');
    });
}

function loadIPhone() {
    $('#camera-init-warning').hide();
    $('#iphone').show();
    $('#camera-feed').hide();

    $('#upload_iframe').on('load', function() {
        $('#iphone button').html('Tirar Foto');
        //location.href = location.protocol+'//'+location.host+location.pathname+'?m=fim';
        location.href = location.protocol+'//'+location.host+location.pathname+'?m=medicao';
        //location.href = location.protocol+'//'+location.host+location.pathname+'upload.php';
        ////alert('asd>>'+location.href);
    });

    $('#inputfile').change(function () {
        $('#iphone button').html('Enviando foto...');
        $('#iphone').submit();
    });
}