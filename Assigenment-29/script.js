let myplus = document.querySelector("#plus");
let mynumber = document.querySelector("#number");
let myminus = document.querySelector("#minus");
console.log(myplus);
console.log(mynumber);
console.log(myminus);
let count = 0;
myplus.addEventListener("click", function () {
    count = count + 1;
    mynumber.innerText = count;
    if (count >= 10) {
        myplus.setAttribute("disabled", true);
    }
    else {
        myplus.removeAttribute("disabled", false);
    }
});

myminus.addEventListener("click", function () {
    count = count - 1;
    mynumber.innerText = count;
    if (count <= 0) {
        myminus.setAttribute("disabled", true);
    }
    else {
        myplus.removeAttribute("disabled", false);
    }
});
