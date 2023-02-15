
let searchedDrink = '';
let ingredient = 'milk';
let drinkResults;

let barSearch = 'bars in';
let latitude = '50.82953728381789';
let longitude = '-0.13721928010098072';


//STORE CITY HERE
let userAdress = 'London';

let results;
const tags = ["modern"];

let sampleObject = [
    {
      id: "ea43ffb8500c4bc8a32faffa",
      spirit_id: "gin",
      cocktail_name: "20th Century",
      description: "The 20th Century Cocktail made with gin, Lillet blanc, white creme de cacao and lemon juice. According to the book \"Cafe Royal Cocktail Book\" by William J. Tarling, The cocktail was created by British bartender C.A. Tuck and named for the luxurious 20th Century Limited passenger train that ran between New York City and Chicago from 1902 to 1967.",
      additional_tips: "",
      alcoholic: true,
      garnish: "lemon twist",
      ingredients: [
        {
          list_order: 1,
          amount: "1 1/2 ounces (45ml)",
          ingredient: {
            name: "gin",
            description: "Gin is a distilled alcoholic drink that derives its predominant flavor from juniper berries.",
            id: "gin"
          }
        },
        {
          list_order: 2,
          amount: "1/2 ounce (15ml)",
          ingredient: {
            name: "Lillet blanc",
            description: "Lillet is a French wine-based aperitif from Podensac. Classed as an aromatised wine Lillet Blanc a sweeter variant of the white-wine-based version with reduced quinine content.",
            id: "lilletblanc"
          }
        },
        {
          list_order: 3,
          amount: "1/2 ounce (15ml)",
          ingredient: {
            name: "white creme de cacao",
            description: "Crème de Cacao is a sweet alcoholic liqueur (chocolate bean) flavored liqueur, often scented with a hint of vanilla. It is different from chocolate liqueur, which is usually sweeter and more syrupy. It comes in 2 varieties, dark and white.",
            id: "whitecremedecacao"
          }
        },
        {
          list_order: 4,
          amount: "3/4 ounce (22.5ml)",
          ingredient: {
            name: "lemon juice",
            description: "Lemon juice is made from freshly squeezed lemons.",
            id: "lemonjuice"
          }
        }
      ],
      steps: [
        {
          step: 1,
          instructions: "Add the gin, Lillet blanc, white creme de cacao and lemon juice to a shaker with ice and shake until well-chilled."
        },
        {
          step: 2,
          instructions: "Fine-strain into a chilled coupe."
        },
        {
          step: 3,
          instructions: "Garnish with a lemon twist."
        }
      ],
      glasses: [
        {
          list_order: 1,
          glass: {
            name: "Champagne Saucer (Coupe)",
            description: "The Champagne saucer is also called a coupe glass. With a flatter, rounder bowl, it is a more traditional glass design for serving sparkling wines. It holds around 6 to 8 ounces.",
            image_url: "https://rapid.drinks.digital/static/coupe.png",
            id: "coupe"
          }
        },
        {
          list_order: 2,
          glass: {
            name: "Cocktail (or Martini) Glass",
            description: "The familiar conical shape of the cocktail glass makes most people think of a martini. Cocktail glasses are used for drinks between 3 and 6 ounces. Cocktail glasses are also a good alternative to margarita glasses.",
            image_url: "https://rapid.drinks.digital/static/cocktail.png",
            id: "cocktail"
          }
        }
      ],
      tags: [
        {
          list_order: 1,
          tag: {
            id: "dessert",
            name: "Dessert Cocktails"
          }
        }
      ],
      created_at: "2022-12-04T02:31:08.290136+00:00",
      updated_at: null
    }
  ]

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

//Tooltips Scripting


function updatePage(){
    const tooltips = document.querySelectorAll('.tt');
    tooltips.forEach(t => {
    new bootstrap.Tooltip(t);
})
}

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
let Settings = {
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
    },
    suggest : {
        "async": true,
        "crossDomain": true,
        "url": "https://drinks-digital1.p.rapidapi.com/v1/cocktails/tags?filters=" + tags + "&limit=20",
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
      "async": true,
    	"crossDomain": true,
    	"url": "https://local-business-data.p.rapidapi.com/search?query=" + "hotels%20in%20" + userAdress + "&limit=5&lat=" + latitude + "&lng=" + longitude + "&zoom=13&region=en&language=en",
    	"method": "GET",
    	"headers": {
  		"X-RapidAPI-Key": "f1d9958e26msh5fddfc971927676p1e2fe1jsnb12fc0647069",
  		"X-RapidAPI-Host": "local-business-data.p.rapidapi.com"
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

$('#searchButton').on('click', function(){
    searchedDrink = $('#searchBar').val();
    Settings.search.url = "https://drinks-digital1.p.rapidapi.com/v1/cocktails/search?query=" + searchedDrink + "&limit=1"
    console.log(Settings.search.url);

    generateDrink();
})

$('#random').on('click', function(){
    Settings.search.url = "https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20"

    generateRandomDrink();
})

$('#suggest').on('click', function(){
    Settings.search.url = "https://drinks-digital1.p.rapidapi.com/v1/cocktails/tags?filters=" + tags[0] + "&limit=20"

    generateRandomDrink();
})

function generateRandomDrink(){

    $('#ingredientsList').empty();
    $('#stepsList').empty();
    $('#cocktailList').empty();



    $('.waitDisplay').addClass('hide');
    $('.name').removeClass('hide');
    $('.ingredients').removeClass('hide');
    $('.steps').removeClass('hide');
    document.getElementById('display').scrollIntoView();

    $.ajax(Settings.search).then(function (response) {
        console.log(response);
        i = getRandomArbitrary(1, 19);
        console.log(i);
        console.log(response[i]);
        displayDrinkAmount(response[i]);
    });
}

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateDrink(){

    $('#ingredientsList').empty();
    $('#stepsList').empty();
    $('#cocktailList').empty();



    $('.waitDisplay').addClass('hide');
    $('.name').removeClass('hide');
    $('.ingredients').removeClass('hide');
    $('.steps').removeClass('hide');
    document.getElementById('display').scrollIntoView();

    $.ajax(Settings.search).then(function (response) {
        console.log(response);
        displayDrinkAmount(response[0]);
    });


}

function displayDrinkInfo(drink){
    // $.ajax(Settings.search).done(function (response) {
    //     console.log(response);
    //     response.forEach(function(drink){
    //         displayDrinkAmount(drink);
    //     })
    // });
    var drinks = $("#cocktailList");

    let name = drink.cocktail_name;
    let description = drink.description;
    let alcoholic = drink.alcoholic;
    let garnish = drink.garnish;

    drinks.append (`
    <li class = "list-group-item tt" id = "myDrink" data-bs-placement = "top" title= "${name}">${name}
    </li>
    `);
    drinks.append (`
    <li class = "list-group-item tt" data-bs-placement = "top" title= "${description}">${description}
    </li>
    `);
    drinks.append (`
    <li class = "list-group-item tt" data-bs-placement = "top" title= "${alcoholic}">${alcoholic}
    </li>
    `);
    drinks.append (`
    <li class = "list-group-item tt" data-bs-placement = "top" title= "${garnish}">${garnish}
    </li>
    `);
    updatePage();
    displaySteps(drink);


}

function displayDrinkAmount(response){
    var drinks = $("#ingredientsList");
    response.ingredients.forEach(ingredient => {
        console.log(ingredient.amount, ingredient.ingredient.name)
        drinks.append (`
    <li class = "list-group-item tt" data-bs-placement = "top" title= "${ingredient.ingredient.name}">${ingredient.amount} of ${ingredient.ingredient.name}
    </li>
    `)
    });
    updatePage();
    displayDrinkInfo(response);
}
;

function displaySteps(drink){
    var drinks = $("#stepsList");
    drink.steps.forEach(step => {
        console.log(step.step, step.decription);
        drinks.append (`
    <li class = "list-group-item tt" data-bs-placement = "top" title= "${step.step}">${step.step}: ${step.instructions}
    </li>
    `)
    });
    updatePage();
}


//ADRESS FUNCTIONS

function getCoord(){
  addressSettings.adrToCoordinates.url = "https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi?address=" + userAdress;
  $.ajax(addressSettings.adrToCoordinates).then(function(response){
    longitude = response.Results[0].longitude;
    latitude = response.Results[0].latitude;
    displayBusinesses();
  });

  

}


function displayBusinesses(){
  localBusinessSettings.url = "https://local-business-data.p.rapidapi.com/search?query=" + "barsin" + userAdress + "&limit=5&lat=" + latitude + "&lng=" + longitude + "&zoom=13&region=en&language=en"
  $.ajax(localBusinessSettings).then(function(response){
    console.log(response);
    let myBusinesses = response.data;
    for(let i = 0; i < myBusinesses.length; i++){
      let d = document.createElement('li');
      let a = document.createElement('a');
      d.classList.add('list-group-item');
      a.innerHTML = myBusinesses[i].name;
      a.setAttribute('href', myBusinesses[i].website);
      d.appendChild(a);
      $('#barList').append(d); 
    }
  })
}
// ***

// create array to store favourite drinks
const favouriteDrinks = ["Margarita", "Espresso Martini"]

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
        d.addEventListener('click', function(){
        searchedDrink = d.innerHTML;

        Settings.search.url = "https://drinks-digital1.p.rapidapi.com/v1/cocktails/search?query=" + searchedDrink + "&limit=1"
        console.log(Settings.search.url);

        generateDrink();
        })

        $('#favouritesList').append(d);
    }
    $('.favouriteDrinksTable').removeClass('hide');
    $('.circle').addClass('hidden');


})

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
  
  callAPI();