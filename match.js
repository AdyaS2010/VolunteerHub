document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteerForm');
    const locationInput = document.getElementById('location');
    const experienceSelect = document.getElementById('experience');
    const categories = document.querySelectorAll('.categories input[type="checkbox"]');

    // Handle form submission
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

        // Fetch volunteer opportunities based on input values
        fetchVolunteerOpportunities(location, experience, selectedCategories)
            .then(() => {
                // Optionally show a success message
                document.getElementById('content').innerHTML = `<p>Thank you for your submission!</p>`;

                // Reset the form fields
                resetForm();
            })
            .catch(error => {
                console.error('Error fetching volunteer opportunities:', error);
            });

        return false; // Ensures the form does not submit
    });

    // Reset the form fields after submission
    function resetForm() {
        locationInput.value = '';
        experienceSelect.selectedIndex = 0;
        categories.forEach(checkbox => checkbox.checked = false);
    }

    // Fetch volunteer opportunities from the backend
    async function fetchVolunteerOpportunities(location, experience, categories) {
        const response = await fetch(`/search?location=${encodeURIComponent(location)}&experience=${encodeURIComponent(experience)}&categories=${categories.map(c => encodeURIComponent(c)).join('&categories=')}`);
        const opportunities = await response.json();
        
        // Log fetched opportunities for debugging
        console.log('Fetched Opportunities:', opportunities);

        // After fetching the data, call the display function to render it
        displayOpportunities(opportunities);
    }

    // Function to display the fetched volunteer opportunities on the webpage
    function displayOpportunities(opportunities) {
        // Get the results container
        const resultsContainer = document.getElementById('results');
        
        // Clear any previous results
        resultsContainer.innerHTML = '';
        
        // If no opportunities were found, show a message
        if (opportunities.length === 0) {
            resultsContainer.innerHTML = '<p>No volunteer opportunities found based on your criteria.</p>';
            return;
        }
        
        // Loop through the opportunities and create HTML for each
        opportunities.forEach(opportunity => {
            const opportunityElement = document.createElement('div');
            opportunityElement.classList.add('opportunity');
            opportunityElement.innerHTML = `
                <h3>Location: ${opportunity.location}</h3>
                <p>Experience: ${opportunity.experience}</p>
                <p>Categories: ${opportunity.categories.join(', ')}</p>
            `;
            
            // Append the new opportunity element to the results container
            resultsContainer.appendChild(opportunityElement);
        });

        // Log results container content for debugging
        console.log('Results Container:', resultsContainer.innerHTML);
    }
});
