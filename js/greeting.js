const textbox = document.querySelector(".js-greeting");
const greeting = document.querySelector(".input");

const USER = "user";

function displayUser(){
    const user = localStorage.getItem(USER);
    textbox.remove();
    greeting.innerHTML = `Hi, ${user}`;
}

function setUser(){
    console.log("here");
    console.log(textbox.value);
    localStorage.setItem(USER, );
}

function getUser(){
    console.log("getUser");
    textbox.addEventListener("submit", setUser);
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
    // const input = textbox.innerHTML;
    //localStorage.setItem("user", "Clare");
    setText();
}
init();