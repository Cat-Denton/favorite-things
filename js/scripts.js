$(document).ready(function() {
  $("#favThings").submit(function(event) {
    const animal = $("input#animal").val();
    const food = $("input#food").val();
    const color = $("input#color").val();
    
    let favThings = [animal,food,color];
    // alert(favThings);

    let first = favThings[0];
    let second = favThings[1];
    let third = favThings[2];

    let revThings = [];
    revThings.push(third);
    // alert(revThings);
    revThings.push(second);
    // alert(revThings);
    revThings.push(first);
    // alert(revThings);

    $("#revColor").text(revThings[0]);
    $("#revFood").text(revThings[1]);
    $("#revAnimal").text(revThings[2]);
    event.preventDefault();
  });
});