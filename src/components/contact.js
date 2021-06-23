

function contact() {
  const textContainer = document.createElement("div");
  textContainer.classList = "text-container";
  content.appendChild(textContainer);

  const contactText = document.createElement("p");
  contactText.classList = "contact-text";
  contactText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque dignissim consequat. Nam lacinia ex sed justo porttitor fringilla ut non orci. Suspendisse tristique ultricies turpis, vitae molestie nulla faucibus vel. Nullam lobortis turpis pellentesque tellus blandit iaculis elementum ut dolor. Pellentesque in enim a odio iaculis fringilla. Maecenas augue urna, varius a odio at, mattis aliquet dolor. ";
  textContainer.appendChild(contactText);

  navTab.home.classList.add("inactive");
  navTab.menu.classList.add("inactive");
  navTab.contact.classList.remove("inactive");

}
import {navTab} from "../index.js";
export { contact };