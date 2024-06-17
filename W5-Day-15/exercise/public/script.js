// scrollTop
const btnToTop = document.querySelector("#btnToTop");

// light / dark mode 
const body = document.querySelector("#body");
const icon = document.querySelector("#modeToggle");
const nav = document.querySelector("#navContainer");
const aboutBox = {
    education: document.querySelector(".education"),
    experience: document.querySelector(".experience")
};
const projectsBox = {
    pacman: document.querySelector(".left-one"),
    taskApp: document.querySelector(".left-two"),
    quote: document.querySelector(".right-one"),
    randomPassword: document.querySelector(".right-two")
};
const emailContainer = document.querySelector("#emailContainer");
const footer = document.querySelector("#footer");

// sidebar 
const sideBar = document.querySelector("#sidebar");
const sidebarBackground = document.querySelector("#sidebarBackground");
const listMenu = document.querySelector("#listMenu");
const closeIcon = document.querySelector("#xIcon");

// projects 
const button = {
    pacman: document.querySelector("#button1"),
    taskApp: document.querySelector("#button2"),
    quote: document.querySelector("#button3"),
    randomPassword: document.querySelector("#button4"),
};

// social media 
const instagram = document.querySelector(".instagram");
const linkedIn = document.querySelector(".linkedin");
const gitHub = document.querySelector(".github");
const gmail = document.querySelector(".gmail");

// Define the media query for mobile devices
const mobileMediaQuery = window.matchMedia("(max-width: 470px)");

// Function to show or hide the "scroll to top" button based on scroll position and media query
function scrollTop () {
     if (mobileMediaQuery.matches) { // check if the media query matches
        if (document.documentElement.scrollTop > 200) {
            btnToTop.style.display = "block";
        } else {
        btnToTop.style.display = "none";
        }
     } else {
        // hide the button if it's not a mobile devices
        btnToTop.style.display = "none";
     }
};

// Function to handle the scroll event (invoke or calling)
function handleScroll () {
    scrollTop();
};

// Function to handle changes in media query state
function handleMediaQueryChange(e) {
    if (e.matches) {
        // Media query matches (i.e., on mobile), check scroll position 
        handleScroll();
        window.addEventListener('scroll', handleScroll);
    } else {
        // Media query does not match (i.e., on desktop), hide the button
        btnToTop.style.display = "none";
        window.removeEventListener('scroll', handleScroll);
    }
};
// Without this function, the scroll event listener would not be managed properly, leading to potential issues like unnecessary event listeners on desktop devices or the button not appearing/disappearing correctly on mobile devices.

// Initial check 
handleMediaQueryChange(mobileMediaQuery);

// Add listener for media query changes
mobileMediaQuery.addEventListener('change', handleMediaQueryChange);

// click event listener used onclick at index.html
// Function to scroll to the top of the document when the button is clicked
function topFunction () {
    // document.body.scrollTop = 0; // For safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and OPERA
};


// function for dark / light mode
function toggleDarkLight () {
    // for dark mode
    // to check if the body element has class name darkMode
    // logical NOT operator 
    if (!document.body.classList.contains('darkMode')) {
        document.body.classList.add('darkMode');
        // replace icon 
        icon.setAttribute('class', 'bi bi-brightness-high-fill');
        // background color for website
        body.style.color = 'white';
        body.style.background = 'black';
        nav.style.background = '#181818';
        aboutBox.education.style.background = '#181818';
        aboutBox.experience.style.background = '#181818';
        projectsBox.pacman.style.background = '#181818';
        projectsBox.taskApp.style.background = '#181818';
        projectsBox.quote.style.background = '#181818';
        projectsBox.randomPassword.style.background = '#181818';
        emailContainer.style.background = '#181818';
        footer.style.background = '#181818';
        console.log("dark mode activated");
    // for light mode
    // code to execute if condition is false
    } else {
        document.body.classList.remove('darkMode');
        // replace icon
        icon.setAttribute('class', 'bi bi-moon-stars-fill');
        // background color for website
        body.style.color = 'black';
        body.style.background = 'white';
        nav.style.background = '#e6e2e2';
        aboutBox.education.style.background = '#e9f2f5';
        aboutBox.experience.style.background = '#e9f2f5';
        projectsBox.pacman.style.background = '#f3f1f1';
        projectsBox.taskApp.style.background = '#f3f1f1';
        projectsBox.quote.style.background = '#f3f1f1';
        projectsBox.randomPassword.style.background = '#f3f1f1';
        emailContainer.style.background = '#f3f1f1';
        footer.style.background = '#e6e2e2';
        console.log("light mode activated");
    }
};

// click event for dark / light mode
modeToggle.addEventListener("click", toggleDarkLight);

// sidebar clickevent 
listMenu.addEventListener("click", function () {
    sidebarBackground.style.visibility = "visible";
    sideBar.style.right = "0";
    console.log("menu button clicked");
});

closeIcon.addEventListener("click", function () {
    sidebarBackground.style.visibility = "hidden";
    sideBar.style.right = "-200px";
    console.log("close button clicked"); 
});

sidebarBackground.addEventListener ("click", function () {
    sidebarBackground.style.visibility = "hidden";
    sideBar.style.right = "-200px";
    console.log("background clicked");
});

// projects click event 
button.pacman.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn/W3-Day-9/tree/main/pacman");
});

button.taskApp.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn/JavaScript-Exercise/tree/main/Quote%20Generator");
});

button.quote.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn/JavaScript-Exercise/tree/main/Quote%20Generator");
});

button.randomPassword.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn/JavaScript-Exercise/tree/main/Random%20Password%20Generator");
});

// social media click event
instagram.addEventListener ("click", function () {
    window.open("https://www.instagram.com/khairulamirn/");
});

linkedIn.addEventListener ("click", function () {
    window.open("https://www.linkedin.com/in/khairulamirin-lamin-69443123b/");
});

gitHub.addEventListener ("click", function () {
    window.open("https://github.com/khairulamirn");
});

gmail.addEventListener ("click", function () {
    window.open("mailto:khairulamirin.lamin@gmail.com");
});