// -------- side nav srcipt

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


// ------------ menu item hover
let navMenuElements = document.querySelectorAll("li.nav-left-menu-item");
document.addEventListener("mouseover", (ele) => {
    navMenuElements.forEach(e => {
        if (ele.path.includes(e)) {
            if (e.querySelector("i")) {
                e.querySelector("i").classList.remove("fa-caret-down");
                e.querySelector("i").classList.add("fa-caret-up");
            }

        } else {
            if (e.querySelector("i")) {
                e.querySelector("i").classList.add("fa-caret-down");
                e.querySelector("i").classList.remove("fa-caret-up");
            }

        }
    })


});


// --------------- light dark theme switch ---------------

let themeSwitchBtn = document.querySelector(".dark-light-changer-button button");
let mobieimage = document.querySelector(".trade-anywhere-image-section img");
themeSwitchBtn.addEventListener("click", (e) => {
    document.querySelector("body").classList.toggle("dark-theme");
    if (themeSwitchBtn.querySelector("i").classList.contains("fa-moon")) {
        themeSwitchBtn.querySelector("i").classList.add("fa-sun");
        themeSwitchBtn.querySelector("i").classList.remove("fa-moon");
        mobieimage.src = "./assets/img/mobile-image-dark.png";

    } else {
        themeSwitchBtn.querySelector("i").classList.add("fa-moon");
        themeSwitchBtn.querySelector("i").classList.remove("fa-sun");
        mobieimage.src = "./assets/img/mobile-image.png";

    }
})