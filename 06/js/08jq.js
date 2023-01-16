const section = $("section");
const text = $(".txt");
const progressBar = $(".bar");
const windowHeight = $(window).height();
let scrollTop;
//퍼센트 계싼
function getPercent(sct) {
  console.log(sct);
  let scrollHeight = section.height();
  let scrollRealHeight = scrollHeight - windowHeight;
  let scrollPercent = (sct / scrollRealHeight) * 100; // 부분/전체*100
  let textPercent = Math.floor((sct / scrollRealHeight) * 100); // 부분/전체*100
  if (scrollPercent >= 100) {
    scrollPercent = 100;
  }
  render(scrollPercent, textPercent); //argument 인자 , 인수
}

//화면에 출력
function render(scp, tp) {
  //parameter 매개변수
  text.text(tp + "%");
  progressBar.css("width", scp + "%");
}

//스크롤 양 얻기
$(window).scroll(function () {
  scrollTop = $(this).scrollTop(); //윈도우의 스크롤 양
  getPercent(scrollTop);
  /*
	

	//화면에 출력하는 함수

	*/
});
