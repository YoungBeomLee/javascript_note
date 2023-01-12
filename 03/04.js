//var i=0;
//for(초기값;조건식;증감식;){
//
//}

/*for(let i=0; i<5;i++){
    console.log(i);
    document.write(`<br>${i}번째 반복입니다.<br>`);
}
document.write(`<br>끝<br>`)*/

/*for(let j=6; j>=1; j--){
    document.write(`<h${j}>h${j} 재미있는 자바스크립트</h${j}>`); 리터럴은 익스에서 호환안됨.
}
*/

/*var i=0;
timer=setInterval(fo,1000);
function fo(){
 i++;
 document.write("<h"+i+">"+"h"+i+"재미있는 자바스크립트"+"</h"+i+">");
if(i>=6){
    i=0;
}

}
*/

/*익스플로러 전용 
for(let i=6; i>=1; i--){
    document.write("<h"+i+">"+"h"+i+"재미있는 자바스크립트"+"</h"+i+">");
}

*/
//구구단5단
/*let i=5;

for(let j=1; j<=9; j++){

  let result=i+"x"+j+"="+ i*j+"<br>";

  document.write(result)
}
*/

/*역삼각형 별찍기
document.write("<br>")
for(let i=1; i<6;i++){
    
    for(let j=5; j>0;j--){
       if(i<j){
        document.write("&nbsp");
        
        }
      else if(i>=j){
        document.write("*");
        }
    
}
   
    document.write("<br>");
    
}

*/
/*삼각형 별찍기
for(let i=1; i<6; i++){
    for(let j=1;j<=i;j++){
        document.write("*");
    }
    document.write("<br>");
}

*/

/* 트리나무 별찍기
document.write("<br>");
for (let i = 0; i < 5; i++) {
  for (let j = 4; j > i; j--) {
    // space
    document.write("&nbsp");
  }
  for (let j = 0; j <= i; j++) {
    document.write("*");
  }
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
}
*/
 
 
/* let output='';//output 유효 범위(미국말:scope)가 있다.
for(let i=1; i<10; i++){
    
    for(let j=0; j<i; j++){
        output+="*";
    }
    output=output+"<br>"
}
document.write("<br>"+output);
*/

/*//1~10까지 수에서 짝수끼리 더해서 출력하세요.
var num = 10;
var sum = 0;
for (let i = 0; i <= num; i++) {
  if (i % 2 === 1) {
    continue; //true면 통과(홀수면 통과) 홀수면 통과(생략)니까 짝수만 나옴.
  }
  console.log(i);
  sum = sum + i;

  document.write("<br>", sum);
}
*/