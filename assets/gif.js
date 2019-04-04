//array of displaying atheletes
var athletes = ["Usian Bolt", "Ronaldo", "Messi", "Javi", "Pogba", "Scholes", "Berbatov"]

function renderButtons() {
    $("#btns-view").empty();
    console.log(athletes);

    for (var i = 0; i < athletes.length; i++) {
        console.log(i);

        var ath = $("<button>");

        ath.addClass("giphyButton");

        ath.attr("data-name", athletes[i]);

        ath.text(athletes[i]);

        $("#btns-view").append(ath);
    }
}
//renderButtons();

function displayAthletes() {
    //https://api.giphy.com/v1/gifs/search?q=Messi&api_key=w9aghTVK6zFXiLRuZskU7pQGu2EUekuI

    var athlete = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        athlete + "&api_key=w9aghTVK6zFXiLRuZskU7pQGu2EUekuI";

        //console.log("fdvfdv");
        
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var athDiv = $("<div class='athl'>");

        var rating = response.data.images.ratings;
        var p = $("<p>").text("Rating: " + rating);
        
        athDiv.append(p);
        var imgUrl = response.data.images.url;
        var image = $("<img>").attr("src", imgUrl);
        athDiv.append(image);

    });
}

$("#add-athlete").on("click", function (event) {
    event.preventDefault();
    var athlete = $("#alhlete-input").val().trim();
    athletes.push(athlete);

    renderButtons();
});

$(document).on("click", ".giphyButton", displayAthletes);

renderButtons();



