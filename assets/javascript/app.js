  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBFKW8kmZDlcqgrb8HPoIxvSnj8PbiHQKs",
    authDomain: "train-scheduler312.firebaseapp.com",
    databaseURL: "https://train-scheduler312.firebaseio.com",
    projectId: "train-scheduler312",
    storageBucket: "train-scheduler312.appspot.com",
    messagingSenderId: "95605707053"
  };
  firebase.initializeApp(config);
  
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
});