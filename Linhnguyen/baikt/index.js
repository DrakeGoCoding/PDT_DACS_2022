const fname = document.querySelector(".from input");
const addstd = document.querySelector(".from button");
const diemso = document.querySelector('.from input:nth-child(4)');
const tinhdiemhs = document.querySelector('.tinhdiem');
const result = document.querySelector(".result");
let arrstudentlist={};
let arrstudent=[];

addstd.addEventListener("click", () => {
    arrstudentlist.fullName=fname.value;
    
  });