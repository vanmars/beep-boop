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
  let result = [];
  if (isNaN(number)){ 
    alert("Please enter a number, and use digits rather than letters.");
    return "Enter a number!";
  } else if (containsThree(number)) {
    return "Won't you be my neighbor, " + name + "?";
  } else if (containsTwo(number)) {
    return "Boop!";
  } else if (containsOne(number)) {
    return "Beep!";
  } else {
    for (let i=0; i<=number; i++){
      result.push(i);
    };
    stringResult = result.join(", "); 
    return stringResult;
  };
};

function beepBoopReverse (number, name) {
  let result = [];
  if (isNaN(number)){ 
    alert("Please enter a number, and use digits rather than letters.");
    return "Enter a number!";
  } else if (containsThree(number)) {
    return "Won't you be my neighbor, " + name + "?";
  } else if (containsTwo(number)) {
    return "Boop!";
  } else if (containsOne(number)) {
    return "Beep!";
  } else {
    for (let i=number; i>=0; i--){
      result.push(i);
    };
    stringResult = result.join(", "); 
    return stringResult;
  };
};

// User Interface Logic
$(document).ready(function(){
  let results =[];
  $("form").submit(function(event){
    event.preventDefault();
    const nameInput = $("#name").val();
    const numberInput = Number($("#number").val());
    const orderInput = parseInt($("#numOrder").val());
    
    //Check for name
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
      results.push(" ' " + beepBoop(numberInput, nameInput) + " ' ");
      $("#returnPar").text(results);
    } else {
      results.push(" ' " + beepBoopReverse(numberInput, nameInput) + " ' ");
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

/*
// Tests
  // Test 1 - Check for non-numbers
  console.log("Test 1: " + (beepBoop("thirty") === "Please enter a number, and use digits rather than letters."));
  console.log("Expected: Please enter a number, and use digits rather than letters.")
  console.log("Returned: " + (beepBoop("thirty")));

  // Test 2 - Return range of numbers
  console.log("Test 2: " + (beepBoop(4) === "0, 1, 2, 3, 4"));
  console.log("Expected: 0, 1, 2, 3, 4")
  console.log("Returned: " + (beepBoop(4)));

  // Test 3 - Return 'Beep'
  console.log("Test 3: " + (beepBoop(123) === "Beep"));
  console.log("Expected: Beep")
  console.log("Returned: " + (beepBoop(123)));

  // Test 4 - Return 'Boop'
  console.log("Test 4: " + (beepBoop(123) === "Boop"));
  console.log("Expected: Boop")
  console.log("Returned: " + (beepBoop(123)));

  // Test 5 - Return 'Won't You Be My Neighbor?'
  console.log("Test 5: " + (beepBoop(123) === "Won't you be my neighbor?"));
  console.log("Expected: Won't you be my neighbor?")
  console.log("Returned: " + (beepBoop(123)));

  // Test 6 - If the user selects to return numbers in decreasing order, the program returns a range of numbers beginning with the inputted number through 0.
  console.log("Test 6: " + (beepBoopReverse(5) === "5, 4, 3, 2, 1, 0"));
  console.log("Expected: 5, 4, 3, 2, 1, 0");
  console.log("Returned: " + (beepBoopReverse(5)));
  */
