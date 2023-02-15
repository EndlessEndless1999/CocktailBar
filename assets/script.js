
let searchedDrink = '20th Century';
let ingredient = 'milk';
let drinkResults;

let barSearch = 'bar';
let latitude = '50.82953728381789';
let longitude = '-0.13721928010098072';

let userAdress = '44 Cheapside Brighton BN1 4GD';

//Variables for animating the website
const animatedElements = document.querySelectorAll('.hidden');
//Observes what elements are in view of the browser and animates if they are!
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

animatedElements.forEach((el) => observer.observe(el));

//DUMMY Variables for Testing!!

let drink = {
    name: 'Margarita',
    description: 'Tequila and triple sec combine in this fabulous margarita cocktail recipe, mixed with lime juice. Garnish the rim of the glass with salt for that extra punch.',
    ingredients: {
        one: '50ml Tequila Reposado',
        two: '25ml Lime Juice',
        three: '20ml Triple Sec'
    },
    garnish: {
        one: 'Salt',
        two: '2 Lime Wedges'
    },
    method: {
        one: 'Sprinkle a few teaspoons of salt over the surface of a small plate or saucer. Rub one wedge of lime along the rim of a tumbler and then dip it into the salt so that the entire rim is covered.',
        two: 'Fill a cocktail shaker with ice, then add the tequila, lime juice and triple sec. Shake until the outside of the shaker feels cold.',
        three: 'Strain the mix into the prepared glass over fresh ice. Serve with a wedge of lime.'
    }
}

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
	    "url": "https://drinks-digital1.p.rapidapi.com/v1/cocktails/search?query=" + searchedDrink + "&limit=1",
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

$('.button').on('click', function(){
    generateDrink();
})

function generateDrink(){
    $('.waitDisplay').addClass('hide');
    $('.name').removeClass('hide');
    $('.ingredients').removeClass('hide');
    $('.steps').removeClass('hide');
    document.getElementById('display').scrollIntoView();
}

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
// ***

// create array to store favourite drinks
const favouriteDrinks = ["Margarita", "Amaretto"]
console.log(favouriteDrinks);

// add localStorage 

window.localStorage.setItem('favouriteDrinks', JSON.stringify(favouriteDrinks));
// To retrieve a user key
window.localStorage.getItem('favouriteDrinks');

let input = localStorage.getItem('favouriteDrinks')

function returnText() {
  input = document.getElementById("favouriteDrinks").value
  localStorage.setItem('favouriteDrinks', input)
  alert(input)
}

$('.circle').on('click', function(){
    for(let i = 0; i < favouriteDrinks.length; i++){
        let d = document.createElement('li');
        d.classList.add('list-group-item');
        d.innerHTML = favouriteDrinks[i];
        $('#favouritesList').append(d);
    }
    $('.favouriteDrinksTable').removeClass('hide');
    $('.circle').addClass('hidden');
})

// Favorite button 
let favButton = document.querySelector('.favButton');

favButton.addEventListener('click', () => {
    favButton.classList.toggle('active');
})

$('.favButton').on('click', event => {
    let favButton = $(event.target).parents()[1].favouriteDrinks;

    let favouriteDrinks = localStorage.getItem("favouriteDrinks");
    if (!favouriteDrinks){
        localStorage.setItem("favouriteDrinks", JSON.stringify({stores:[]}));
        favouriteDrinks = JSON.parse(localStorage.getItem("favouriteDrinks"));
    }else{
        favouriteDrinks = JSON.parse(favouriteDrinks);
    }
    
    favouriteDrinks.stores.push(favouriteDrinksTable);

    localStorage.setItem("favouriteDrinks", JSON.stringify(favouriteDrinksTable));
});


<input id="favButton" type="button" value="click" onclick="push(); toggle();"/>

// Basic object syntax
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    city: "Manchester"
  };
  const keys = Object.keys(person);

  console.log(person);
// click button 

  addEventListener('click', (event) => {});

  onclick = (event) => { };
