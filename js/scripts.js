$(document).ready(function() {
  $("#favThings").submit(function(event) {
    const animal = $("input#animal").val();
    const food = $("input#food").val();
    const color = $("input#color").val();
    
    let favThings = [animal,food,color];
    alert(favThings);
    event.preventDefault();
  });
});