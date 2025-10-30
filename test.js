// --- Start of src/main.js ---

/**
 * A simple function to process the list of users.
 * This is the main logic of the application.
 */
function processUsers(userList) {
    console.log("--- Application Start ---");
    console.log(`Total users loaded: ${userList.length}`);
    
    // Iterate over the array to display a greeting
    userList.forEach((user, index) => {
        // Use a simple template string
        console.log(`Hello, User #${index + 1}: ${user.firstName} ${user.lastName}.`);
    });

    console.log("--- Processing Complete ---");
}

// Check if the USERS_DATA array is available (from names.js)
if (typeof USERS_DATA !== 'undefined' && USERS_DATA.length > 0) {
    processUsers(USERS_DATA);
} else {
    console.error("Error: USERS_DATA array not found or is empty.");
}

// --- End of src/main.js ---
