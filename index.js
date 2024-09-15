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
