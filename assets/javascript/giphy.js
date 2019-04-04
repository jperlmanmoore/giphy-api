//

$(document).ready(function () {

  //initial array of subjects
  let topics = ["YAAASSS", "YOLO", "LOVE", "NO", "SRSLY", "OMG", "LOL", "WOW", "YES", "UGHHH", "YIKES", "EYEROLL", "SMH"];

  console.log(topics);

  //display each button for item in topics array

  function renderButtons() {

    $("#topicBtns").empty();

    $.each(topics, function (i) {

      const buttonDiv = $("<div>");

      const btnText = $("<button>").text(topics[i]).addClass("text float-left mx-2 my-2 btn btn-group btn-light btn-outline-dark btn-lg");
      
      buttonDiv.append(btnText);

      $("#topicBtns").append(buttonDiv);

      console.log(buttonDiv);

    }); //end for loop for topics

    // console.log(renderButtons);
  };

  //search box and make a new button
  renderButtons();

  $("#inputBtn").on("click", function (e) {
    e.preventDefault();

    const inputNewTopic = $("#input").val().trim();

    topics.push(inputNewTopic);

    renderButtons();

  });


  //
  $("#topicBtns").on("click", function (e) {

    e.preventDefault();

    const giphy = $(this).text('');

    const queryURL =("https://api.giphy.com/v1/gifs/search?q=" + giphy + "&limit=10&api_key=551UgcDQTs1GvIWT37yUtpo3MbqJ6ShZ");

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {

        console.log(queryURL);

        var results = response.data;

        $.each(results, function (i) {

          const gifDiv = $("<div>");

          // const gif = results[i].images.fixed_width_small_still;

          let displayGif = $("<img>");

          displayGif.attr("src", results[i].images.fixed_width_small_still.url);

          // gifDiv.append(gif)

          $(gifDiv).appendTo("#gifs");
          gifDiv.append(displayGif);


        });



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
      }); //end of then
  }); //end of on click inputbtn
});
