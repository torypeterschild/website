$( "a.a-expand" ).click(function() {
  $( this ).toggleClass( "expanded" );
});

$( "a.a-collapse" ).click(function() {
  $( "a.a-expand" ).toggleClass( "expanded" );
});