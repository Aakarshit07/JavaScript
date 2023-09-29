const subHeading = document.getElementById("sub-heading");
const list = document.getElementById("todo-list");
const submitButton = document.getElementById("btn");
const deletebutton = document.querySelector(".delete-btn");

const formattedDate = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric"
});
subHeading.textContent = formattedDate;
// console.log(subHeading);

const addedItems = new Set();

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const todoInput = document.getElementById("todo-input").value.trim();

  if (todoInput !== "" && !addedItems.has(todoInput)) {
    addedItems.add(todoInput);
    const listItem = document.createElement("div");
    listItem.className = "todo";
    listItem.innerHTML = `
    <li class="list-group-item p-3">
      <input class="form-check-input me-1" id="todo-1" type="checkbox" />
      <label class="form-check-label" for="todo-1">${todoInput}</label>
    </li>
  `;

    list.appendChild(listItem);
    todoInput.value = "";
  }
});

// delete button

function clearAll() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  addedItems.clear();
}

deletebutton.addEventListener("click", function (event) {
  event.preventDefault();
  clearAll();
});
