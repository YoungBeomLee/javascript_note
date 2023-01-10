// textzone 에 #textzone을 할당하세요
const textZone = document.querySelector("#textZone");
//#btn1 클릭시 textzone의 글씨색을 변경

/*
    1.함수를 실행할 요소를 선택
    상수 btn1에 #btn1을 할당
    2.함수 실행(=호출)시점과 수행동작{실행문}을 확인
*/
const btn1 = document.querySelector("#btn1");
btn1.onclick = function () {
  textZone.style.color = "blue";
};
const btn2 = document.querySelector("#btn2");
btn2.onmouseover = function () {
  textZone.style.backgroundColor = "yellow";
};
//btn2 포커스 발생시 textzone 배경색 노랑으로
btn2.onfocus = function () {
  textZone.style.backgroundColor = "blue";
};
//btn3에 이벤트 여러개 등록
const btn3 = document.querySelector("#btn3");
function textZone4() {
  textZone.style.color = "green";
  textZone.style.fontWeight = "bold";
}
/*btn3.onmouseover=textZone4;
btn3.onfocus=textZone4;
btn3.onclick=function(){alert("click")}
btn3.onclick=function(){
    textZone.style.marginLeft="80px";
}
*/
btn3.addEventListener("click", function () {
  alert("click");
});
btn3.addEventListener("click", function () {
  textZone.style.marginLeft = "80px";
});
const listWrap = document.querySelector("#listWrap");
const list1 = document.querySelector(".list1");
listWrap.addEventListener("mouseenter", function () {
  list1.style.display = "block";
});
listWrap.addEventListener("mouseleave", function () {
  list1.style.display = "none";
});
let hover = document.querySelector(".hover");

hover.addEventListener("mouseenter",()=>{
    console.log(this)//이벤트를 화살표 함수로 작성시 this는 객체 자신이 아닌 최상위 윈도우를 가르킴.
    this.style.color = "aqua"; //this는 함수를 불러낸 대상.
});
hover.addEventListener("mouseleave", function () {
  this.style.color = "red";
});


