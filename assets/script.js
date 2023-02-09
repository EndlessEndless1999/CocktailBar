

let searchedDrink = '20th Century';
let drinkResults;

const dashBoard = [$()];

//At the moment this gets many cocktails.
const cocktailSettings = {
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

let currentSetting = cocktailSettings.search;


$.ajax(currentSetting).done(function (response) {
	console.log(response);
});

function updateDashboard(){

}