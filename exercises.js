/////////////////////////////////////////////////////////////////////////////////////////
// DAY 1
/////////////////////////////////////////////////////////////////////////////////////////

// Create an object using brackets AND dot notation that represents
// the character and related data that may find in game of clue

var character = {};
character.name = "John";
character["weapon"] = "Knife";
character.isGuilty = true;
character["position"] = {
  // position in board
  x: 2,
  y: 2
};

character.name = "Beth";
character["weapon"] = [" baseball bat ", "Knife"];
character["room"] = "The den";
character["postion"] = {
  x: 5,
  y: 6
};

/*
. 1.Create an object that looks like this:
 
{"name": "Rusty", "room":"kitchen", "weapon":"candlestick"}
 
2. Extract out the weapon and location using destructuring
*/

// 1.Create an object that looks like this:

var myObj1 = {
  name: "Rusty",
  room: "Kitchen",
  weapon: "candlestick"
};

// 2. Extract out the weapon and location using destructuring
let { weapon, room } = myObj1;

// This is the same as
let { weapon, room } = {
  name: "John",
  room: "Doe",
  weapon: "Knife"
};

//Loop through all the properties of the suspect objects in the suspects array

const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
};

//Loop through all the properties of the suspect objects in the suspects array
for (let i = 0; i < game.suspects.length; i++) {
  let currentSuspect = game.suspects[i];
  for (let prop in currentSuspect) {
    console.log("property name: ", prop);
    console.log("property value: ", currentSuspect[prop]);
  }
}

// Alternative
for (var i = 0; i < game.suspects.length; i++) {
  console.log(game.suspects[i]);
}

// ES6 style
// dot notation
game.suspects.forEach(suspect => console.log(suspect));

// bracket notation
game["suspects"].forEach(suspect => console.log(suspect));

// Loop through suspects and mark the one you think is guilty
for (let i = 0; i < game.suspects.length; i++) {
  if (game.suspects[i].color === "orange") {
    game.suspects[i].isGuilty = true;
  }
}

// Destructure this nested data structure into two variables
// with the strings 'red' and 'orange

const suspects = [
  {
    name: "Rusty",
    color: "orange"
  },
  {
    name: "Miss Scarlet",
    color: "red"
  }
];

let [a, b] = suspects.map(suspect => suspect.color);

// create a function that creates a suspect
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is ", name);
    }
  };
}

// create an array containing suspects object using the suspects array
var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

var suspectsList = [];

suspectsList = suspects.map(CreateSuspectObjects);

// EXERCISE: Refactor with _.each
// Implement our own underscore
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is ", name);
    }
  };
}

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

var suspectsList = [];

for (var i = 0; i < suspects.length; i++) {
  suspectsList.push(CreateSuspectObjects(suspects[i]));
}

_.each(suspects, function(suspect) {
  suspectsList.push(CreateSuspectObjects(suspect));
  console.log(suspect);
});

// Implement our own underscore
const _ = {
  each: function(list, callback) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list); // extra params just to conform with signature of native forEach
    }
  }
};

// map over weapons and make an array of 'broken' weapons.
// e.g ['broken candle', broken leadpipe', broken revolver']

// implement map method on our _ object.

_.map = function(list, callback) {
  var results = [];

  this.each(list, item => {
    results.push(callback(item));
  });

  return results;
};

const weapons = ["candle", "leadpipe", "revolver"];

const makeBroken = function(item) {
  return `broken ${item}`;
};

_.map(weapons, makeBroken);

/////////////////////////////////////////////////////////////////////////////////////////
// DAY 2
/////////////////////////////////////////////////////////////////////////////////////////

// Filter out suspects that weren't present on the night

// Implement our filter method

const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  }
];

// add the "filter" method
_.filter = function(list, callback) {
  var results = [];

  this.each(list, item => {
    if (callback(item)) {
      results.push(item);
    }
  });

  return results;
};

// Gather the final suspects by filtering and mapping suspects who were present

const filteredSuspects = _.filter(videoData, item => item.present);
const finalSuspects = _.map(filteredSuspects, item => item.name);

// alternative
const getFinalSuspects = function() {
  _.filter(videoData, function(suspect) {
    let finalSuspects = suspect.present === true;

    return _.map(finalSuspects, function(suspect) {
      return item.name;
    });
  });
};

// mimick es6 functionality of setting default value of args
// e.g  const add = function (a, b=2) {return a + b}

const add = function(a, b) {
  let defaultVal = 2;
  // if b arg is not a number or does not exist, return default value
  b = typeof b === number ? b : defaultVal;
  return a + b;
};

// Exercise: Implement the Array.from method into our own _ object.

/*
    * The Array.from() method creates a new Array instance from 
    * an array-like or iterable object.
    */

const from = function() {
  var arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  return arr;
};
