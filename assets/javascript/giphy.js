//

$(document).ready(function () {

//array of subjects
let topics = ["yaaas", "clap", "excited", "love", "no", "yes", "OMG", "LOL", "wow", "Yes", "disgusted", "sad", "tired", "SMH"]; 


//display each button for item in topics array
$.each(topics, function(i){
  const buttonDiv = $("<div>");

  //$("<div>").attr("topicBtns")

  const btntext = $("<button>").text(topics[i]).addClass("btn btn-group btn-light btn-group-lg");

  buttonDiv.append(btntext);

  $("#topicBtns").append(buttonDiv);

  console.log(btntext);

});

//function to add searched words to the topics array

function addTopics() {

}
  
 
});
  
    //   $("#submit").on("click", function () {

    //       var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=551UgcDQTs1GvIWT37yUtpo3MbqJ6ShZ&tag=t-rex&rating=PG&limit=5";

    //       var submit = $(this).attr("data-rex");


    //       $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //       }).then(function (response) {
    
    //         console.log(response);

    //         var results = response.data;

    //         jQuery.each(results.length, function (i, val) {

              
    //           var imgDiv = $("<button>");

    //           var image = results[i].

    //       //$("#btn" + i).append(buttons = element with text)
    //       //$("img" + i).append(images = element with gifs)

    //   }) //end of loop


    //   }); //end of .then

    //     //funciton to click to start gif

    //     //funciton to click to stop gif

    //   }); //end submit on click

    // }); //end document ready