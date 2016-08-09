// var btn = document.getElementById('translate');
var request = new XMLHttpRequest();

$(function() {
  var $txtArea = $('#textArea'),
      $result = $('#result'),
      $translate = $('#translate');

  $translate.on('click', function(e) {

    e.preventDefault();
    console.log('clicked');

    $.ajax({
      url: "https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.",
      type: 'GET',
      data: {
        sentence: $txtArea.val()
      },
      // dataType: 'json',
      beforeSend: function(xhr) {
                    xhr.setRequestHeader(
                    // 'X-Mashape-Key: 5YLQrzUFnSmshxGAypr5wO73X8Uzp1BoNthjsnXFYT8XutFo0x');
                    'X-Mashape-Key: 6uSYHYGrrAmsh0BYvusfxuuxH6PJp1ERGeYjsncRuEznHbrgvE');
                  }

    }).done(function(data) {
        $result.text(data);
      })
      .fail(function(request, textStatus, errorThrown) {
        $result.html('Error:' + request.status + '' + textStatus + '' + errorThrown);
      });
  });
});
