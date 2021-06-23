"use strict";

import { home } from "./components/home.js";
import { menu } from "./components/menu.js";
import { contact } from "./components/contact.js";

const content = document.getElementById("content");

function nav() {
  const header = document.createElement("header");
  content.appendChild(header);

  const navList = document.createElement("ul");
  header.appendChild(navList);
  navList.id = "nav";

  const home = document.createElement("li");
  home.id = "home";
  home.classList = "nav-item";
  home.textContent = "Home";
  navList.appendChild(home);

  const menu = document.createElement("li");
  menu.id = "menu";
  menu.classList = "nav-item";
  menu.textContent = "Menu";
  navList.appendChild(menu);

  const contact = document.createElement("li");
  contact.id = "contact";
  contact.classList = "nav-item";
  contact.textContent = "Contact";
  navList.appendChild(contact);



};

nav();

const navTab = {
  home: document.getElementById("home"),
  menu: document.getElementById("menu"),
  contact: document.getElementById("contact"),
};


navTab.home.addEventListener("click", () => {
  const contentLast = content.lastChild;
  content.removeChild(contentLast);
  home();
});
navTab.menu.addEventListener("click", () => {
  const contentLast = content.lastChild;
  content.removeChild(contentLast);
  content.classList.remove("active");
  menu();
});
navTab.contact.addEventListener("click", () => {
  const contentLast = content.lastChild;
  content.removeChild(contentLast);
  content.classList.remove("active");
  contact();
});


home();

export { navTab };