//
//$(document).ready(function () {
$(function() {
  //initial array of subjects
  let topics = ["YAAASSS", "YOLO", "WHAAA", "WHAT THE WHAT", "SRSLY", "OMG", "LOL", "143", "GR8", "IKR", "EYEROLL", "SMH", "OKURR", "ERMAHGERD"];

  console.log(topics);

  //display each button for item in topics array

  function showButtons() {

    $("#topicBtns").empty();

    $.each(topics, function (i) {

      const buttonDiv = $("<div>");

      const btnText = $("<button>").text(topics[i]).addClass("text float-left mx-2 my-2 btn btn-outline-dark btn-lg");

      buttonDiv.append(btnText);

      $("#topicBtns").append(buttonDiv);

      console.log(buttonDiv);

    }); //end for loop for topics

  };

  showButtons();
  giphySearch();

  //search box and make a new button
  //if no text, then no new button
  function newButton() {
    $("#inputBtn").on("click", function (e) {
      e.preventDefault();

      const inputNewTopic = $("#input").val().trim();
      if(inputNewTopic != "") {
        topics.push(inputNewTopic);

        showButtons();
        giphySearch();
      }
    });

  };

  // new button prevent default
  $(newButton).on("click", function (e) {
    e.preventDefault();
  })

  var results;
  //giphy search on API & display giphys

  function giphySearch() {

    $(".text").on("click", function (e) {

      e.preventDefault();

      const giphy = $(this).text();

      const queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + giphy + "&limit=10&api_key=551UgcDQTs1GvIWT37yUtpo3MbqJ6ShZ");

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        console.log(response);

        results = response.data;

        //loop results and display gif
        $.each(results, function (i) {

          const gifDiv = $("<div class='gifDiv'>");

          let displayGif = $("<img>")
            .attr("src", results[i].images.fixed_height_still.url)
            .addClass("stopstart mx-2 my-2 float-left align-items-center")
            .data("i", i);
          
          console.log(displayGif);
          //console.log(movingGif);

          gifDiv.html(displayGif);

          $("#gifs").prepend(gifDiv);



        });
      }); //end of then
    }); //end of on click inputbtn


  };

  //stop and start - more or less from class example 
  $("#gifs").on("click", ".stopstart", function () {

    console.log(".stopstart");
    var i = $(this).data("i");
    let movingGif = $("<img>")
      .attr("src", results[i].images.fixed_height.url)
      .addClass("stopstart moving mx-2 my-2 float-left align-items-center")
      .data("i", i);

    let displayGif = $("<img>")
      .attr("src", results[i].images.fixed_height_still.url)
      .addClass("stopstart mx-2 my-2 float-left align-items-center")
      .data("i", i);

    let isMoving = $(this).hasClass("moving");
    console.log(isMoving);

    if (isMoving === false) {
      $(this).replaceWith(movingGif);
    } else {
      $(this).replaceWith(displayGif);
    };
  });
});