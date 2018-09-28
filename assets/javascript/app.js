$("#add-train").on("click", function(event) {
    // prevent page from refreshing when form tries to submit itself
    event.preventDefault();

    // Capture user inputs and store them into variables
    var name = $("#name-input").val().trim();
    var email = $("#destination-input").val().trim();
    var age = $("time-input").val().trim();
    var comment = $("#frequency-input").val().trim();

    console.log(name);
    console.log(email);
    console.log(age);
    console.log(comment);

    $("#name-display").text(name);
    $("#destination-display").text(email);
    $("#time-display").text(age);
    $("#frequency-display").text(comment);