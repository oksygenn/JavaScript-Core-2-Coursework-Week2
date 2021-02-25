const jumbotron = document.querySelector(".jumbotron");
const donateBtn = document.querySelector(".jumbotron .btn-primary");
const volunteerBtn = document.querySelector(".jumbotron .btn-secondary");

const blueBtn = document.querySelector("#blueBtn");
const orangeBtn = document.querySelector("#orangeBtn");
const greenBtn = document.querySelector("#greenBtn");

const changeColours = (
  jumbotronBackground,
  donateBtnBackground,
  volunteerBackground,
  volunteerTextColor
) => {
  jumbotron.style.backgroundColor = jumbotronBackground;
  donateBtn.style.backgroundColor = donateBtnBackground;
  volunteerBtn.style.backgroundColor = volunteerBackground;
  volunteerBtn.style.color = volunteerTextColor;
};

blueBtn.addEventListener("click", () => {
  changeColours(`#588fbd`, `#ffa500`, `black`, `white`);
});

orangeBtn.addEventListener("click", () => {
  changeColours(`#f0ad4e`, `#5751fd`, `#31b0d5`, `white`);
});

greenBtn.addEventListener("click", () => {
  changeColours(`#87ca8a`, `black`, `#8c9c08`, `white`);
});

// second part

const submitBtn = document.querySelector("form button");
const emailInput = document.querySelector("#exampleInputEmail1");
const nameInput = document.querySelector("#example-text-input");
const textareaDescribeYourself = document.querySelector("#exampleTextarea");

let arrayOfFields = [emailInput, nameInput, textareaDescribeYourself];

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let errors = false;
  for (let field of arrayOfFields) {
    if (field.value.length === 0) {
      errors = true;
      field.style.backgroundColor = "red";
    }
  }
  if (errors === false) {
    alert("Thank you for filling out the form");
    for (let field of arrayOfFields) {
      field.value = "";
    }
  }
});
