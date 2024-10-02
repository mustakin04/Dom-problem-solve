let plases=document.querySelector("#place");
let mybuttons=document.querySelector("#mybutton");
let news=document.querySelector("#new");
console.log(mybuttons);
console.log(plases);
console.log(news);
mybuttons.addEventListener("click",function(){
    let result=plases.value;
    console.log(result);
    let p=document.createElement("h5");
    // let text=document.createTextNode("My love is Tamim")
    // p.appendChild(text);
    // // news.appendChild(p);
    p.innerText=result;
    news.appendChild(p);
    plases.value='';

})