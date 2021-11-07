function MedidorDNP(containerString, $) {
    //var CC_WIDTH = 85.6;
    //var CC_WIDTH = 87;
    var CC_WIDTH = 90;
    var container = $(containerString);
    var pointers = {};
    var pointNames = ['oe', 'od', 'ce', 'cd', 'alt'];

    this.calculateDNP = function (event) {
        var $this = $(event.target);
        var id = $this.data('id');
        var pos = pointers[id].point.data('draggabilly').position;
        $('#input_'+id).val(pos.x+','+pos.y);

        var eye_distance = this.distance(pointers.oe.point.data('draggabilly').position,
                    pointers.od.point.data('draggabilly').position);
        var card_distance = this.distance(pointers.ce.point.data('draggabilly').position,
                    pointers.cd.point.data('draggabilly').position);
        var new_card_distance = card_distance - 44 + (80 - 44);
        //console.log(((eye_distance * CC_WIDTH) / card_distance));
        var baseDNP = ((eye_distance * CC_WIDTH) / new_card_distance);
        var result = baseDNP;// + baseDNP * .105;

        var framesHeightInPixels = pointers.alt.point.data('draggabilly').position.y-26
            - pointers.oe.point.data('draggabilly').position.y;
        /*console.log(pointers.alt.point.data('draggabilly').position.y,
            pointers.oe.point.data('draggabilly').position.y,
            framesHeightInPixels);*/
        var framesHeight = (framesHeightInPixels * CC_WIDTH) / new_card_distance;
        //console.log(framesHeightInPixels, '=>', framesHeight);
        if (framesHeight >= 3 && framesHeight <= 50) {
            $('#input_framesHeight').val(framesHeight);
        } else {
            $('#input_framesHeight').val(0);
        }

        $('#input_dp').val(result);
        $('#c_dp').html(result.toFixed(3));

        $('#eye_distance').val(eye_distance);
        $('#card_distance').val(card_distance+' => '+new_card_distance);
        //$('#dpmedida').html('dp: '+result+', framesheight: '+framesHeight);
        if (result <= 80 && result >= 40) {
            $('#save-dnp').removeAttr('disabled');
        } else {
            $('#save-dnp').attr('disabled', 'disabled');
        }
    }

    this.getPoints = function () {
        return {
            oe: pointers.oe.point.data('draggabilly').position,
            od: pointers.od.point.data('draggabilly').position,
            ce: pointers.ce.point.data('draggabilly').position,
            cd: pointers.cd.point.data('draggabilly').position
        }
    }

    this.distance = function (a, b) {
        var x = Math.pow((a.x-b.x), 2);
        var y = Math.pow((a.y-b.y), 2);
        return Math.sqrt(x + y);
    }

    // constructor
    var $svgContainer = $('#svgsContainer');
    for (var i = 0, l = pointNames.length; i < l; i++) {
        pointers[pointNames[i]] = {};
        pointers[pointNames[i]].point = $svgContainer.find('.'+pointNames[i]).clone();
        pointers[pointNames[i]].point.data('id', pointNames[i]);
        pointers[pointNames[i]].point.attr('class', 'crosshair '+pointNames[i]);

        container.append(pointers[pointNames[i]].point);
        pointers[pointNames[i]].point.draggabilly({
            containment: container,
            //handle: '.handle'
        }).on('dragEnd', this.calculateDNP.bind(this));
    }

    $('#save-dnp').click(function (e) {
        $('form').submit();
        $(this).attr('disabled', 'disabled').html('Processando...');
    });

    $('#invert-image').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#thephoto').css({
            '-moz-transform': 'scaleY(-1)',
            '-o-transform': 'scaleY(-1)',
            '-webkit-transform': 'scaleY(-1)',
            'transform': 'scaleY(-1)',
        });
    });

};
