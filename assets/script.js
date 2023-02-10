
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "776d092347msh3e7fd81bb3c4eaap19f0c5jsn6f3d75095a68",
        "X-RapidAPI-Host": "drinks-digital1.p.rapidapi.com"
	}
};
$( document ).ready(function() {

$.ajax(settings).done(function (response) {
	console.log(response);
    response.forEach(function(drink){
        displayDrinkAmount(drink)
    })
});

function displayDrinkAmount(drink){
    var drinks = $(".drinks")
    drink.ingredients.forEach(ingredient => {
        console.log(ingredient.amount, ingredient.ingredient.name)
        drinks.append (`
    <p>${ingredient.amount} of ${ingredient.ingredient.name}
    </p>
    `    )
    });
}
});