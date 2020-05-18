$(function () {
    $('#sendButton').on('click', function () {

        if ($('#dateOfBirth').val() == '') {
            runCustomEffect("shake");
        } else {
            runCustomEffect("blind");
            var dateOfBirth = moment($('#dateOfBirth').val(), ['DD-MM-YYYY', 'MM-DD-YYYY', 'YYYY-MM-DD']);
            var futureAge = moment().diff(dateOfBirth, 'years');
            var newDateOfBirth = dateOfBirth.add(futureAge + 20, 'year');

            $('.dayOfWeek').text('Ваш день народження буде у: '+ newDateOfBirth.locale('uk').format('dddd'));
            $('.text').text(newDateOfBirth.locale('uk').format('Do.MM.YYYY'));
            $('.futureAge').text('ваш вік:' + (futureAge + 20));
        }

        function runCustomEffect(effectValue) {
            var options = {};
            $('.dataForm').effect(effectValue, options, 700, function () {
                setTimeout(function () {
                    $('form').removeAttr('style').hide().fadeIn();
                }, 1000);
            })
        }
    })
    console.log(moment().toString())
})
