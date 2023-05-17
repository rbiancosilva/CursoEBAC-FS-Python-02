$('form').on('submit', function(event) {
    event.preventDefault();
    const nometarefa = $('#inputnome').val();
    if(nometarefa!=""){
        const newil = $(`<li style="display: none"></li>`);
        $(`<div><h3>${nometarefa}</h3></div>`).appendTo(newil);
        newil.appendTo($('ul'));
        newil.fadeIn(1200);
        $('#inputnome').val('');
    }
})

$('#addh').click(function(){
    $('form').slideDown();
})

$('#ccl').click(function(){
    $('form').slideUp();
})

$('ul').on('click', 'li', function() {
    $(this).toggleClass('crossed');
});

