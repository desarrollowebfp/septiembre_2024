const todoForm = document.querySelector("#todo_form")

todoForm.addEventListener("submit", (ev) => {
    //Prevenimos el comportamiento por defecto del evento submit y evitamos que recargue la página al hacer submit en un formulario
   ev.preventDefault();
    const inputValue = document.querySelector("#todo_input").value;
    if(inputValue === ""){
        alert("Tienes que añadir texto al TODO");
    } else{
        printTodo(inputValue);
        todoForm.reset();
    }
})

const printTodo = (text) => {
    const container = document.querySelector("#todo_container");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    })
    li.appendChild(p);
    li.appendChild(deleteBtn);
    container.appendChild(li);
}