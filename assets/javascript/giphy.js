$(document).ready(function () {

    var giphyURL = $.get("https://cors-anywhere.herokuapp.comhttp://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=QvUBFBSSB6pUED03q42N1WDVzJh7CgEB" + myFaves + apiKey);
    var apiKey = "QvUBFBSSB6pUED03q42N1WDVzJh7CgEB";
    var myFaves = ["anime", "comic Books", "Football", "MMA", "Rick and Morty", "Video Games", "Bowling", "Eating"];
    var gifButton = $("#gifButton");


    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=QvUBFBSSB6pUED03q42N1WDVzJh7CgEB&limit=10");
    xhr.done(function (data) {
        console.log("success got data", data);
    });

    var gif = data


    var createPic = $("<img>");
    var gifDiv = $("<div>");
    createPic.attr("src", gif[1].images.url);
    gifDiv.append(createPic);

    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
    $("#newgifs").prepend(gifDiv);
    gifButton.on("click", function () {

        $.ajax({
                url: giphyURL,
                method: "GET"
            })
            // After the data comes back from the API
            .then(function (response) {
                var results = response.data;

                for (i = 0; i < myFaves.length; i++) {
                    var generateButton = $("<button>")
                    $("#newGifs").append(generateButton);
                    generateButton.text(myFaves[i]);

                    if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

                        var gifDiv = $("<div>");

                        var rating = results[i].rating;

                        var p = $("<p>").text("Rating: " + rating);

                        var createPic = $("<img>");

                        createPic.attr("src", myFaves[i].images.fixed_height.url);

                        // Appending the paragraph and personImage we created to the "gifDiv" div we created
                        gifDiv.append(p);
                        gifDiv.append(personImage);

                        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                        $("#newgifs").prepend(gifDiv);
                    }
                }
            })
    })
});