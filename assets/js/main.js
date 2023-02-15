let seeMore1 = document.getElementById("more1");
let seeMore2 = document.getElementById("more2");
let seeMore3 = document.getElementById("more3");
let seeMore4 = document.getElementById("more4");
let btn1 = document.querySelector("seeBtn1");
let btn2 = document.querySelector("seeBtn2");
let btn3 = document.querySelector("seeBtn3");
let btn4 = document.querySelector("seeBtn4");
let allBtn = [btn1 , btn2 , btn3 ,btn4];


 function displayService1(){
     seeMore1.classList.toggle("d-none")
}
function displayService2(){
    seeMore2.classList.toggle("d-none")
}
function displayService3(){
    seeMore3.classList.toggle("d-none")
}
function displayService4(){
    seeMore4.classList.toggle("d-none")
}


