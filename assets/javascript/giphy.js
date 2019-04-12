$(function () {

  var config = {
    apiKey: "AIzaSyDoN5wEJkwUWFOZn6FI-B6RVcfNQeqCq1s",
    authDomain: "newfirebase-eea98.firebaseapp.com",
    databaseURL: "https://newfirebase-eea98.firebaseio.com",
    projectId: "newfirebase-eea98",
    storageBucket: "newfirebase-eea98.appspot.com",
    messagingSenderId: "602574684541"
  };
  firebase.initializeApp(config);


  const database = firebase.database();

  let user = {};

  $("#submit").on("click", function (e) {

    e.preventDefault();

    //const firstName  = $("#first_name").val().trim();
    let tmp = $("#first_name").val().trim();

    if (tmp != "") {
      user.firstName = tmp;
    };

    tmp = $("#state").val().trim();

    if (tmp != "") {
      user.state = tmp;
    };

    tmp = $("#income").val().trim();

    if (tmp != "") {
      user.income = tmp;
    };

    tmp = $("#age").val().trim();

    if (tmp != "") {
      user.age = tmp;
    };

    writeUserData(user);

  }); //end submit on click


  function writeUserData(user) {
    database.ref('users/' + user.firstName).set(  //user.firstname on this line is an ID for the data
      user
    );
  }; //end write user data

  //initialize form
  $(document).ready(function () {
    M.updateTextFields();
    $('.carousel').carousel();
    $('.modal').modal();
  });

}); //end document
