const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const luserTheme = localStorage.getItem("theme");
const lfavicon = document.querySelector('link[rel="icon"]');
const lhlogo = document.querySelector(".hlogo");

lightBtn.addEventListener("click", setDarkMode);
darkBtn.addEventListener("click", setLightMode);

function iconsDark(){
    lfavicon.setAttribute("href", "assets/img/favicon/dark.png");
    lhlogo.setAttribute("src", "assets/img/favicon/dark.png");
}

function iconsLight(){
    lfavicon.setAttribute("href", "assets/img/favicon/light.png");
    lhlogo.setAttribute("src", "assets/img/favicon/light.png");
}

function setDarkMode(){
    setUserTheme("dark");
    iconsDark();
}

function setLightMode(){
    setUserTheme("light");
    iconsLight();
}

function setUserTheme(newTheme){
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

if(luserTheme === "dark"){
    iconsDark();
} else{
    iconsLight();
}