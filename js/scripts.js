// Business Logic

// Tests
  // Test 1 - Check for non-numbers
  console.log("Test 1: " + (beepBoop("thirty") === "Please enter a number, and use digits rather than letters."));
  console.log("Expected: Please enter a number, and use digits rather than letters.")
  console.log("Returned: " + (beepBoop("thirty")));

  // Test 2 - Return range of numbers
  console.log("Test 1: " + (beepBoop(4) === "0, 1, 2, 3, 4"));
  console.log("Expected: 0, 1, 2, 3, 4.")
  console.log("Returned: " + (beepBoop(4)));

  // Test 3 - Return 'Beep'
  console.log("Test 1: " + (beepBoop(123) === "Beep"));
  console.log("Expected: Beep")
  console.log("Returned: " + (beepBoop(123)));

  // Test 4 - Return 'Boop'
  console.log("Test 1: " + (beepBoop(123) === "Boop"));
  console.log("Expected: Boop")
  console.log("Returned: " + (beepBoop(123)));

  // Test 5 - Return 'Won't You Be My Neighbor?'
  console.log("Test 1: " + (beepBoop(123) === "Won't you be my neighbor?"));
  console.log("Expected: Won't you be my neighbor?")
  console.log("Returned: " + (beepBoop(123)));

// User Interface Logic