/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuComponent = array => {
  // ** create structure
  let menuDiv = document.createElement("div");
  let menuUl = document.createElement("ul");
  let menuLi = document.createElement("li");
  let menuButton = document.createElement("button");
  // ** create class attributes
  menuDiv.classList.add("menuDiv");
  menuUl.classList.add("list");
  menuLi.classList.add(".menu");
  menuButton.classList.add(".menu-button");
  // ** append to parent most element (div)
  menuDiv.appendChild(menuUl);
  menuDiv.appendChild(menuButton);
  menuUl.appendChild(menuLi);
  // ** Itterate over the array to create a list item for each element in the array
  array.forEach(content => {
    menuLi.textContent = content;
  });

  // ** add a toggle to "menu--open" on the "menu"
  menuButton.addEventListener("click", function() {
    menuDiv.classList.toggle(".menu--open");
    console.log("menu clicked");
  });
  return menuDiv;
};

// ! define parent element
let menuGetter = document.querySelector(".header");

menuGetter.appendChild(menuComponent(menuItems));
