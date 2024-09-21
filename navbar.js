// Created a separate file for now. 
// The following code can be done in a different way and integrated into the HTML file(s), or the respective js files (all) as well. 

// Makes navbar functional for the HTML files provided/committed as of now. 
// I actually don't even know ... It's not much, need to see both together to adjust ... 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Toggles navigation bar between responsive to its default class when icon is clicked on (by user). 
// REMINDER (for me) to: Include this in both script.js and match.js files
