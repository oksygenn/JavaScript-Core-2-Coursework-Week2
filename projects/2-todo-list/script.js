function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  for (let todo of todos) {
    // create list item, add classes to it, set innerText and append it to "list"
    const listItem = document.createElement("li");
    listItem.classList =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerText = todo.task;
    list.appendChild(listItem);

    // create span element, add classes to it and append it to listItem
    const spanEl = document.createElement("span");
    spanEl.classList = "badge bg-primary rounded-pill";
    listItem.appendChild(spanEl);

    // create "done" and "delete" buttons, add classes to them and append to spanEl
    const doneBtn = document.createElement("i");
    doneBtn.classList = "fa fa-check";
    doneBtn.setAttribute("aria-hidden", "true");
    const deleteBtn = document.createElement("i");
    deleteBtn.classList = "fa fa-trash";
    deleteBtn.setAttribute("aria-hidden", "true");
    spanEl.append(doneBtn, deleteBtn);

    doneBtn.addEventListener("click", () => {
      if (listItem.style.textDecoration === "line-through") {
        listItem.style.textDecoration = "none";
      } else {
        listItem.style.textDecoration = "line-through";
      }
    });

    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });
  }
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Walk a dog", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
