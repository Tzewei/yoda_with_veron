$(document).ready(function() {

    console.log("ready!");

    var $btn = $('#request');
    var $bio = $('#bio');
    var $textInput = $("#myText");
    var $loader = $('.loader');
    $loader.hide();

    $btn.on('click', function(e) {

        // prevent the default behavior of the link
        e.preventDefault();
        console.log('click'); //Display if clicked

        // execute the AJAX request
        $.ajax({
                // where the data live
                url: 'https://yoda.p.mashape.com/yoda?sentence=',
                type: 'GET',
                data: {
                    sentence: $textInput.val()
                },
                // what is their type
                dataType: 'html',
                // show the loader before making the request
                beforeSend: function(xhr) {
                    $loader.show();
                    xhr.setRequestHeader('X-Mashape-Key', '6uSYHYGrrAmsh0BYvusfxuuxH6PJp1ERGeYjsncRuEznHbrgvE');
                },
            }).done(successFunction)
            .fail(failFunction);
        //.always(alwaysFunction);
    });

    function successFunction(data) {
        // hide the loader and show the modal
        // $btn.hide();
        console.log('in successFunction');
        console.log(data);

        // $bio.style.border = '1px solid #e8e8e8';
        $bio.css('border','1px solid grey');

        $loader.hide();
        $bio.html('Yoda will say: ' + data);

    }

    function failFunction(request, textStatus, errorThrown) {
        // hide the list and show the corresponding message
        $bio.html('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
    }

});
