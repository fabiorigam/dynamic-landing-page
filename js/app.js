/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    liElement.appendChild(aElement);
    aElement.innerText = section.getAttribute('data-nav');
    aElement.classList.add('menu__link');
    aElement.setAttribute('href', '#' + section.id);
    navbar.appendChild(liElement);
});



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll("a");
links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target.scrollIntoView({ 
            behavior: "smooth" 
        });
    });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active