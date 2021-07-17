$( function() {
    $( "ul.nav" ).accordion({
        heightStyle: "content",
        collapsible: true,
    });
});

$(document).ready(function() {
    var index = $('ul.nav').find('ul');
    for(var j = 0; j < index.length; j++){
        if(index[j].classList.contains('nav-klass-active')){
            $('ul.nav').accordion('option', 'active', j);
        }
    }
});