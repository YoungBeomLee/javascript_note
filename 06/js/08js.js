//section 변수에 담기
const section = document.querySelector("section");
//변수에 담아야할것들
const text = document.querySelector(".txt");
const progressBar = document.querySelector(".bar");
//창높이
const windowHeight = window.innerHeight;
//스크롤양을 담을 변수
let scrollTop;
//진행율 계산 함수
function getPercent(sct){
	let scrollHeight = section.clientHeight;
	let scrollRealHeight = scrollHeight - windowHeight;
	/* 퍼센트로 바꾸기 (부분/전체)*100 */
	let scrollPercent =((sct / scrollRealHeight) * 100);
	let textPercent= Math.floor((sct / scrollRealHeight) * 100);
	if (scrollPercent >= 100) {
		scrollPercent = 100;
	}
	render(scrollPercent,textPercent)
}
//화면출력 함수
function render(scp,tp){
	text.textContent = tp + "%";
	progressBar.style.width = scp + "%";
}
//스크롤이벤트 함수
window.addEventListener("scroll", function () {
	scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
	/*퍼센트구하기 
    1. 화면높이 windowHeight
    2. 문서총높이 scrollHeight 변수로 선언후 ???.clientHeight //패딩을 포함한 높이
    3. scrollRealHeight= 2 - 1  
  */
	getPercent(scrollTop)
	

	
	
	
});
