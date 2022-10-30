function func(){
    const func2 = ()=>{
        console.log("from func")
    }
    const addTwoNum = (a,b)=>{
        return a+b
    }
    console.log("i m the main")
    func2();
    console.log(addTwoNum(21,21));
}
func();