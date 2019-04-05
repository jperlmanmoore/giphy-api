//
$(document).ready(function () {

  //initial array of subjects
  let topics = ["YAAASSS", "YOLO", "WHAAA", "What the What", "LOVE", "NO", "SRSLY", "OMG", "LOL", "WOW", "YES", "UGHHH", "YIKES", "EYEROLL", "SMH"];

  console.log(topics);

  //display each button for item in topics array

  function showButtons() {

    $("#topicBtns").empty();

    $.each(topics, function (i) {

      const buttonDiv = $("<div>");

      const btnText = $("<button>").text(topics[i]).addClass("text btncolor float-left mx-2 my-2 btn btn-outline-dark btn-lg");

      buttonDiv.append(btnText);

      $("#topicBtns").append(buttonDiv);

      console.log(buttonDiv);

    }); //end for loop for topics

    // console.log(renderButtons);
  };

  showButtons();
  giphySearch();

  //search box and make a new button
  function newButton() {
    $("#inputBtn").on("click", function (e) {
      e.preventDefault();

      const inputNewTopic = $("#input").val().trim();

      topics.push(inputNewTopic);

      showButtons();
      giphySearch();
      
    });
    
  };

 // new button prevent default
  $(newButton).on("click", function (e) {
    e.preventDefault();
  })


  //giphy search on API

  //maybe because i used class name text and not data-name for the buttons this needs to be fixed
  function giphySearch() {

    $(".text").on("click", function (e) {

      e.preventDefault();

      const giphy = $(this).text();

      // const api_key = ("551UgcDQTs1GvIWT37yUtpo3MbqJ6ShZ");

      const queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + giphy + "&limit=10&api_key=551UgcDQTs1GvIWT37yUtpo3MbqJ6ShZ");

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        console.log(queryURL);

        var results = response.data;

        //loop results and display gif
        $.each(results, function(i) {

          const gifDiv = $("<div>");

          let displayGif = $("<img>");
          //console.log(displayGif);

          displayGif.attr("src", results[i].images.fixed_height.url);
          displayGif.addClass("mx-2 my-2 float-left align-items-center ");

          //gifDiv.append(gif)
          gifDiv.html(displayGif);

          $("#gifs").prepend(gifDiv);

          // if (response >= 10) {
          //   return false;
          // }

        });

      }); //end of then
    }); //end of on click inputbtn
  };

//stop and start gif
// $(".gif").on("click", function () {
//     var state = $(this).attr("data-state");

//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     };

});

