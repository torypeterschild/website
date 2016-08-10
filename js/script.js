
$( "a.expander" ).click(function() {
    var domElement = $("#collapseOne")[0] // [0] returns the first DOM element that jQuery found
    $(domElement.attributes).each(function(index, attribute) {
        console.log("Attribute:"+attribute.nodeName+" | Value:"+attribute.nodeValue);
    });
});

$( "#dreamexpand" ).click(function() {
    $( this ).toggleClass('expander');
    $( this ).toggleClass('collapsed');
    if ($( this ).hasClass('expanded')) {
        $( this ).toggleClass('expanded');
    } else {
        $( this ).addClass('expanded');
    }
});

$( "#loveexpand" ).click(function() {
    $( this ).toggleClass('expander');
    $( this ).toggleClass('collapsed');
    if ($( this ).hasClass('expanded')) {
        $( this ).toggleClass('expanded');
    } else {
        $( this ).addClass('expanded');
    }
});

var domElement = $("#collapseOne")[0] // [0] returns the first DOM element that jQuery found
$(domElement.attributes).each(function(index, attribute) {
  console.log("Attribute:"+attribute.nodeName+" | Value:"+attribute.nodeValue);
});

$( "#dreamexpand" ).click(function() {
    var domElement = $("#dreamexpand")[0] // [0] returns the first DOM element that jQuery found
    $(domElement.attributes).each(function(index, attribute) {
      console.log("Attribute:"+attribute.nodeName+" | Value:"+attribute.nodeValue);
    });
});