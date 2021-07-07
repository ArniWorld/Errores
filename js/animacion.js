$(document).ready(function() {
    sw = true;
    $('#click').click(function() {
        if (sw) {
            $('.animacion').css('display', 'block');
            $('.textCard').css('background', 'black');
            $('.card').css('background', 'black');
            $('h3').css('color', 'yellow');
            $('p').css('color', 'yellow');
            $('.animacion2').css('display', 'block');

        } else {
            $('.animacion').css('display', 'none');
            $('.textCard').css('background', 'white');
            $('.card').css('background', 'white');
            $('h3').css('color', 'black');
            $('p').css('color', 'black');
            $('.animacion2').css('display', 'none');

        }
        sw = !sw;
    });

});