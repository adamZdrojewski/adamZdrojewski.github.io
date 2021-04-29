//Constants
const nav = document.querySelector("nav");

//Page Setup
testScrollPosition();

//Event Listeners
window.addEventListener("scroll", (e) => {
    testScrollPosition();
});

//Functions
function testScrollPosition() {
    if(screen.width > 555) {
        if(window.scrollY <= 0) {
            //Page Scrolled All The Way Up
            nav.style.backgroundColor = "";
        } else {
            //Page Not Scrolled At The Top
            nav.style.backgroundColor = "#008FDB";
        }
    }
}

function myScroll(section) {
    if(section == "home") {
        document.querySelector("#home").scrollIntoView(true);
    } else if(section == "aboutMe") {
        document.querySelector("#aboutMe").scrollIntoView(true);
    } else if(section == "projects") {
        document.querySelector("#projects").scrollIntoView(true);
    } else if(section == "social") {
        document.querySelector("#social").scrollIntoView(true);
    }
    var maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if(window.scrollY && maxScroll != window.scrollY && screen.width > 555) {
        window.scroll(0, scrollY - 89);
    }
}