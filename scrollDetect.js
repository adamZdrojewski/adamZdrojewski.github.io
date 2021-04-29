//Constants
const nav = document.querySelector("nav");
const zhubTwoCol = document.querySelector("#zhubTwoCol");

//Page Setup
testScrollPosition();
updateZHubTwoCol();

//Event Listeners
window.addEventListener("scroll", (e) => {
    testScrollPosition();
});

window.addEventListener("resize", (e) => {
    updateZHubTwoCol();
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

function updateZHubTwoCol() {
    if(window.innerWidth <= 1015) {
        zhubTwoCol.innerHTML = "<div class=\"right\"><h4>ZHub</h4><p>ZHub is a website that me and my family use to keep track of our calendars and to-do lists.  The general concept and layout of the site is based off of the Carnival Hub App from the cruise line.  This was the first site that I made using Vue.js.  The website also communicates with a Google Firestore database.</p></div><div class=\"left zhubLeft\"><img src=\"img/zhubEvents.PNG\" alt=\"screenshot of ZHub website events page\"><img src=\"img/zhubTasks.PNG\" alt=\"screenshot of ZHub website tasks page\"></div>";
    } else {
        zhubTwoCol.innerHTML = "<div class=\"left zhubLeft\"><img src=\"img/zhubEvents.PNG\" alt=\"screenshot of ZHub website events page\"><img src=\"img/zhubTasks.PNG\" alt=\"screenshot of ZHub website tasks page\"></div><div class=\"right\"><h4>ZHub</h4><p>ZHub is a website that me and my family use to keep track of our calendars and to-do lists.  The general concept and layout of the site is based off of the Carnival Hub App from the cruise line.  This was the first site that I made using Vue.js.  The website also communicates with a Google Firestore database.</p></div>";
    }
}