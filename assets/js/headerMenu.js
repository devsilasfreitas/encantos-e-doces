const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementsByClassName("menu")[0];
const closeMenu = document.getElementById("close");

hamburguer.addEventListener("click", () => {
    menu.style.transform = "translateX(-100%)";
    hamburguer.hidden = true;
});

closeMenu.addEventListener("click", () => {
    menu.style.transform = "";
    hamburguer.hidden = false;
});

const links = document.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener("click", () => {
        menu.style.transform = "";
        hamburguer.hidden = false;
    });
}
