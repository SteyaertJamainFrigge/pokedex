/**
 * Created by alexander on 14/03/2017.
 */


var geefPokemonWeer = function (naam, hoogte, afbeeldingLink) {

};

var haalPokemonOp = function (e) {
    e.preventDefault();
    var pokemonID = $(this).attr('id');
    var url = 'http://pokeapi.co/api/v2/pokemon/' + pokemonID;
    $.getJSON(url, function (data) {
        console.log(data);
        var naam = data.name;
        var hoogte = data.height;
        var afbeeldingLink = data.sprites.front_default;
        geefPokemonWeer(naam, hoogte, afbeeldingLink)
    })
};

$(document).ready(function () {
    testApi();
});