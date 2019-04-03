//array of displaying atheletes
var athletes = ["Usian Bolt", "Ronaldo", "Messi", "Javi", "Pogba","Scholes","Berbatov"]

function renderButtons() {
    $("#btns-view").empty();
    console.log(athletes);
    
    for (var i = 0; i<athletes.length; i++){
        console.log(i);
        
        var ath = $("<button>");

        ath.addClass("giphyButton");

        ath.attr("data-name", athletes[i]);

        ath.text(athletes[i]);

        $("#btns-view").append(ath);
    }
}
renderButtons();

function displayAthletes() {
    //https://api.giphy.com/v1/gifs/search?q=Messi&api_key=w9aghTVK6zFXiLRuZskU7pQGu2EUekuI

    var athlete = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    athlete + "api_key=w9aghTVK6zFXiLRuZskU7pQGu2EUekuI";
    
    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

    });
}


