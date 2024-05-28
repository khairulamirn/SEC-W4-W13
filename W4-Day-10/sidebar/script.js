const btnMenu = document.querySelector("#menuIcon");
const sideBar = document.querySelector("#sidebar");
const closeIcon = document.querySelector("#xIcon");

btnMenu.addEventListener("click", function () {
    console.log("menu button clicked");
    // sideBar.style.display = "block"
    sideBar.style.right = "0"
});

closeIcon.addEventListener("click", function () {
    console.log("menu button clicked");
    // sideBar.style.display = "none"
    sideBar.style.right = "-200px"
})