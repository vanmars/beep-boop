// Business Logic

function containsThree (number) {
  let stringNumber = number.toString();
  console.log(stringNumber);
  for (num of stringNumber){
    if (num === "3"){
      return true;
    };
  };
  return false;
};
console.log("containsThree Test: "+ (containsThree(13))); // true
console.log("containsThree Test: "+ (containsThree(245))); // false

function containsTwo (number) {
  let stringNumber = number.toString();
  console.log(stringNumber);
  for (num of stringNumber){
    if (num === "2"){
      return true;
    };
  };
  return false;
};
console.log("containsTwo Test: "+ (containsTwo(12))); // true
console.log("containsTwo Test: "+ (containsTwo(144))); // false

function containsOne (number) {
  let stringNumber = number.toString();
  console.log(stringNumber);
  for (num of stringNumber){
    if (num === "1"){
      return true;
    };
  };
  return false;
};
console.log("containsOne Test: "+ (containsOne(531))); // true
console.log("containsOne Test: "+ (containsOne(533))); // false


function beepBoop (number) {
  let result = [];
  if (isNaN(number)){ 
  // alert("Please enter a number, and use digits rather than letters.");
  return "Please enter a number, and use digits rather than letters."
  // } else if (containsThree(number)) {
  //   return ""
  } else {
    for (i=0; i<=number; i++){
      result.push(i);
    };
    stringResult = result.join(", "); 
    return stringResult;
  };
};

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

// User Interface Logic