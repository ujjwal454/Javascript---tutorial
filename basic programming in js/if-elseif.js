let temp = prompt("enter the temp");
if(temp<0){
    console.log("its extremly cold outside");
}else if(temp <15){
    console.log("its too cold outside");
}else if(temp>20){
    console.log("wheather is too good");
}else if(temp>25){
    console.log("its getting hotter can turn on the fans")
}else if (temp>30){
    console.log("its hot !!!")
}else if (temp>45){
    console.log("turn on the ac")
}else{
    console.log("its extremly cold")
}
