let text=document.querySelector(".txt");//퍼센트 게이지 값을 보여주는 엘리먼트
let section=document.querySelector("section");
let windowHeight=window.innerHeight;
let scrollTop;
let progressBar=document.querySelector(".progress>span.bar")//퍼센트 게이지 엘리먼트
window.addEventListener("scroll", function(){
    scrollTop=document.documentElement.scrollTop || window.scrollY || window.pageYOffset;
    var scrollHeight = section.clientHeight; //패딩을 포함한 높이
    var scrollRealHeight = scrollHeight - windowHeight; //스크롤할 실제 거리
    var scrollPercent = Math.floor((scrollTop / scrollRealHeight) * 100); //백분율
    if(scrollPercent >=100){
        scrollPercent=100;
    }
   
    
    
    text.textContent = scrollPercent + "%"; //텍스트 값 업데이트 
    progressBar.style.width = scrollPercent + "%"; //게이지 값 업데이트
    document.querySelector(".box").innerHTML="<p>"+scrollTop;
    

    

})