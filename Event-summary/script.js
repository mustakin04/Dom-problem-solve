let one = document.getElementById("one");
let accy = document.getElementById("two");
let three = document.getElementById("three");
console.log(accy)

accy.addEventListener('click', function() {
 let result=one.value;
 console.log(result);
 three.innerText=result;
 one.value='';
});