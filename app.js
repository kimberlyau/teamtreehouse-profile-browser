// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Require API
const https = require('https');

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badges and ${points} Javascript points`;
  console.log(message)

}

// Get profile of any students on TeamTreehouse
function getProfile (username) {

  // Connect to the API URL (https://teamtreehouse.com/user.json)
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    //console.log(response.statusCode);
    
    let body = "";
    // Read the data - this is a buffer, packets of information
    // JS is non-blocking
    response.on('data', data => {
      body += data.toString()
    });
  
    response.on('end', () => {
      // Parse the data
      const profile = JSON.parse(body);
      // Used to see what JSON elements are available console.dir(profile);
    
      // Print the data
      printMessage(username, profile.badges.length, profile.points.JavaScript);
      
    });
      
  });
}

const users = ["chalkers", "kimberlyau"];
// can use: const users = process.argv.slice(2); to grab command line arguments

users.forEach(getProfile);

// users.forEach(username => {
//  getProfile(username);
//});



/*
 * Print output:
 *
 * kimberlyau has 1 total badges and 57 Javascript points                                                                                                                                              
 * chalkers has 209 total badges and 5991 Javascript points   
 *
 * Since kimberlyau has less badges and points, the request finishes first
 * This demonstrates JS's nonblocking
 */