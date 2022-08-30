const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const ball = document.getElementById("ball");

up.onclick = function(){
    let moveDown = parseInt(ball.style.top) || 0;
    moveDown -= 15;
    ball.style.top = moveDown + "px";
}

right.onclick = function(){
    let moveLeft = parseInt(ball.style.left) || 0
    moveLeft += 15
    ball.style.left = moveLeft + "px";
}

down.onclick = function(){
    let moveUp = parseInt(ball.style.top) || 0
    moveUp += 15
    ball.style.top = moveUp + "px";
}

left.onclick = function(){
    let moveRight = parseInt(ball.style.left) || 0
    moveRight -= 15;
    ball.style.left = moveRight + "px"
}
