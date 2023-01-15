addEventListener ("mousemove",function(e){
    let m2=document.querySelector("#m2");
    let m3=document.querySelector("#m3");
    
    const pointer={x:e.clientX,y:e.clientY}
    m2.style.top=pointer.x+"px";
    m2.style.left=pointer.y+"px";
    m3.style.top=pointer.x+"px";
    m3.style.left=pointer.y+"px";
    if(pointer.x,pointer.y==25,25){
       m3.style.animationPlayState="running";
    }
 })