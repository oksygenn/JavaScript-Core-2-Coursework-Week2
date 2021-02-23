function listOfColours(colours) {
  const divIdContent = document.querySelector("#content"); // find div with the id "content"
  const selectEl = document.createElement("select"); // * Create a `<select>` element.
  const pText = document.createElement("p"); // Create a `<p>` element.
  pText.innerText = `You have selected: `;

  divIdContent.appendChild(selectEl);
  divIdContent.appendChild(pText);

  for (colour of colours) {
    const option = document.createElement("option");
    option.innerText = colour;
    selectEl.appendChild(option);
  }

  selectEl.addEventListener("change", () => {
    pText.innerText = `You have selected: ${selectEl.value}`;
    pText.style.color = selectEl.value;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
