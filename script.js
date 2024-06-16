let box = document.querySelector(".box1");
let button = document.querySelector(".btn");
button.addEventListener("click",()=>{
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256); 
    let color = "rgb(" + red + "," + green + "," + blue + ")"; 
    box.style.backgroundColor = color;

})

