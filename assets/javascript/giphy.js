//
$(document).ready(function () {

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

      topics.push(inputNewTopic);

      showButtons();
      giphySearch();

    });

  };

  // new button prevent default
  $(newButton).on("click", function (e) {
    e.preventDefault();
  })


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

        var results = response.data;

        //loop results and display gif
        $.each(results, function (i) {

          const gifDiv = $("<div class='gifDiv'>");

          let displayGif = $("<img>").attr("src", results[i].images.fixed_height_still.url).addClass("stopstart mx-2 my-2 float-left align-items-center");
          let movingGif = $("<img>").attr("src", results[i].images.fixed_height.url).addClass("stopstart mx-2 my-2 float-left align-items-center");
          
          console.log(displayGif);
          console.log(movingGif);

          gifDiv.html(displayGif);

          $("#gifs").prepend(gifDiv);



        });
      }); //end of then
    }); //end of on click inputbtn

    
  };


$(".gifDiv").on("click", "document", function(e) {
  console.log("gifDiv");
});
   
 //stop and start - more or less from class example 
 $(".stopstart").on("click", "document", function () {

  console.log(".stopstart");

  let playState = $(".stopstart");
  console.log(playState);

  if (playState === ".stopstart") {
      $(this).replaceWith(movingGif);
 
    } else {
     $(this).replacewith(displayGif); 
    };
  });
});