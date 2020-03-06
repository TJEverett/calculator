var add = function (number1, number2) {
  return number1 + number2;
};

var subtract = function (number1, number2) {
  return number1 - number2;
};

var multiply = function (number1, number2) {
  return number1 * number2;
};

var divide = function (number1, number2) {
  return number1 / number2;
};

jQuery(document).ready(function(){
  jQuery("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt(jQuery("#add1").val());
    var number2 = parseInt(jQuery("#add2").val());
    var result = add(number1, number2);
    jQuery("#output").text(number1 + " + " + number2 + " = " + result);
  });

  jQuery("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseInt(jQuery("#subtract1").val());
    var number2 = parseInt(jQuery("#subtract2").val());
    var result = subtract(number1, number2);
    jQuery("#output").text(number1 + " - " + number2 + " = " + result);
  });

  jQuery("form#multiply").submit(function(event){
    event.preventDefault();
    var number1 = parseInt(jQuery("#multiply1").val());
    var number2 = parseInt(jQuery("#multiply2").val());
    var result = multiply(number1, number2);
    jQuery("#output").text(number1 + " * " + number2 + " = " + result);
  });

  jQuery("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseInt(jQuery("#divide1").val());
    var number2 = parseInt(jQuery("#divide2").val());
    var result = divide(number1, number2);
    jQuery("#output").text(number1 + " / " + number2 + " = " + result);
  });
});
