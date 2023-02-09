

let searchedDrink = '20th Century';
let ingredient = 'milk';
let drinkResults;

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

//Stores which setting is selected
let currentSetting = Settings.search;
let currentAllergenSetting = allergenAPISettings.parser;
let currentBusinessSetting = localBusinessSettings.search;

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

}

