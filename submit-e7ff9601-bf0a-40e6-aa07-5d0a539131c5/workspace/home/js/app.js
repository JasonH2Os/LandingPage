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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



// Define an array of navigation items with text and corresponding section IDs
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
// list of all sections in the page
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//to remove 'active' class from the current active link
function removeActiveClassFromElements(elements, className) {
    elements.forEach(el => {
        el.classList.remove(className);
    });
}

function whenScroll() {
    for (let section of sections) {
        if (isInViewport(section)) {
            removeActiveClassFromElements(sections, 'active_section');
            setActiveClass(section, 'active_section');

            const correspondingLink = searchMenuByText(section.getAttribute('data-nav'));
            removeActiveClassFromElements(document.querySelectorAll('.menu__link'), 'active');
            setActiveClass(correspondingLink, 'active');
            break;
        }
    }
}

let removeActiveClassFromLink = function () {
    const activeClass = document.getElementsByClassName("active");
    if (activeClass.length > 0) {
        activeClass[0].classList.remove("active");
    }
}

//to remove active_section class from the current active link
let removeActiveClassFromSection = function () {
    const yourActiveClass = document.getElementsByClassName("active_section");
    if (yourActiveClass.length > 0) {
        yourActiveClass[0].classList.remove("active_section");
    }
}
function setActiveClass(element, className) {
    element.classList.add(className);
}

//Seachring Menu Links by textContent
let searchMenuByText = function (SearchingText) {
    const menuLinks = document.querySelectorAll('.menu__link');
    let found;

    for (let i = 0; i < menuLinks.length; i++) {
        if (menuLinks[i].textContent == SearchingText) {
            found = menuLinks[i];
            break;
        }
    }
    return found;
}

//test if an element is in the viewport

const isInViewport = (element) => {
    let rect = element.getBoundingClientRect();
    const scroll = window.scrollY || window.pageYOffset
    const boundsTop = rect.top + scroll

    const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
    }

    const bounds = {
        top: boundsTop,
        bottom: boundsTop + element.clientHeight - 200, 
    }

    return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom)
        || (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
}



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

/*
build the dynamically updating navigational menu based on 
the amount of content that is added to the page
*/
//nav bar
function buildNav() {
    const navbarList = document.getElementById('navbar__list');
    sections.forEach((section) => {
        const newLi = document.createElement('li');
        const newA = document.createElement('a');
        const navItem = section.querySelector('h2').textContent;

        newA.classList.add('menu__link');
        newA.textContent = navItem;
        newLi.appendChild(newA);
        navbarList.appendChild(newLi);
    })
}


//  Scroll to section on link click, and update 'active' class for nav. link
// 'active_section' class for the corresponding section
function whenClick() {
    const menu_Links = document.querySelectorAll('.menu__link');
    menu_Links.forEach((menu_Link, i) => {
        const sectionId = sections[i].getAttribute('id');
        menu_Link.setAttribute('href', `#${sectionId}`);
        menu_Link.addEventListener('click', respondToClick);
    });
}


 function respondToClick(event) {
    event.preventDefault();  // Prevent default anchor behavior

    removeActiveClassFromLink(); 
    this.classList.add('active');

    const sectionId = this.getAttribute('href').substring(1); // Extract section ID from href
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        removeActiveClassFromSection();
        section.classList.add('active_section');
    }
}


//respond to scroll event, update class for both section and the corresponding link
function whenScroll() {
    for (let section of sections) {
        if (isInViewport(section)) {
            // Remove 'active_section' class from all sections
            removeActiveClassFromElements(sections, 'active_section');

            // Add 'active_section' class to the current active section
            setActiveClass(section, 'active_section');

            // Find the corresponding link and add 'active' class to it
            const correspondingLink = searchMenuByText(section.getAttribute('data-nav'));
            removeActiveClassFromElements(document.querySelectorAll('.menu__link'), 'active');
            setActiveClass(correspondingLink, 'active');
            break;
        }
    }
}



/**
 * End Main Functions
 * Begin Events
 *
*/

setTimeout(buildNav, 0);



//set 'click' events to each link
setTimeout(whenClick, 50);


// when scroll 
window.addEventListener('scroll', whenScroll, true);

let navbarSections = document.querySelectorAll('.nav-section');
for (let i = 0; i < navbarSections.length; i++) {
  navbarSections[i].addEventListener('click', function(event) {
    let current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}


const backToTop = document.querySelector("#back2Top");
backToTop.setAttribute('href', '#');

window.addEventListener('scroll', function () {
    let height = window.pageYOffset;
    if (height > 150) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});


const smoothValue = 10;
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / smoothValue);
        
    }
};

backToTop.addEventListener('click',
    //scrollToTop
    window.scrollTo({ top: 0, behavior: "smooth" })
);


// ... (your existing code)


window.addEventListener('scroll', function () {
    for (let section of sections) {
        if (isInViewport(section)) {
            // Remove 'active_section' class from all sections
            removeActiveClassFromElements(sections, 'active_section');

            // Add 'active_section' class to the current active section
            setActiveClass(section, 'active_section');

            // Find the corresponding link and add 'active' class to it
            const correspondingLink = searchMenuByText(section.getAttribute('data-nav'));
            removeActiveClassFromElements(document.querySelectorAll('.menu__link'), 'active');
            setActiveClass(correspondingLink, 'active');
            break; // Exit the loop after the first active section is found
        }
    }
});



  

