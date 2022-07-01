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
let body = document.querySelector("body");
let themeSwitchBtn = document.querySelector(".dark-light-changer-button button");
let mobieimage = document.querySelector(".trade-anywhere-image-section img");


if (!localStorage.getItem('themeStatus')) {
    let themeStatus = { 'status': "light" };
    localStorage.setItem('themeStatus', JSON.stringify(themeStatus));

}

function setThemeAsLocalStorage() {
    let getThemeStatus = JSON.parse(localStorage.getItem('themeStatus'));
    if (getThemeStatus.status == "light") {
        body.classList.remove("dark-theme");
        themeSwitchBtn.querySelector("i").classList.add("fa-sun");
        themeSwitchBtn.querySelector("i").classList.remove("fa-moon");
        mobieimage.src = "./assets/img/mobile-image.png";
    } else {
        themeSwitchBtn.querySelector("i").classList.add("fa-moon");
        themeSwitchBtn.querySelector("i").classList.remove("fa-sun");
        mobieimage.src = "./assets/img/mobile-image-dark.png";
        body.classList.add("dark-theme");

    }
}
document.addEventListener("DOMContentLoaded", (e) => {
    setThemeAsLocalStorage();
});

function changeTheme() {
    let getThemeStatus = JSON.parse(localStorage.getItem('themeStatus'));
    if (getThemeStatus.status == "light") {
        body.classList.add("dark-theme");
        themeSwitchBtn.querySelector("i").classList.add("fa-moon");
        themeSwitchBtn.querySelector("i").classList.remove("fa-sun");
        mobieimage.src = "./assets/img/mobile-image-dark.png";
        getThemeStatus.status = "dark"
        localStorage.setItem('themeStatus', JSON.stringify(getThemeStatus));

    } else {
        themeSwitchBtn.querySelector("i").classList.add("fa-sun");
        themeSwitchBtn.querySelector("i").classList.remove("fa-moon");
        mobieimage.src = "./assets/img/mobile-image.png";
        body.classList.remove("dark-theme");
        getThemeStatus.status = "light"
        localStorage.setItem('themeStatus', JSON.stringify(getThemeStatus));
    }

}

themeSwitchBtn.addEventListener("click", (e) => changeTheme());