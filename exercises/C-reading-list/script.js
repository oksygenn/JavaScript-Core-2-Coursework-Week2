function readingList(books) {
  // find div with id "content"
  let divIdContent = document.querySelector("#content"); // find div with id "content"
  let ul = document.createElement("ul"); // create ul tag for all books

  for (let book of books) {
    let listItem = document.createElement("li"); // create li tag for each book
    let paragraph = document.createElement("p"); // create p tag for title of each book
    let image = document.createElement("img"); // create img tag for each book

    paragraph.innerText = `${book.title} - ${book.author}`; // get book title and author from books array and save it to "paragraph" variable
    image.src = book.image; // get image url and save it to img src
    image.setAttribute("width", "300"); // set width of the image
    image.setAttribute("height", "367"); // set height of the image

    listItem.appendChild(paragraph); // put a p tag with title and author inside li tag
    listItem.appendChild(image); // put a img tag with image url inside li tag

    ul.appendChild(listItem); // put li tag with children(p, img) inside ul tag

    if (book.alreadyRead) {
      listItem.style.backgroundColor = "green";
    } else {
      listItem.style.backgroundColor = "red";
    }
  }
  divIdContent.appendChild(ul);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image: "https://m.media-amazon.com/images/I/51Dl6lXXesL._SL500_.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg",
  },
];

readingList(books);

// - Iterate through the list of books.
// - For each book, create a `<p>` element with the book title and author and append it to the page.
// - Use a `<ul>` and `<li>` to display the books.
// - Add an `<img>` to each book that links to a URL of the book cover.
// - Change the style of the book depending on whether you have read it (green) or not (red).
// - All of your HTML should go inside the `<div>` with the id **"content"**.
