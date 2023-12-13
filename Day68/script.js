console.log("gagan")

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "red";

document.getElementById("greenbox").style.backgroundColor="green";

document.querySelector(".box").style.backgroundColor="yellow";

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "orange";

});