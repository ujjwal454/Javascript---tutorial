const newfile = document.getElementById("hello");
console.log(newfile.classList);
newfile.classList.add("bg-dark");
newfile.classList.toggle("bg-dark"); // it will remove the class if already exist and if there not that class present it add that
