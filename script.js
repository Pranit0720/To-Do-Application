const listContiner = document.getElementById("list-continer");
const inputBox = document.getElementById("input-box");

function addTask(){

    if(inputBox.value === ''){
        alert("Enter Some Data")
    }else{
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        listContiner.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();

}

listContiner.addEventListener("click",function(e){


    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }

});


function saveTask(){
    localStorage.setItem("data",listContiner.innerHTML);
}

function showTask(){
    listContiner.innerHTML=localStorage.getItem("data");
}

showTask();
