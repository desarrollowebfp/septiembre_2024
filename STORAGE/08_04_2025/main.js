//Creamos los nodos de los elementos que existen en HTML
const todoForm = document.querySelector("#todo_form");
const todoContainer = document.querySelector("#todo_container");
const resetBtn = document.querySelector("#resetBtn");

//Vamos a inicializar una lista de todos vacía
let todos = [];

//Vamos a crear una función que guarde los TODOS en el LocalStorage
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//Vamos a crear una función que cargue los TODOS si se encuentran en el LocalStorage
const loadTodos = () => {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todos = JSON.parse(storedTodos);
    todos.forEach((todo) => printTodo(todo));
  } else{
    todoContainer.innerHTML = "";
  }
};

todoForm.addEventListener("submit", (ev) => {
  //Prevenimos el comportamiento por defecto del evento submit y evitamos que recargue la página al hacer submit en un formulario
  ev.preventDefault();
  const inputValue = document.querySelector("#todo_input").value;
  if (inputValue === "") {
    alert("Tienes que añadir texto al TODO");
  } else {
    //Creamos un nuevo objeto TODO
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    //Añadimos el nuevo todo al array
    todos.push(newTodo);
    //Lo pintamos 
    printTodo(newTodo);
    saveTodos();
    //Reseteamos el formulario
    todoForm.reset()
  }
});

const printTodo = (todo) => {
  const li = document.createElement("li");
  li.dataset.id = todo.id;

  const p = document.createElement("p");
  p.textContent = todo.text;

  //Le aplicamos el estilo completado a los todos que tengan completed: true
  if (todo.completed) {
    p.style.textDecoration = "line-through";
  }

  //Le añadimos un evento click a los parrafos para completar o descompletar los todos
  p.addEventListener("click", () => {
    todo.completed = !todo.completed;
    p.style.textDecoration = todo.completed ? "line-through" : "none";
    saveTodos();
  });

  //Vamos a crear el botón de editar
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit TODO", todo.text);
    todo.text = newText;
    p.textContent = newText;
    saveTodos();
  });

  //Vamos a crear el botón de borrar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    //Borramos el elemento del DOM
    li.remove();
    //Y eliminamos el elemento del array
    todos = todos.filter((t) => t.id != todo.id);
    saveTodos();
  });
  //Construimos el li
  li.appendChild(p);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  todoContainer.appendChild(li);
};

//Le añadimos la función de limpiar el localStorage;
resetBtn.addEventListener("click", () => {
    localStorage.removeItem("todos");
    loadTodos()
})

document.addEventListener("DOMContentLoaded", () => {
    loadTodos();
})