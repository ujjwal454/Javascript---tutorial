const link  = document.querySelector(".nav-items");
//  we can get the value of attribute by using the value of get attribute 
console.log(link.getAttribute("href").slice(1));

//  there is another attribute  called set attribute 

link.setAttribute("href" ,"https//www.google.com")

