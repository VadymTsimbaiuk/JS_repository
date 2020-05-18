$(function () {
    $(document).tooltip();
    
    var names = [
        'Аврора',
        'Артем',
        'Георгій',
        'Ольга',
        'Сергій',
        'Володимир',
        'Степан',
        'Петро',
        'Антон',
        'Вадим',
        'Владислав',
        'Олег',
        'Микола',
        'Михайло']

    $('#name').autocomplete({
        source: names
    });
    $('#age').spinner({
        numberFormat: 'n',
        min: 1,
        max: 100
    });
    $('#dateOfBirth').datepicker({
                dateFormat: 'dd.mm.yy'
    });
    $('#sendData').on("click", function () {
        if ($('#name').val() == '') {
            $('#name').attr('placeholder', 'Введіть ваше ім`я');
            runCustomEffect("shake");
        } else if ($('#age').spinner('value') == null) {
            
            $('#age').val(null);
            runCustomEffect("shake");
        } else if ($('#dateOfBirth').val() == '') {
            
            runCustomEffect("shake");
        } else {
            runCustomEffect("blind");
            console.log($('#name').val()+' '+ $('#age').val()+ ' ' + $('#dateOfBirth').val());

        };
        return false;
    });
});

function runCustomEffect(effectValue) {
    var options = {};

    $('.dataForm').effect(effectValue, options, 500, function () {
        setTimeout(function () {
            $('#form').removeAttr('style').hide().fadeIn();
        }, 1000);
    });
}