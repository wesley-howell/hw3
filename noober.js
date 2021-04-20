// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  // Goal: a program that parses the passenger data output by Noober's random ride generator, by defining each data point as an understandable variable, 
  // storing each of the variables and subsequent string outputs in memory.
  // then use these variables to display a human-readable output in the JavaScript console, 
  // providing the driver with all necessary information to successfully provide a ride service.

  // parse passenger details into variables for name and phone number, and store them in memory
  let passengerFirstName = ride.passengerDetails.first 

  console.log(passengerFirstName)
  

  // 🔥 YOUR CODE ENDS HERE 🔥
})
