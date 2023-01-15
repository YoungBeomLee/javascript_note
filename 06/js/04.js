/*let list1=document.querySelectorAll("#list1>li");
list1.forEach(function(el,idx){
    console.log(el,idx);
    //classList.add()
    el.textContent="aaa"+idx;
    el.classList.add("a"+idx);
    
   
})*/  //자바스크립트
//console.log("나는?",el,idx);

$(function(){//문서를 다읽고 실행
    let list1=$("#list1>li");
    console.log(list1);
list1.each(function(idx,el){
    console.log(idx,el);
    //classList.add()
    $(el).addClass("a"+idx).text("aaa"+idx); //$(el) each문에서 제이쿼리가 알아들을수 있는 객체로 변환해줘야한다.
  

    
   
})
})