$(function () {
  const visual = $("#brand_visual>ul>li");
  visual.css("background-color", "yellow");
  const button = $("#brand_visual>ul>li");
  let current = 0; // 현재
  let id; //setIntervalId
  const speed = 3000;
  //console.log(visual,button);

  //버튼클릭함수
  button.click(function () {});
  //시간마다실행
  timer();
  function timer() {
    setInterval(function () {
      let next = current + 1;

      if (next == visual.length - 1) {//인덱스번호가 2이면 next를 0으로 해라.
        next = 0;
      }
      move(next);
      // console.log(current++);
    }, speed);
  }
  //이동시키는 함수
  function move(next) {
    console.log("next" + next);
    let cu = visual.eq(current);
    let ne = visual.eq(next);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.stop().animate({ left: "0%" });
  }
}); //jQuery

/*
document.addEventListener("DOMContentLoaded", function () {
	const visual = document.querySelectorAll("#brand_visual>ul>li");//자바스크립트는 html요소를 전달받을때 이거 써야함.
	visual.style.backgroundColor = "white";
});
*/
