const band ={
    bandName :" led zeplin",
    famousSong: "stairway to heaven",
    year:1912,
};
// creating variables from object
// const{bandName , famousSong}=band;
// console.log(bandName);
// console.log(famousSong);



// creating variable with some diffrent name
const {year: yearofbirth,bandName:famouslanguage, ...restprops}=band;//the restprops  will contain all the remain value that not used to create variable  by the help of spread operator(...)
console.log(yearofbirth,famouslanguage);
console.log(restprops);
