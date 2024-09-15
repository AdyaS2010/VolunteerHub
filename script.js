// Define the main application object
const app = {
    // Initialize the application
    init: function() {
        this.cacheDOM();
        this.bindEvents();
        this.render();
    },
    // Cache DOM elements for later use
    cacheDOM: function() {
        this.volunteerList = document.getElementById('volunteer-list');
        this.addVolunteerForm = document.getElementById('add-volunteer-form');
        this.volunteerNameInput = document.getElementById('volunteer-name');
        this.volunteerInterestInput = document.getElementById('volunteer-interest');
    },
    // Bind event listeners to DOM elements
    bindEvents: function() {
        this.addVolunteerForm.addEventListener('submit', this.addVolunteer.bind(this));
    },
    // Render the initial state of the application
    render: function() {
        this.volunteerList.innerHTML = '';
        this.volunteers.forEach(volunteer => {
            const li = document.createElement('li');
            li.textContent = `${volunteer.name} - ${volunteer.interest}`;
            this.volunteerList.appendChild(li);
        });
    },
    // Add a new volunteer to the list
    addVolunteer: function(event) {
        event.preventDefault();
        const name = this.volunteerNameInput.value;
        const interest = this.volunteerInterestInput.value;
        if (name && interest) {
            this.volunteers.push({ name, interest });
            this.render();
            this.volunteerNameInput.value = '';
            this.volunteerInterestInput.value = '';
        }
    },
    // List of volunteers
    volunteers: []
};

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// *When HTML looks something like this: 
/*
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Volunteering App</title>
    </head>
    <body>
        <h1>Volunteering Opportunities</h1>
        <form id="add-volunteer-form">
            <input type="text" id="volunteer-name" placeholder="Volunteer Name" required>
            <input type="text" id="volunteer-interest" placeholder="Volunteer Interest" required>
            <button type="submit">Add Volunteer</button>
        </form>
        <ul id="volunteer-list"></ul>
        <script src="app.js"></script>
    </body>
    </html>
*/ 
