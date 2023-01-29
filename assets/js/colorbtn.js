const darkBtn = document.querySelector(".dark-btn");
const lightBtn = document.querySelector(".light-btn");
const favicon = document.querySelector('link[rel="icon"]');
const hlogo = document.querySelector(".hlogo");

lightBtn.addEventListener("click", setDarkMode);
darkBtn.addEventListener("click", setLightMode);

function setDarkMode(){
    setUserTheme("dark");
    favicon.setAttribute('href', 'assets/img/favicon/dark.png')
    hlogo.setAttribute("src", "assets/img/favicon/dark.png");
}

function setLightMode(){
    setUserTheme("light");
    favicon.setAttribute('href', 'assets/img/favicon/light.png')
    hlogo.setAttribute('src', 'assets/img/favicon/light.png')
}

function setUserTheme(newTheme){
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}
