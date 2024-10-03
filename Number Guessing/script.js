let box01 = document.querySelector(".box01");
let input01 = document.querySelector(".box01 input");
let error01 = document.querySelector(".box01 p");
let button01 = document.querySelector(".box01 button");

let box02 = document.querySelector(".box02");
let heading02 = document.querySelector(".box02 h1");
let input02 = document.querySelector(".box02 input");
let error02 = document.querySelector(".box02 p");
let button02 = document.querySelector(".box02 button");

let box03 = document.querySelector(".box03");
let heading03 = document.querySelector(".box03 h1");
let input03 = document.querySelector(".box03 input");
let error03 = document.querySelector(".box03 p");
let button03 = document.querySelector(".box03 button");

let box04 = document.querySelector(".box04");
let heading04 = document.querySelector(".box04 h1");
let chanceleft = document.querySelector(".box04 h3");
let input04 = document.querySelector(".box04 input");
let error04 = document.querySelector(".box04 p");
let button04 = document.querySelector(".box04 button");

let box05 = document.querySelector(".box05");
let heading05 = document.querySelector(".box05 h1");
let pro = document.querySelector(".box05 p");

let chance = 5;

button01.addEventListener("click", function () {
    if (input01.value === '') {
        error01.innerText = "Plase enter your name";
    }
    else {
        box01.style.display = "none";
        box02.style.display = "flex";
        heading02.innerText = input01.value;
    }
});
button02.addEventListener("click", function () {
    if (input02.value === '' || input02.value =="") {
        error02.innerHTML = "Plase enter your name";
    }
    else {
        if (input02.value >= 0 && input02.value <= 9) {
            box02.style.display = "none";
            box03.style.display = "flex";
        }
        else {
            error02.innerHTML = "plase enter your number between 0 t0 9";
        }
    }
});
button03.addEventListener("click", function () {
    if (input03.value === '' || input02.value =="") {
        error03.innerHTML = "Please enter your name";
    }
    else {
        box03.style.display = "none";
        box04.style.display = "flex";
        heading04.innerHTML = input03.value;
    }
});
button04.addEventListener("click", function () {
    if (input04.value === ''|| input02.value =="") {
        error04.innerText = "please enter your number between 0 to 9";
    }
    else {
        if (input02.value == input04.value) {
            box04.style.display = "none";
            box05.style.display = "flex";
            heading05.innerHTML = input03.value + " wins ";
        }
        else {
            chance--;
            chanceleft.innerHTML="chance left"+ chance;
            if (chance == 0) {
                box04.style.display = "none";
                box05.style.display = "flex";
                heading05.innerText = input01.value +" wins ";
                pro.innerText = "palyer " + input01.value + " number is " + input02.value;

            }


        }
    }
    input04.value='';
});
