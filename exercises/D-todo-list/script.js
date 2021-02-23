function todoList(todoList) {
  let divIdContent = document.querySelector("#content");
  let list = document.createElement("ul");

  for (let item of todoList) {
    let listItem = document.createElement("li");
    listItem.innerText = item.todo;

    listItem.addEventListener("click", () => {
      if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "none";
      } else {
        listItem.style.textDecoration = "line-through";
      }
    });

    list.appendChild(listItem);
  }
  divIdContent.appendChild(list);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
