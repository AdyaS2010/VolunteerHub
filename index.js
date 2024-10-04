function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

  document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Get the values from the form
        const location = document.getElementById("location").value;
        const experience = document.getElementById("experience").value;
        const categories = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(checkbox => checkbox.value);

        // Display the values (can replace with more logic later on. Hweeeee!!!)
        console.log("Location:", location);
        console.log("Experience:", experience);
        console.log("Categories:", categories);

        // Logic to be added for matching user with volunteer opportunities (can probably be done in a different file). 
    });
});
// Example of how we might handle form submissions or other interactions
document.addEventListener('DOMContentLoaded', (event) => {
    // Code to run when the DOM is fully loaded
    console.log("Volunteer Hub is ready!");

    // Example: Add event listeners to buttons or other elements
    document.getElementById("intro").addEventListener("click", function() {
        alert("Welcome to VolunteerHub!");
    });

    // More event listeners and interactions can be added here
});
