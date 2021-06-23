
function menu() {
  const menuContainer = document.createElement("div");
  content.appendChild(menuContainer);
  menuContainer.classList = "menu-container";

  const startersContainer = document.createElement("div");
  menuContainer.appendChild(startersContainer);
  startersContainer.classList = "starters-container";

  const startersTitle = document.createElement("h2");
  startersContainer.appendChild(startersTitle);
  startersTitle.id = "starters";
  startersTitle.textContent = "Starters";

  for (let i = 0; i < 3; i++) {
    const startersItem = document.createElement("div");
    startersItem.classList = "starters-item";
    startersContainer.appendChild(startersItem);

    const startersItemContainer = document.createElement("div");
    startersItemContainer.classList = "starters-item-container";
    startersItem.appendChild(startersItemContainer);

    const price = document.createElement("p");
    startersItem.appendChild(price);
    price.classList = "price";

    const text = document.createElement("p");
    startersItemContainer.appendChild(text);
    text.classList = "text";

    const ingredientsText = document.createElement("p");
    ingredientsText.classList = "ingredients";
    startersItemContainer.appendChild(ingredientsText);

  }

  const mainContainer = document.createElement("div");
  menuContainer.appendChild(mainContainer);
  mainContainer.id = "main-container";

  const mainTitle = document.createElement("h2");
  mainContainer.appendChild(mainTitle);
  mainTitle.id = "main";
  mainTitle.textContent = "Main";


  for (let i = 0; i < 3; i++) {
    const mainItem = document.createElement("div");
    mainItem.classList = "main-item";
    mainContainer.appendChild(mainItem);

    const mainItemContainer = document.createElement("div");
    mainItemContainer.classList = "main-item-container";
    mainItem.appendChild(mainItemContainer);

    const price = document.createElement("p");
    mainItem.appendChild(price);
    price.classList = "price";

    const text = document.createElement("p");
    mainItemContainer.appendChild(text);
    text.classList = "text";

    const ingredientsText = document.createElement("p");
    ingredientsText.classList = "ingredients";
    mainItemContainer.appendChild(ingredientsText);

  }

  const price = document.getElementsByClassName("price");
  price[0].textContent = "$12";
  price[1].textContent = "$15";
  price[2].textContent = "$22";
  price[3].textContent = "$15";
  price[4].textContent = "$14";
  price[5].textContent = "$19";

  const text = document.getElementsByClassName("text");
  text[0].textContent = "Baked Potato Pizza";
  text[1].textContent = "Pork Tenderloin marinated in Yogurt";
  text[2].textContent = "Grilled Pork with Lemons";
  text[3].textContent = "Roasted Red Potatoes";
  text[4].textContent = "Lemon and Garlic Green Beans";
  text[5].textContent = "Bacon-Wrapped Shrimp";

  const ingredientsText = document.getElementsByClassName("ingredients");
  ingredientsText[0].textContent = "Potato / Bread / Cheese";
  ingredientsText[1].textContent = "Pork / Yogurt / Lemon";
  ingredientsText[2].textContent = "Pork / Lemons / Onions";
  ingredientsText[3].textContent = "Potatoes / Rosemary / Butter";
  ingredientsText[4].textContent = "Lemon / Garlic / Beans";
  ingredientsText[5].textContent = "Bacon / Shrimp / Garlic";

  navTab.home.classList.add("inactive");
  navTab.menu.classList.remove("inactive");
  navTab.contact.classList.add("inactive");

}

import {navTab} from "../index.js";
export { menu };
