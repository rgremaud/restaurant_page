// menu.js

function createMenuDiv () {
    const menuDiv = document.createElement("div");
    menuDiv.className = "pageTab";
    menuDiv.id = "menuDiv";

    createTitle(menuDiv);
    createMenuDetails(menuDiv);

    return menuDiv;
}

function createTitle (parentDiv) {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Theo's Menu"

    parentDiv.appendChild(title);
}

function createMenuDetails (parentDiv) {
    // Specials - $15
    const specials = document.createElement("h3");
    specials.textContent = "Specials - $15";
    // The Kitchen Sink - Strawberry, Mint-Chocolate Chip, Coffee, Cookie-Dough ice cream topped with sprinkles
    // Sprinkles Rule - Choice of any flavor topped with two servings of sprinkles
    // Dealer's Choice - Three random flavors selected by our ice cream wizard

    // Single Scoop - $5 
    // Double Scoop - $8

    // Flavors
    // Vanilla Chocolate Strawbery  
    // Mint Chocolate Chip Rocky Road Cookie Dough
    // Coffee Peach Cobbler Cookies-n-Cream

    parentDiv.appendChild(specials);
}

export { createMenuDiv };