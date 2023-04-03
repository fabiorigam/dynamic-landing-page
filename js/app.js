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
 * Define Global Variables
 * 
*/
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.5,
    root: null,
    rootMargin: '0px'
};

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
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        const active_link = document.querySelector('a[href="#' + entry.target.id + '"]');
        if (entry.isIntersecting) {
            entry.target.classList.add('active-class');
            //add 'active_button' class to the specific nav button according to section ID
            active_link.classList.add('active_link');
        } else {
            entry.target.classList.remove('active-class');
            //remove 'active_button' class from the specific nav button according to section ID
            active_link.classList.remove('active_link');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});


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