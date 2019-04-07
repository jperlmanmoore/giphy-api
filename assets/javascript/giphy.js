//
$(document).ready(function () {

  //initial array of subjects
  let topics = ["YAAASSS", "YOLO", "WHAAA", "WHAT THE WHAT", "I HEART YOU", "NO", "SRSLY", "OMG", "LOL", "WOW", "YES", "UGHHH", "YIKES", "EYEROLL", "SMH"];

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

    // console.log(renderButtons);
  };

  showButtons();
  giphySearch();

  //search box and make a new button
  //if no text, then no new button
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

      const queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + giphy + "&limit=10&api_key=551UgcDQTs1GvIWT37yUtpo3MbqJ6ShZ");

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        console.log(response);

        var results = response.data;

        //loop results and display gif
        $.each(results, function (i) {

          const gifDiv = $("<div>");

          let displayGif = $("<img>");
          //console.log(displayGif);

          displayGif.attr("src", results[i].images.fixed_height.url);
          displayGif.addClass("stop mx-2 my-2 float-left align-items-center");


          gifDiv.html(displayGif);

          $("#gifs").prepend(gifDiv);

        });
      }); //end of then
    }); //end of on click inputbtn
  };

  //stop and start - more or less from class example
   
  
  $("img").on("click", function (event) {
    event.preventDefault;

    console.log("hey");

    const playState = $("img");
    // playState.attr("data-playing");
    console.log(playState);

    if (playState === "data-playing") {
        // $(this).removeAttr("src", results[i.images.fixed_height.url]);
        $(this).append("src", results[i].images.fixed_height_still.url);
        $(this).attr("data-stop", "still");
      } else {
        //
      };
    });
  

});