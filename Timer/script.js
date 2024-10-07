let myone=document.querySelectorAll(".one");
let myoneary=Array.from(myone);
myoneary.map((item)=>{
    let count=0;
    function myfunction(){
        count++;
        item.innerHTML=count;
        if(count==item.dataset.number)
        {
            clearInterval(stop);
        }
        let percounterSpeed = (item.dataset.speed / item.dataset.number) * 10;
        percounterSpeed = parseInt(percounterSpeed)
        console.log(percounterSpeed);
        item.dataset.speed = percounterSpeed;

    }
    myfunction();
   let stop= setInterval(myfunction,item.dataset.speed);
})