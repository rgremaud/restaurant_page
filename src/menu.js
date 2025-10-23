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
    const specialTitle = document.createElement("h3");
    specialTitle.textContent = "Specials - $15";

    const specialItems = [
        {
            special: "The Kitchen Sink",
            description: "Scoop of Strawberry, Mint-Chocolate Chip, Coffee, Cookie-Dough topped with our housemade sprinkles",
        }, 
        {
            special: "Sprinksplosion",
            description: "Choice of any three flavors topped with our housemade chocolate sauce and a triple serving of sprinkles",
        },
        {
        special: "Dealer's Choice",
        description: "Three random flavors selected by our ice cream wizard",
        },
    ]
    /*
        Iterate over the specialItems array
        Create a menuItem div for each special
        create a div for special and description within each menuItem div
        add styling in CSS
    */
    // rework this so you iterate over each array item and then each item underneath
    Object.keys(specialItems).forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menuItem";

        const specialTitle = document.createElement("div");
        specialTitle.className = "specialTitle";
        specialTitle.textContent = item.special;

        const description = document.createElement("div");
        description.className = "description";
        description.textContent = item.description;

        menuItem.appendChild(specialTitle);
        menuItem.appendChild(description);

        parentDiv.appendChild(menuItem)

        })

    // Single Scoop - $5 
    // Double Scoop - $8

    // Flavors
    // Vanilla Chocolate Strawbery  
    // Mint Chocolate Chip Rocky Road Cookie Dough
    // Coffee Peach Cobbler Cookies-n-Cream

    parentDiv.appendChild(specialTitle);
}

export { createMenuDiv };