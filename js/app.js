//create objects
//[] {}
var Question = {
  'strong': 'Do ye like yer drinks strong?',
  'salty': 'Do ye like it with a salty tang?',
  'bitter': 'Are ye a lubber who likes it bitter?',
  'sweet': 'Would ye like a bit of sweetness with yer poison?',
  'fruity': 'Are ye one for a fruity finish?'
};

var Ingredient = {
  'strong': ['glug of run','slug of whiskey', 'splash of gin'],
  'salty': ['olive on a stick','salt dusted rim', 'rasher of bacon'],
  'bitter': ['shake of bitters', 'splash of tonic', 'twist of a lemon peel'],
  'sweet': ['sugar cube', 'spoonful of honey', 'splash of cola'],
  'fruity': ['slice of orange', 'dash of cassis', 'cherry on top']
};

var Pantry = {

};

var Bartender = function(answers){

};

Bartender.prototype.makeDrink = function(){
  $('input:checked').each(function(item, input){
    var key = $(input).val();

    console.log(key);
  });
};

Bartender.prototype.makeQuestions = function(questions){
  // item = is keys [salty,strong]
  // val = Question['salty']
  for(item in Question){
  //for(i=0; i< Question.length; i++) {
    console.log(item, Question[item]);
    $('#questionsdiv').append(Question[item] + '<input type="checkbox" value="' + item + '"/> <br>');
  }
};


//main function
$(function() {
    var marioBartender = new Bartender();

    marioBartender.makeQuestions();

    $('#search-term').submit(function(event) {
      event.preventDefault();
      marioBartender.makeDrink();
    });
});
