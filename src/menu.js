// menu.js

function createMenuDiv () {
    const menuDiv = document.createElement("div");
    menuDiv.id = "menuDiv";

    createTitle(menuDiv);

    return menuDiv;
}

function createTitle (parentDiv) {
    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Theo's Menu"

    parentDiv.appendChild(title);
}

export { createMenuDiv };