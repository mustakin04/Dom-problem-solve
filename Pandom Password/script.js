let mybutton=document.querySelector("#input");
let myul=document.querySelector(".ul")
let password_generator= ()=>{
    let calect=mybutton.value;
    let p='';
    let char_number="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:',.<>?/~`"
    for(let i=0; i<calect; i++){
        let result=Math.round(Math.random()*char_number.length);
        // myul.innerHTML=char_number[result];
        // console.log(char_number[result])
         p+=char_number.charAt(result);


    }
    myul.innerHTML="Create Password:" + p;
}