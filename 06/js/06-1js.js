//원뎁스 a를 변수 gnbLiA 할당
let gnbLiA = $(".gnb>li>a");//border,padding
let sub = $(".sub");
let aH = $(".sub>li>a").outerHeight()-4;//높이 가변적 outerHeight
let check=false;
console.log(aH);


gnbLiA.click(function () {
  //클릭된 요소를 변수 tg에 저장
  let tg=$(this);
  //tg 다음요소의 하위에서 a 태그의 길이를 변수 subA에 저장
  let subA=tg.next().find("a").length
  //.sub 의 높이 0
  $('.sub').css("height", "0px");
  //tg 다음요소의 높이를 변수 aH*subA 로 변경
  tg.next().css("height", aH * subA + "px");

});





/*gnbLiA.click(function () { //javascript에서 .hasClass(“on”) 은 classList.contains(‘on’) 으로 작성한다
	if (!$(this).next().hasClass('on')) {
		$(".sub").removeClass("on");
		$(this).next().addClass("on");
	} else {
		$(this).next().removeClass("on");	}


});*/