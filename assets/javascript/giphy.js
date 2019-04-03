//

$(document).ready(function () {

  //initial array of subjects
  let topics = ["yaaas", "clap", "excited", "love", "no", "yes", "OMG", "LOL", "wow", "yes", "disgusted", "sad", "tired", "SMH"];

  console.log(topics);

  //display each button for item in topics array

  function renderButtons() {

    $("#topicBtns").empty();

    $.each(topics, function(i) {

      const buttonDiv = $("<div>");

      const btnText = $("<button>").text(topics[i]).addClass("text float-left mx-2 my-2 btn btn-group btn-light btn-outline-dark btn-lg");

      buttonDiv.append(btnText);

      $("#topicBtns").append(buttonDiv);

      console.log(buttonDiv);

    }); //end for loop for topics

    console.log(renderButtons);
  };

  renderButtons();

  $("#inputBtn").on("click", function (e) {
    e.preventDefault();

    

    const inputNewTopic = $("#input").val().trim();

    topics.push(inputNewTopic);

    renderButtons();
    
  });

  //API request -- needs to do two things
  // const queryURL = "https://api.giphy.com/v1/gifs/random?" +
  //     search + "api_key=551UgcDQTs1GvIWT37yUtpo3MbqJ6ShZ&rating=PG&limit=10";

  //   $.ajax({
  //     url: queryURL,
  //     method: "GET"
  //   }).then(function (response) {

  //     console.log(response);

  //     const results = response.data;

  //     displayGif();

  //   }); //end of .then

  //   //for each result make a gif image appear in the gifDiv
  // function displayGif() {
  //   $.each(results, function (i) {

  //     const gifDiv = $("<div>");

  //     const gif = results[i].gif;

  //     gif.attr("src", results[i].gif.fixed_height.url);

  //     gifDiv.append(gif);

  //   });







  //      $("#add-to-do").on("click", function(event) {
  // event.preventDefault();

  // // Get the to-do "value" from the textbox and store it a variable
  // var toDoTask = $("#to-do").val().trim();

  // // Create a new variable that will hold a "<p>" tag.
  // // Then give it an ID in the following form:
  // // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
  // // Then set the to-do "value" as text to this <p> element.
  // var toDoItem = $("<p>");

  // toDoItem.attr("id", "item-" + toDoCount);
  // toDoItem.text(toDoTask);

  // // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
  // // Give your button a data attribute called data-to-do and a class called "checkbox".
  // // Lastly add a checkmark inside.

  // var toDoClose = $("<button>");

  // toDoClose.attr("data-to-do", toDoCount);
  // toDoClose.addClass("checkbox");
  // toDoClose.text("✓");

  // // Append the button to the to do item
  // toDoItem = toDoItem.prepend(toDoClose);

  // // Add the button and to do item to the to-dos div
  // $("#to-dos").append(toDoItem);

  // // Clear the textbox when done
  // $("#to-do").val("");

  //  for the search term make a button
  // $.each(results, function(i) {

  //    const newTopic[]; 

  //   $.merge($.merge([], first), second);

  // });









  // var first = [ "a", "b", "c" ];
  // var second = [ "d", "e", "f" ];
  // $.merge( $.merge( [], first ), second );


  // $.each(results, function(i) {
  //   list.push(this.data.innerHTML)
  // });


  //   var results = response.data;

  //   jQuery.each(results.length, function (i, val) {

  //   var gifDiv = $("<img>");

  //   gifDiv.attr("src", results[i]);

  //   gifDiv.append()

  //   var gif = results[i].

  // //       //$("#btn" + i).append(buttons = element with text)
  // //       //$("img" + i).append(images = element with gifs)






  //stop and start gif
  $(".gif").on("click", function () {
    //   var state = $(this).attr("data-state");

    //   if (state === "still") {
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
    //   } else {
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
    //   }


    // });
    //};
  });

});