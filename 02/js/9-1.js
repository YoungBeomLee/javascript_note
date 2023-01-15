/*var score=prompt("시험점수를 입력하세요","0");
console.log(score>=70);
if(score>=70){
    document.write("합격");
}*/

/* if else if*/

const date = new Date();
const hour = date.getHours(); //0~24
if (hour < 11) {
  //0~10
  alert("아침먹고 학교가야지");
} else if (hour < 15) {
  //11~24
  alert("점심먹고 태권도가야지");
}else{//15~24
  alert("저녁먹고 자야지");
}
