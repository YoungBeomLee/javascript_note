/* 산술연산자 +,-,*,/,% */

const x=75;
const y=87;
const add=x+y;
const avg=(x+y)/2;
document.write("국어점수:"+x+"<br>");
document.write("수학점수:"+y+"<br>");
document.write("총점:"+add+"<br>");
document.write("평균:"+avg+"<br>");
/* 템플릿 리터럴 */
document.write(`국어점수: ${x} 수학점수:${y*2/2}`);
document.write("<br>"+`국어점수:${x}<br>수학점수:${y}<br>총점:${add}<br>평균:${avg}`)