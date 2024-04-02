

export async function handler(event) {

// Endpoint to generate random username and email
    const queryname = event.queryStringParameters;
    const name = queryname ? queryname.name : 'Ahamed'; // Get name from query parameter or use 'Guest' if not provided

    // Generate random username
    const username = generateUsername(name);

    // Generate random email address
    const email = generateEmail(name);

    // Send the response
    return ({ username: username, email : email });



  

// Function to generate a random username
function generateUsername(name) {
    // You can implement your own logic for generating usernames
    return `${name.toLowerCase().replace(/\s/g, '')}_${Math.floor(Math.random() * 100)}`;
}


// Function to generate a random email address
function generateEmail(name) {
    // You can implement your own logic for generating email addresses
    return name.toLowerCase().replace(/\s/g, '') + Math.floor(Math.random() * 1000)+ '@yahoo.com';
}

}