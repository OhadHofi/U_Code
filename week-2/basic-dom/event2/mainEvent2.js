const box = document.getElementById("box");

// box.onmouseenter(this) = function(){
//     console.log("af");
//     const randomBackGroundColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomBackGroundColor;
//     this.style.backgroundColor = red;
// }

box.addEventListener('mouseenter', (e) => {
    box.style.border = '5px dotted orange';
  });

  box.addEventListener('mouseleave', (e) => {
    box.style.border = "none";
  });

  