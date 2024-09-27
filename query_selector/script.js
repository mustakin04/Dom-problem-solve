// console.log(document.body);
// let ok=document.getElementsByTagName('h1');
// console.log(ok);
// let food=document.getElementsByTagName('li');
// console.log(food);
// for(const view of food)
// {
//     console.log(view.innerText);
// }
let ones=document.getElementById('one');
console.log(ones);

ones.onclick=myfunstion;
function myfunstion(){
    ones.innerText="done";
}