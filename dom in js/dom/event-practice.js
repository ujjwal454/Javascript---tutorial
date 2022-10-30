const allbtns = document.querySelectorAll("button");
console.log(allbtns);
allbtns.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor="yellow";
    })
})