let addButton = document.querySelector('.add-btn');
let todoContainer = document.querySelector('.task-list ul');
let inputField = document.querySelector('.input-container input');

addButton.addEventListener('click', () => {
    if(inputField.value === ''){
        alert("Write a task!")
        return;
    }
    let li = document.createElement('li');
    li.innerText = inputField.value;
    todoContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerText = "X";
    li.appendChild(span)
    inputField.value = "";
    saveData();
});

todoContainer.addEventListener('click', e => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem('data', todoContainer.innerHTML);
}

const showTask = () => {
    todoContainer.innerHTML = localStorage.getItem('data');
}
showTask();

