const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4")
console.log(heading4);
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(()=>{
//     heading1.innerHTML="<span>hello</span>changed";
//     heading1.style.color="violet";
//     setTimeout(()=>{
//         heading2.innerHTML="<span>hello</span>changed";
//         heading2.style.color="violet";
//     },1000); 
// },1000);
function changetext(element,text,color,time,onsucsess,onfailure){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color=color 
            if(onsucsess){
                onsucsess();
            }
        }else{
            if(onfailure){
                onfailure();
            }
        }
       
       
    }, time);
}

changetext(heading1,"one","blue",1000,()=>{
    changetext(heading2,"two","cyan",2000,()=>{
        changetext(heading3,"three","purple",3000,()=>{
            changetext(heading4,"four","silver",4000,()=>{
                changetext(heading5,"five","magenta",5000,()=>{
                    changetext(heading6,"six","red",6000,()=>{
                        changetext(heading7,"seven","pink",7000,()=>{
                            console.log("success")},()=>{console.log("failure")})
                        console.log("sucess")},()=>{console.log("failure")})
                    console.log("success")},()=>{console.log("failure")})
                console.log("success")},()=>{console.log("failure")})
            console.log("successs")},()=>{console.log("failure occured")})
        console.log("successfully code runed")},()=>{console.log("heading2 doesnot exist")})
    console.log("successfully finished")},()=>{console.log("failure occured")
}); 


 
