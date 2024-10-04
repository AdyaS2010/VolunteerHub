document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteerForm');
    const locationInput = document.getElementById('location');
    const experienceSelect = document.getElementById('experience');
    const categories = document.querySelectorAll('.categories input[type="checkbox"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents form from submitting traditionally

        // Store the input values in variables
        const location = locationInput.value;
        const experience = experienceSelect.value;
        const selectedCategories = Array.from(categories)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        // Log values for debugging purposes
        console.log('Location:', location);
        console.log('Experience:', experience);
        console.log('Selected Categories:', selectedCategories);

        // Show a success message
        document.getElementById('content').innerHTML = `<p>Thank you for your submission!</p>`;
        // Reset the form fields
        resetForm();
    });

    function resetForm() {
        // Clear the input fields after storing the values
        locationInput.value = '';
        experienceSelect.selectedIndex = 0; // Reset to the first option
        categories.forEach(checkbox => checkbox.checked = false); // Uncheck all checkboxes
    }
});
