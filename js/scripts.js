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
    $("#returnHeading").show();
    if (orderInput === 1){
      results.push(" ' " + beepBoop(numberInput, nameInput) + " ' ");
      $("#returnPar").text(results);
    } else {
      results.push(" ' " + beepBoopReverse(numberInput, nameInput) + " ' ");
      $("#returnPar").text(results);
    };
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

  // Test 6 - Check rule for numbers containing 3, supercedes rule for numbers containing 2, which supercedes rule for numbers containing 3
  console.log("Test 6a: " + (beepBoop(123) === "Won't you be my neighbor?"));
  console.log("Expected: Won't you be my neighbor?")
  console.log("Returned: " + (beepBoop(123)));

  console.log("Test 6b: " + (beepBoop(12) === "Boop"));
  console.log("Expected: Boop")
  console.log("Returned: " + (beepBoop(12)));

  console.log("Test 6c: " + (beepBoop(13) === "Won't you be my neighbor?"));
  console.log("Expected: Won't you be my neighbor?")
  console.log("Returned: " + (beepBoop(13)));
*/