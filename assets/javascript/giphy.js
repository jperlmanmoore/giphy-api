// I forgot to add the rating of the gifs - :(
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

      const btnText = $("<button>").text(topics[i]).addClass("text border-0 float-left mx-2 my-2 btn btn-outline-secondary btn-lg");

      buttonDiv.append(btnText);

      $("#topicBtns").append(buttonDiv);

      console.log(buttonDiv);

    }); //end for loop for topics

  }; //end showButtons

  showButtons();
  giphySearch();
  newButton();

  //search box and make a new button
  //if no text, then no new button
  //*need to make so clears text on submit
  //*need to make input text be capital letters
  function newButton() {
    $("#inputBtn").on("click", function (e) {

      e.preventDefault();

      const inputNewTopic = $("#input").val().trim();
      
      if(inputNewTopic != "") {   //if inputNewTopis isn't empty
      
        topics.push(inputNewTopic);

        showButtons();
      
        giphySearch();
      } //end of if
    }); //end of onclick
  }; //end of newButton

  let results;

  //giphy search on API & display giphys
  function giphySearch() {

    $(".text").on("click", function (e) {

      e.preventDefault();

      const giphy = $(this).text();

      const queryURL = ("https://api.giphy.com/v1/gifs/search?q=" + giphy + "&rating=PG&limit=10&offset=" + Math.floor(Math.random() * 50) + "&api_key=551UgcDQTs1GvIWT37yUtpo3MbqJ6ShZ");

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
          
          //console.log(displayGif);
          //console.log(movingGif);

          gifDiv.html(displayGif);

          $("#gifs").prepend(gifDiv);

        }); //end of each
      }); //end of then
    }); //end of on click inputbtn

  };

  //stop and start 
  $("#gifs").on("click", ".stopstart", function () {

    //console.log(".stopstart");
    var i = $(this).data("i");
    let movingGif = $("<img>")
      .attr("src", results[i].images.fixed_height.url)
      .addClass("stopstart moving mx-2 my-2 float-left align-items-center")
      .data("i", i);

    //still image
    let displayGif = $("<img>")
      .attr("src", results[i].images.fixed_height_still.url)
      .addClass("stopstart mx-2 my-2 float-left align-items-center")
      .data("i", i);

    //moving image
    let isMoving = $(this).hasClass("moving");
    //console.log(isMoving);

    if (isMoving === false) {
      $(this).replaceWith(movingGif);
    } else {
      $(this).replaceWith(displayGif);
    }; //end else
  }); //end onclick
}); //end document