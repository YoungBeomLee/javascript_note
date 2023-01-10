//원뎁스 a를 변수 gnbLiA 할당
let gnbLiA = $(".gnb>li>a");
let sub = $(".sub");
let aH = $(".sub>li>a").outerHeight()-4;//높이 가변적 outerHeight
let check=false;
console.log(aH);
gnbLiA.click(function () {
  sub.removeClass("on");
  if(check == false){
    sub.css("height","0px");
    $(this).next().css("height",aH * 4+"px");
  }
  $(this).next().addClass("on").css("height", aH * 4  + "px");
  //토글로 만들기
  //if는 (ture)
  function toggle() {
    if ($(this).next().hasClass("on") != ture) {
      sub.removeClass("on");
      $(this).next().addClass("on");
    } else {
      $(this).next().removeClass("on");
    }
  }
});
