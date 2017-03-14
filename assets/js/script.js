/**
 * Created by alexander on 14/03/2017.
 */


var testApi = function () {
    var pokemonID = 500;
    var url = 'http://pokeapi.co/api/v2/pokemon/' + pokemonID;
    $.getJSON(url, function (data) {
        console.log(data);


    })
};

$(document).ready(function () {
    testApi();
});