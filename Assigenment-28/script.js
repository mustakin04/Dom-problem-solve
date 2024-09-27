function openCity(evt,cityName){
    const tabcontent=document.querySelectorAll('.tabcontent');
    const makeArray=Array.from(tabcontent);
    makeArray.map((item)=>{
        item.style.display='none';
    })
     
    const tablink=document.querySelectorAll('tablinks');
    const linksArray=Array.from(tablink);
    linksArray.map((item)=>{
        tablink.className=tablink.className.replace('active','');
    })
    document.getElementById(cityName).style.display='block';
    evt.currentTarget.className+='';
    }