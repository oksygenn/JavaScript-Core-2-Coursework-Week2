function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  for (let person of arrayOfPeople) {
    // create h1 and h2 tags for every element of arrayOfPeople
    let h1Name = document.createElement("h1");
    let h2Job = document.createElement("h2");

    // get name and job of person from arrayOfPeople and put it inside h1 and h2 tags
    h1Name.innerText = person.name;
    h2Job.innerText = person.job;

    // put h1 and h2 tags inside div with id "#content"
    content.appendChild(h1Name);
    content.appendChild(h2Job);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
