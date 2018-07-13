src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
type="text/javascript"


var animals = ["dogs", "cats", "mongoose", "ducks", "racoons"];

        // $("button").on("click", function () {
        //     var animal = $(this).attr("data-animal");
        //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        //         animal + "&api_key=dc6zaTOxFJmzC&limit=10";
        //     console.log(animal);

        //     $.ajax({
        //         url: queryURL,
        //         method: "GET"
        //     })
        //         .then(function (response) {
        //             var results = response.data;

        //             for (var i = 0; i < results.length; i++) {
        //                 var gifDiv = $("<div class='item'>");

        //                 var rating = results[i].rating;

        //                 var p = $("<p>").text("Rating: " + rating);

        //                 var animalImage = $("<img>");
        //                 animalImage.attr("src", results[i].images.fixed_height.url);

        //                 gifDiv.prepend(p);
        //                 gifDiv.prepend(animalImage);

        //                 $("#gifs-appear-here").prepend(gifDiv);
        //             }
        //         });
        // });
        function displayAnimalInfo() {
            var animals = $(this).attr("data-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            animals + "&api_key=dc6zaTOxFJmzC&limit=10";
    
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response.data);
                for (var i = 0; i < 10; i++) {
    
                    var imgStill = response.data[i].images.fixed_height_still.url;
                    var imgAnimate = response.data[i].images.fixed_height.url;
                    var image = $("<img>").attr("src", imgStill);
                    image.attr("data-state", "still");
                    image.attr("still", imgStill);
                    image.attr("animate", imgAnimate);
                    $(".imageHolder").append(image);
                    var responseRating = response.data[i].rating;
                    var r = $("<p>").text("Rating: " + responseRating);
                    $(".imageHolder").append(r);
    
    
                }
    
                
                $("img").on("click", function () {
                    console.log("clicked image");
                    var state = $(this).attr("data-state");
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("animate"));
                        $(this).attr("data-state", "animate");
                        console.log(this);
                    } else {
                        $(this).attr("src", $(this).attr("still"));
                        $(this).attr("data-state", "still");
                    }
                });
    
            });
        }