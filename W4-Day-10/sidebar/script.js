// assign dom elements to variables
const btnMenu = document.querySelector("#menuIcon");
const closeIcon = document.querySelector("#xIcon");
const sideBar = document.querySelector("#sidebar");
const sidebarBackground = document.querySelector("#sidebarBackground");

// addEventListener(a, b)
// a: event name
// b: function to run when event happens
btnMenu.addEventListener("click", function () {
    console.log("menu button clicked");
    // sideBar.style.display = "block"
    sidebarBackground.style.visibility = "visible";
    sideBar.style.right = "0" 
});

closeIcon.addEventListener("click", function () {
    console.log("menu button clicked");
    // sideBar.style.display = "none"
    sidebarBackground.style.visibility = "hidden";
    sideBar.style.right = "-200px"
});

sidebarBackground.addEventListener ("click", function () {
    console.log("background clicked");
    sidebarBackground.style.visibility = "hidden";
    sidebarBackground.style.right = "-200px";
});