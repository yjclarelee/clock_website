const form = document.querySelector("#greeting");
const textbox = document.querySelector(".js-greeting");
const greeting = document.querySelector(".input");

const USER = "user";

function displayUser(){
    textbox.value="";
    // when input, remove the textbox
    // there might be a better way
    textbox.remove();
    const user = localStorage.getItem(USER);
    greeting.innerHTML = `Hi, ${user}`;
}

function setUser(event){
    //event.preventDefault();
    const user = textbox.value;
    localStorage.setItem(USER, user);
    displayUser();
}

function getUser(){
    form.addEventListener("submit", setUser);
}

function setText(){
    const user = localStorage.getItem(USER);
    if(user){
        displayUser();
    }
    else{
        getUser();
    }
}

function init(){
    setText();
}

init();