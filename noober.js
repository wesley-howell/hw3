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
  // final product structure: Noober X Passenger: [name] - [phone]. Pickup at [pickup address]. Dropoff at [dropoff address]

  // parse passenger details into variables for name and phone number, and store them in memory
  let passengerFirstName = ride.passengerDetails.first 
  let passengerLastName = ride.passengerDetails.last 
  let passengerPhoneNumber = ride.passengerDetails.phoneNumber 

  // combine passenger details variables into single object and store to memory
  let passengerDetailsCombined = `${passengerFirstName} ${passengerLastName} - ${passengerPhoneNumber}.`
  
  // create variable for number of passengers in ride, and store to memory
  let partySize = ride.numberOfPassengers 

  
  // parse pickupLocation details into variables, and store them to memory
  let pickupAddress = ride.pickupLocation.address 
  let pickupCity = ride.pickupLocation.city
  let pickupState = ride.pickupLocation.state 
  let pickupZip = ride.pickupLocation.zip 

  // combine pickup location variables into single object and store to memory
  let pickupCombined = `${pickupAddress}, ${pickupCity}, ${pickupState} ${pickupZip}`

  // parse dropoffLocation details into variables and store in memory
  let dropoffAddress = ride.dropoffLocation.address 
  let dropoffCity = ride.dropoffLocation.city 
  let dropoffState = ride.dropoffLocation.state 
  let dropoffZip = ride.dropoffLocation.zip 

  // combine dropoff location variables into single object and store to memory
  let dropoffCombined = `${dropoffAddress}, ${dropoffCity}, ${dropoffState} ${dropoffZip}` 

  // concatenate the previous 4 objects into one human-readable string output and store to memory, and display in console log
  let rideDetailsCombined = `Noober X Passenger: ${passengerDetailsCombined}. Pickup at ${pickupCombined}. Dropoff at ${dropoffCombined}.` 
  console.log(rideDetailsCombined) 
  






  // 🔥 YOUR CODE ENDS HERE 🔥
})
