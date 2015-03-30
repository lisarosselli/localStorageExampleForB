

// I'm going to hold some stuff in this array.
var players = new Array();
var aUniqueNameForMyApp = 'BGs_fav_players';

var myFirstPlayer = {};
myFirstPlayer.name = "Michael Jordan";
myFirstPlayer.position = "Guard";

players.push( myFirstPlayer );
console.log('Here I have an array with 1 object.');
console.log(players); // see here I have an array with 1 object, representing a player
console.log('Now type in the console saveToLocalStorage()');

function saveToLocalStorage() {
	// only strings can be saved to localStorage, so here we stringify it
	var myStringifiedArray = JSON.stringify( players );
	
	// here we wave the stringified array to localStorage, using aUniqueNameForMyApp as the identifier for this stuff we're saving
	window.localStorage.setItem(aUniqueNameForMyApp, myStringifiedArray);
	
	console.log('Just saved to localStorage! Take a look!');
	console.log(window.localStorage);
}

function addPlayerTwo() {
	var mySecondPlayer = {};
	mySecondPlayer.name = 'Charles Barkley';
	mySecondPlayer.position = 'Power Forward';
	players.push( mySecondPlayer );
	console.log('Now I have two player objects in my array!');
	console.log(players); // see here how we have now 'pushed'/added Charles Barkley to the players array, so now we have an array of objects. each object represents a player
	
	// But Wait!
	// I still have to save my new and improved array to localStorage!
	saveToLocalStorage();
}

function getInfoBackFromLocalStorage() {
	var localStorageString = window.localStorage.getItem(aUniqueNameForMyApp);
	var parsedString = JSON.parse(localStorageString);
	console.log(parsedString);
	
	return parsedString;
}

function doSomethingWithTheData() {
	var a = getInfoBackFromLocalStorage();
	
	var myElement = document.createElement('p');
	var playersString = '';
	
	for (var i = 0; i < a.length; i++) {
		var thisOne = a[i].name + ' is a ' + a[i].position + '. ';
		playersString += thisOne;
	}
	
	var textNode = document.createTextNode(playersString);
	myElement.appendChild(textNode);
	
	var bodyEl = document.getElementsByTagName('body');
	bodyEl[0].appendChild(myElement);
}



