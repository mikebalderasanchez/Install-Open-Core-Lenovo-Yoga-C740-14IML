const mdarkBtn = document.getElementById("mdark-btn");
const mlightBtn = document.getElementById("mlight-btn");
const mluserTheme = localStorage.getItem("theme");
const mlfavicon = document.querySelector('link[rel="icon"]');
const mlhlogo = document.querySelector(".hlogo");

mlightBtn.addEventListener("click", setDarkMode);
mdarkBtn.addEventListener("click", setLightMode);

function iconsDark(){
    mlfavicon.setAttribute("href", "assets/img/favicon/dark.png");
    mlhlogo.setAttribute("src", "assets/img/favicon/dark.png");
}

function iconsLight(){
    mlfavicon.setAttribute("href", "assets/img/favicon/light.png");
    mlhlogo.setAttribute("src", "assets/img/favicon/light.png");
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

if(mluserTheme === "dark"){
    iconsDark();
} else{
    iconsLight();
}