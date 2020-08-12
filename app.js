const myForm = document.querySelector('#myForm');
const userInput = document.querySelector('#userInput');
const btnSub = document.querySelector('#btn-sub');

let ul = document.querySelector('ul');
const list = document.querySelector('#list');


myForm.addEventListener('submit', onsubmit);

function onsubmit(s){
    s.preventDefault();
    if(userInput.value === ''){
        alert("empty input");
    }
    else{
        addUser();
        }
    }

let users = [];
let DeleteButton = `<button id = 'remove'>Delete</button>`;
let EditButton =  `<button id = 'edit'>Edit</button>`;


function addUser(){
    createObject();
    users.push(user);
    createList();
    const liselect = document.querySelectorAll('li');
    const edit = document.querySelectorAll('#edit');
    const remove = document.querySelectorAll('#remove');
    edit.onclick = editUser();

    remove.onclick = deleteUser();

    userInput.value = ''

}


function createObject(){
    return user = { text : userInput.value}
}
function createList(){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${user.text}`));
    li.innerHTML += EditButton;
    li.innerHTML += DeleteButton;
    ul.appendChild(li);
}

function editUser(){
    const liselect = document.querySelectorAll('li');
    const edit = document.querySelectorAll('#edit');
    for(let i=0;i<users.length;i++){
        edit[i].onclick = function(){
            let editInput = document.createElement('input');
            let save = document.createElement('button');
            liselect[i].appendChild(editInput);
            liselect[i].appendChild(save);
            save.innerText = 'Save';
            editInput.value = users[i].text;
                save.onclick = function(){
                    let editedUser = {
                        text : editInput.value,
                    }
                    const newInput = document.createTextNode(editedUser.text);
                    liselect[i].replaceChild(newInput,liselect[i].childNodes[0]);
                    users.splice(i,1,editedUser)
                    editInput.remove();
                    save.remove();
                }

        }
    }
}

function deleteUser(){
    const remove = document.querySelectorAll('#remove');
    const liselect = document.querySelectorAll('li');
    for(let i=0;i<users.length;i++){
        remove[i].onclick = function(r){
            liselect[i].remove();
            users.splice(i,1)
            }
        }
}