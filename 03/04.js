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
/* 역삼각형 별찍기
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

//1~10까지 수에서 짝수끼리 더해서 출력하세요.
var num=Number(prompt("숫자를 넣으시오.","0"));
var sum=0;
for(let i=0;i<=num;i++){
   
    if(i%2==0){
        sum=sum+i;
    }
    
}
document.write("<br>",sum);