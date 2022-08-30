const container = document.getElementById("container");
const log = document.getElementById("log");
const numOfBoxes = 2000
for (let i = 0; i < numOfBoxes; i++) {
    const newItem = document.createElement("div");
    newItem.setAttribute("class", "box");
    newItem.setAttribute("id", `${i}`);


    newItem.onmouseenter = function () {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        newItem.style.backgroundColor =  "#" + randomColor;
        isSameColor() ? (log.style.display = "block") : (log.style.display = "none");
    };
    container.appendChild(newItem);
}

const isSameColor = function () {
    let flag = true;
    for (let i = 0; i < numOfBoxes; i++) {
        if (
            document.getElementById("0").style.backgroundColor !==
            document.getElementById(`${i}`).style.backgroundColor
        ) {
            return false;
        }
    }
    return true;
};