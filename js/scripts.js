// Business Logic
function containsThree (number) {
  let stringNumber = number.toString();
  for (let num of stringNumber){
    if (num === "3"){
      return true;
    };
  };
  return false;
};

function containsTwo (number) {
  let stringNumber = number.toString();
  for (let num of stringNumber){
    if (num === "2"){
      return true;
    };
  };
  return false;
};

function containsOne (number) {
  let stringNumber = number.toString();
  for (let num of stringNumber){
    if (num === "1"){
      return true;
    };
  };
  return false;
};

function beepBoop (number, name) {
  let numberArray = [];
  if (isNaN(number)){ 
    alert("Please enter a number, and use digits rather than letters.");
    return "Enter a number!";
  };
  for (let i=0; i<=number; i++){
    if (containsThree(i)) {
      numberArray.push(" Won't you be my neighbor, " + name + "?");
    } else if (containsTwo(i)) {
      numberArray.push(" Boop!");
    } else if (containsOne(i)) {
      numberArray.push(" Beep!");
    } else {
      numberArray.push(" "+i);
    };
  };
  return numberArray;
};

function beepBoopReverse (number, name) {
  let numberArray = [];
  if (isNaN(number)){ 
    alert("Please enter a number, and use digits rather than letters.");
    return "Enter a number!";
  };
  for (let i=number; i>=0; i--){
    if (containsThree(i)) {
      numberArray.push(" Won't you be my neighbor, " + name + "?");
    } else if (containsTwo(i)) {
      numberArray.push(" Boop!");
    } else if (containsOne(i)) {
      numberArray.push(" Beep!");
    } else {
      numberArray.push(" "+i);
    };
  };
  return numberArray;
};

// User Interface Logic
$(document).ready(function(){
  let results =[];
  $("form").submit(function(event){
    event.preventDefault();
    const nameInput = $("#name").val();
    const numberInput = Number($("#number").val());
    const orderInput = parseInt($("#numOrder").val());

    //Check for Mame
    if (nameInput === ""){
      event.preventDefault();
      alert('Your name is important! Pleaes enter it.');
      return;
    };

    // Animation
    $(".form").animate({marginLeft: "+=5%", marginRight: "-=5%"}, 100);
    $(".form").animate({marginLeft: "-=5%", marginRight: "+=5%"}, 100);
    $(".form").animate({marginLeft: "+=5%", marginRight: "-=5%"}, 100);
    $(".form").animate({marginLeft: "-=5%", marginRight: "+=5%"}, 100);

    // Run beepBoop and beepBoopReverse and display results
    if (orderInput === 1){
      results.push(" || " + beepBoop(numberInput, nameInput) + " || ");
      $("#returnPar").text(results);
    } else {
      results.push(" || " + beepBoopReverse(numberInput, nameInput) + " || ");
      $("#returnPar").text(results);
    };
    $("#returnRow").slideDown("1000");

    // Reset Button Functionality
    $("#btnReset").click(function(event){
      event.preventDefault();
      $("form")[0].reset();
      $("#returnRow").slideUp("slow");
      $("#returnPar").text("");
      results = []; 
    });
  });
});
