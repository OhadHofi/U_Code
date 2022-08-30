const addNewItem = function(){
    const newItem = document.createElement("li");
    newItem.innerHTML = "DONT LISTEN THEM! CLICK ME!";

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    newItem.style.color = "#" + randomColor;

    const list = document.getElementById("list");
    list.appendChild(newItem); 
}