<<<<<<< HEAD
const section = $("section");
const text = $(".txt");
const progressBar = $(".bar");
const windowHeight = $(window).height();
let scrollTop;
//퍼센트 계싼
function getPercent(sct){
	console.log(sct);
	let scrollHeight = section.height();
	let scrollRealHeight = scrollHeight - windowHeight; 
	let scrollPercent = ((sct / scrollRealHeight) * 100);// 부분/전체*100
	let textPercent = Math.floor((sct / scrollRealHeight) * 100);// 부분/전체*100
	if (scrollPercent >= 100) {
		scrollPercent = 100;
	}
	render(scrollPercent,textPercent); //argument 인자 , 인수
}

//화면에 출력
function render(scp,tp){ //parameter 매개변수
	text.text(tp + "%");
	progressBar.css('width' ,scp + "%");
}




//스크롤 양 얻기
$(window).scroll(function () {
	scrollTop = $(this).scrollTop();//윈도우의 스크롤 양
	getPercent(scrollTop)
	/*
	

	//화면에 출력하는 함수

	*/
});
=======
let text=$(".txt");//퍼센트 게이지 값을 보여주는 엘리먼트
let section=$("section")
let progressBar=$(".bar")//퍼센트 게이지 엘리먼트
let windowHeight=$(window).height();
let scrollTop;

$(window).scroll (function(){
    scrollTop=$(this).scrollTop();
    
    var scrollHeight = section.height(); //패딩을 포함한 높이
    var scrollRealHeight = scrollHeight - windowHeight; //스크롤할 실제 거리
    var scrollPercent = Math.floor((scrollTop / scrollRealHeight) * 100); //백분율
    if(scrollPercent >=100){
        scrollPercent=100;
    }
   
    
    
    text.text(scrollPercent + "%"); //텍스트 값 업데이트 
    progressBar.css({"width":scrollPercent + "%","background-color":"green ","opacity":"0.7" }) //게이지 값 업데이트
    $(".box").html("<p>"+scrollTop);
    


    

})
>>>>>>> 8a5bcadc449620bba744336dec1f3225a6df6040
