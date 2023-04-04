 // if the numpad is locked

 document.addEventListener("keydown",
 function (key) {
     let messege = document.querySelector(".warning");

     if(key.getModifierState("NumLock")){
         messege.innerHTML="";
         console.log("numpad is UN-locked");
     }else{
         messege.innerHTML="numpad is locked please unlock it to check tere keys";
        
         console.log("numpad is locked");
     }
 })