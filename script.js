function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function loadPage(page) {
    const content = document.getElementById('content');
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            content.innerHTML = data;
            const activeLink = document.querySelector('.topnav a.active');
            if (activeLink) activeLink.classList.remove('active');
            const newActiveLink = document.querySelector(`.topnav a[href="#${page.split('.')[0]}"]`);
            if (newActiveLink) newActiveLink.classList.add('active');
            // Ensure script handling is general and only loads existing scripts
            if (page !== 'home.html' && page !== 'about.html') {
                const script = document.createElement('script');
                script.src = `${page.split('.')[0]}.js`; // Load script corresponding to the page
                content.appendChild(script);
            }
        })
        .catch(error => {
            console.error('Error loading page:', error);
            content.innerHTML = `<p>Error loading content.</p>`;
        });
}

// Attach event listeners to links
const links = document.querySelectorAll('.topnav a:not(.icon)');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior
        const page = this.getAttribute('href').substring(1) + '.html'; // Get page name
        loadPage(page); // Load the corresponding page
    });
});

// Load the default page when the document loads
window.onload = function() {
    loadPage('home.html'); // Ensure you have this file or change to another default
};
