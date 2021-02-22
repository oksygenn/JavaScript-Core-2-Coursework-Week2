function shoppingList(arrayOfItems) {
  let divIdContent = document.querySelector("#content"); // find div with id "content"

  let ulTag = document.createElement("ul"); // create ul tag

  for (let item of arrayOfItems) {
    let liTag = document.createElement("li"); // create li tag for every element of the array
    liTag.innerText = item; // add every element of the array inside li tag
    ulTag.appendChild(liTag); // append li tags to ul tag
  }

  divIdContent.appendChild(ulTag); // append ul to div
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
