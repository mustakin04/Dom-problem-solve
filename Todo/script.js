let myinput =document.querySelector(".input");
let mybutton= document.querySelector(".button");
let myul=document.querySelector(".ul");
mybutton.addEventListener("click",function(){
    let result=myinput.value;
    let li=document.createElement("li");
    li.innerHTML=result;
    myul.appendChild(li); 
    let myspan=document.createElement("span");
    console.log(myspan);
    myspan.innerHTML=" ";
    li.appendChild(myspan);
    let deleted=document.createElement("button");
    deleted.innerText="Delete";
    myul.appendChild(deleted);
    deleted.classList.toggle("one");
    console.log(deleted);
    myinput.value='';
});

myul.addEventListener("click",function(m){
    console.log(m.target.tagName);
    if(m.target.tagName=="LI"){
        alert("place click delete button")
    }
    else{
        if(m.target.tagName== "BUTTON"){
            m.target.parentElement.remove();
        }
    }
})
