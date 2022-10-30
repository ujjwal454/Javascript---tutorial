// break
for(let i = 0;i<=9;i++){
    if(i==5){ // operation terminated at i =5 due to break
        break
    }
    console.log(i);
}
console.log("new operation from below")
// continue
for(let i = 0;i<=9;i++){
    if(i==5){ // got skipped because of continue
        continue
    }
    console.log(i);
}