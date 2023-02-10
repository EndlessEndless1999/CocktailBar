
let searchedDrink = '20th Century';
let ingredient = 'milk';
let drinkResults;

let barSearch = 'bar';
let latitude = '50.82953728381789';
let longitude = '-0.13721928010098072';

let userAdress = '44 Cheapside Brighton BN1 4GD';

//At the moment this gets many cocktails.
const Settings = {
    default : {
        "async": true,
        "crossDomain": true,
        "url": "https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "776d092347msh3e7fd81bb3c4eaap19f0c5jsn6f3d75095a68",
            "X-RapidAPI-Host": "drinks-digital1.p.rapidapi.com"
        }
    },
    search : {
        "async": true,
	    "crossDomain": true,
	    "url": "https://drinks-digital1.p.rapidapi.com/v1/cocktails/search?query=" + searchedDrink + "&limit=20",
	    "method": "GET",
	    "headers": {
		    "X-RapidAPI-Key": "776d092347msh3e7fd81bb3c4eaap19f0c5jsn6f3d75095a68",
		    "X-RapidAPI-Host": "drinks-digital1.p.rapidapi.com"
	    }
    }

};

const allergenAPISettings = {
    parser: { "async": true,
	"crossDomain": true,
	"url": "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=" + ingredient,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "776d092347msh3e7fd81bb3c4eaap19f0c5jsn6f3d75095a68",
		"X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com"
	}}
}

const localBusinessSettings = {
    search: { "async": true,
	"crossDomain": true,
	"url": "https://local-business-data.p.rapidapi.com/search?query=" + barSearch + '&limit=20' + '&lat=' + latitude + '&lng=' + longitude + '&zoom=13&region=en&language=en',
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "776d092347msh3e7fd81bb3c4eaap19f0c5jsn6f3d75095a68",
		"X-RapidAPI-Host": "local-business-data.p.rapidapi.com"}
    }
}

const addressSettings = {
    adrToCoordinates: {"async": true,
	"crossDomain": true,
	"url": "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=" + userAdress,
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "776d092347msh3e7fd81bb3c4eaap19f0c5jsn6f3d75095a68",
		"X-RapidAPI-Host": "address-from-to-latitude-longitude.p.rapidapi.com"
	}}
}

//Stores which setting is selected
let currentSetting = Settings.search;
let currentAllergenSetting = allergenAPISettings.parser;
let currentBusinessSetting = localBusinessSettings.search;
let currentAddressSetting = addressSettings.adrToCoordinates;

function callAPI(){
    $.ajax(currentSetting).then(function (response) {
        console.log(response);
    });
}

function callAllergenAPI(){
    $.ajax(currentAllergenSetting).then(function(response){
        console.log(response);
    })
}

function callBusinessAPI(){
    $.ajax(currentBusinessSetting).then(function(response){
        console.log(response);
    })
}

function callAddressAPI(){
    $.ajax(currentAddressSetting).then(function(response){
        console.log(response);
    })
}

function test(){
    callAPI();
    callAllergenAPI();
    callBusinessAPI();
    callAddressAPI();
}

displayDrinkInfo();

function displayDrinkInfo(){
    $.ajax(Settings.search).done(function (response) {
        console.log(response);
        response.forEach(function(drink){
            displayDrinkAmount(drink);
        })
    });
}




function displayDrinkAmount(drink){
    var drinks = $(".drinks")
    drink.ingredients.forEach(ingredient => {
        console.log(ingredient.amount, ingredient.ingredient.name)
        drinks.append (`
    <p>${ingredient.amount} of ${ingredient.ingredient.name}
    </p>
    `)
    });
}
;