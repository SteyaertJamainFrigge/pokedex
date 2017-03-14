/**
 * Created by alexander on 14/03/2017.
 */


var geefPokemonWeer = function (naam, hoogte, afbeeldingLink) {
    htmlString = '<figure><img title="' + naam + '" src="' + afbeeldingLink + '" />' + '<figcaption>' + naam +
        '</figcaption></figure>';
    $('#result').html(htmlString);
};

var haalPokemonOp = function (idOfNaam) {
    var url = 'http://pokeapi.co/api/v2/pokemon/' + idOfNaam;
    $.getJSON(url, function (data) {
        console.log(data);
        var naam = data.name;
        var hoogte = data.height;
        var afbeeldingLink = data.sprites.front_default;
        geefPokemonWeer(naam, hoogte, afbeeldingLink)
    })
};

var pokeListHandler = function (e) {
    e.preventDefault();
    haalPokemonOp($(this).attr('id'));

};

$(document).ready(function () {
    //$('#submit').on('click', haalPokemonOp());
    $('.pokeList').on('click', pokeListHandler);
    // haalPokemonOp(302);
});