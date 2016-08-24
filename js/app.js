//create objects
//[] {}
//list of all questions
var Question = {
    'strong': 'Do ye like yer drinks strong?',
    'salty': 'Do ye like it with a salty tang?',
    'bitter': 'Are ye a lubber who likes it bitter?',
    'sweet': 'Would ye like a bit of sweetness with yer poison?',
    'fruity': 'Are ye one for a fruity finish?'
};

// all ingredients by category
var Ingredients = {
    'strong': ['glug of run', 'slug of whiskey', 'splash of gin'],
    'salty': ['olive on a stick', 'salt dusted rim', 'rasher of bacon'],
    'bitter': ['shake of bitters', 'splash of tonic', 'twist of a lemon peel'],
    'sweet': ['sugar cube', 'spoonful of honey', 'splash of cola'],
    'fruity': ['slice of orange', 'dash of cassis', 'cherry on top']
};

//not sure why you would need this object in this example...
var Pantry = {
};

// original bartender object, not sure what to put here
var Bartender = function(answers) {
  this.answers = [];
};



//the bartender makes drinks, so this method makes sense
Bartender.prototype.makeDrink = function() {

 //this = Bartender object
  var bartender = this;
    // get the input that is checked
    $('input:checked').each(function(item, input) {
        //push the keys into an array
        var key = $(input).val();
        console.log(key);
        //this=input
        bartender.answers.push(key);
    });

  //  console.log('keyarray is' + keyarray.length);

    //if they don't like anything, print out a message, else - take the answers in the array, grab some ingredients randomly from the pieces they selected, and print them out.
    if (this.answers.length === 0) {
        $('#search-results').append('<p>Well, if ye be that picky, no drink for you! Arrrrgh</p>');
    } else {
        $('#search-results').append('Ye drink:');
        for (i = 0; i < this.answers.length; i++) {
            var randomnumber = Math.floor((Math.random() * 100) + 1) % 3;
            var keyIngredient = this.answers[i];
            console.log('key is currently:' + Ingredients[keyIngredient]);
            $('#search-results').append("<p> " + Ingredients[keyIngredient][randomnumber] + " </p>");

        }
    }
};

// the bartender asks quetsions
Bartender.prototype.makeQuestions = function(questions) {
    //go through the questions and print them for the user
    for (item in Question) {
        //for(i=0; i< Question.length; i++) {
        console.log(item, Question[item]);
        $('#questionsdiv').append(Question[item] + '<input type="checkbox" value="' + item + '"/> <br>');
    }
};


//main function
$(function() {

    //create a bartender
    var marioBartender = new Bartender();


    // the bartender asks the questions (prints them out on screen)
    marioBartender.makeQuestions();

    //var drinkIngredients = new Ingredients();


    //take the submission from the user, then call the make drink function
    $('#search-term').submit(function(event) {
        event.preventDefault();
        marioBartender.makeDrink();
    });
});
