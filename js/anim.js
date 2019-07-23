"use strict";

let redCube = document.querySelector("#animate");

document.title = "Animation";



let position = 0;
let anim = setInterval(translateAnimation, 50);

function translateAnimation(){
    if(position >= 350){
        clearInterval(anim);
    } else {
        redCube.style.left = position + "px";
        redCube.style.top = position + "px";
    
        position += 100;
    }

}
