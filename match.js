// Handles the form submission and expands functionality:
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const locationInput = document.getElementById('location');
    const experienceSelect = document.getElementById('experience');
    const categories = document.querySelectorAll('.categories input[type="checkbox"]');
    const dropdownsDiv = document.getElementById('dropdowns');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents form from submitting  in a/the 'traditional way'

        const location = locationInput.value;
        const experience = experienceSelect.value;
        const selectedCategories = Array.from(categories)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        // Display the selected values (for demonstration purposes)
        console.log('Location:', location);
        console.log('Experience:', experience);
        console.log('Selected Categories:', selectedCategories);

        // Clear previous results
        dropdownsDiv.innerHTML = '';

        // Create and display the results! 
        const results = document.createElement('div');
        results.innerHTML = 
            <h3>Results:</h3>
            <p>Location: ${location}</p>
            <p>Experience: ${experience}</p>
            <p>Categories: ${selectedCategories.join(', ')}</p>
        ;
        dropdownsDiv.appendChild(results);

        // Here we can add more functionality as needed and we progress, such as fetching matching volunteer opportunities from a server (as said below again) ... 
    });
});

/*
This script will:
1. **Prevent the default form submission** to handle it with JavaScript.
2. **Collect the input values** from the form fields.
3. **Display the selected values** in the `dropdowns` div for demonstration purposes.
4. **Clear previous results** before displaying new ones.
*/

// We can expand this functionality by adding more features, such as fetching matching volunteer opportunities from a server or displaying additional information based on the user's input (form idea) as suggested before. 
