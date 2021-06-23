

function home() {

  const titleContainer = document.createElement("div");
  content.appendChild(titleContainer);
  titleContainer.classList = "title-container";

  const welcome = document.createElement("p");
  welcome.textContent = "Welcome to";
  titleContainer.appendChild(welcome);
  welcome.classList = "title welcome";

  const delight = document.createElement("h1");
  delight.textContent = "The Delight";
  titleContainer.appendChild(delight);
  delight.classList = "title delight";

  content.classList.add("active");

 
  navTab.home.classList.remove("inactive");
  navTab.menu.classList.add("inactive");
  navTab.contact.classList.add("inactive");

}
import {navTab} from "../index.js";
export { home };