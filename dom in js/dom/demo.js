const btn = document.querySelector("button");
const body = document.body;
const text = document.querySelector(".changeme");
function randomcolorganrator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomcolor = `rgb(${red},${green},${blue})`;
    return randomcolor;
}
btn.addEventListener("click",()=>{
    const random = randomcolorganrator();
    body.style.backgroundColor=random;
    text.textContent=random;
})

