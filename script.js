let btn = document.getElementById('btn');
let input = document.getElementById('input');
let todolist = document.getElementById('list');

let todos = [];
window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addtolist(todo));
};

btn.addEventListener('click', () => {
    addTodo();
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if the key is "Enter"
        addTodo();
    }
});

function addTodo() {
    if (input.value.trim() !== '') { // Prevent adding empty todos
        todos.push(input.value);
        localStorage.setItem('todos', JSON.stringify(todos));
        addtolist(input.value);
        input.value = '';
    }
}

function addtolist(value) {
    let para = document.createElement('p');
    para.innerText = value;
    todolist.appendChild(para);
    para.addEventListener('click', () => {
        para.style.textDecoration = 'line-through';
        remove(value);
    });
    para.addEventListener('dblclick', () => {
        todolist.removeChild(para);
        remove(value);
    });
}

function remove(value) {
    let index = todos.indexOf(value);
    if (index > -1)
        todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
