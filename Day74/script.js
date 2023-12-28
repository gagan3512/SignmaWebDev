let button = document.getElementById("btn");

// button.addEventListener("click", ()=>{
//     alert("I am clicked");
// })

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yaa clicked</b> Enjoy your click !!"
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by right click please ")
})

document.addEventListener("Keydown", (e)=>{
    console.log(e.key,e.keyCode);
})