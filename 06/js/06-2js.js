//1뎁스 A를 변수에 할당

let gnbLiA=document.querySelectorAll(".gnb>li>a");
//clientHeight 패딩을 포함한 높이.
const aH=document.querySelector(".sub>li>a").clientHeight;

for(let i=0; i<gnbLiA.length; i++){
    let item1=gnbLiA[i];
    item1.addEventListener('click',function(){
        let tg= this;
        let allSub = document.querySelectorAll(".sub");
        let tg_sub = tg.nextElementSibling;
        let tg_li=tg_sub.querySelectorAll("li");
        for(let j=0; j<allSub.length; j++){
            var item2 = allSub[j];
			item2.style.height = "0px";
			
            for(let k=0; k < tg_li.length; k++){
                tg_sub.style.height = aH * tg_li.length + "px";
            }
        }
        
    })
}