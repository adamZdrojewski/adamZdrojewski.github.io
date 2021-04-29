const nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
    if(window.scrollY <= 0) {
        //Page Scrolled All The Way Up
        nav.style.backgroundColor = "";
    } else {
        //Page Not Scrolled At The Top
        nav.style.backgroundColor = "#008FDB";
    }
});