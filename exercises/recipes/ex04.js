let count = 0;
$("#needy-button").click( function() {
   count = count + 10;
   $("#needy-button").html("You clicked me " + count + " too many times");
});
