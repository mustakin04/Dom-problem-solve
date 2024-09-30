let acc=document.getElementsByClassName("accordion");
let accary=Array.from(acc);
console.log(accary);
accary.map((item)=>{
    console.log(item);
    item.addEventListener("click",function(){
     let panel=item.nextElementSibling;
     console.log(panel);
     if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    })
})
