// 데이터형 활용
//문자자료형 string
//let x;
//let y;
let x,y;
x=7+5;
y="7"+5;
//document.write(x+" "+y)
document.write(x+"<br>")//12
document.write(y+"<br>")//글자7+글자5
document.write("y")//글자y
/* 자바스크립트에서 표현식을 작성할 때 문자는 따옴표로 묶고 변수나 숫자는 안묶음. 
자바스크립트에서는 태그도 문자열*/

//메서드 임자있는 함수, 객체에 저장되어있는 함수를 메서드라고 한다.
const wakeup="밥먹고 학원가야지";
//대상.함수()->메서드->임자있는 함수
document.write('<h1 style="color:green">',wakeup,'</h1>');//,는 +연산자와 같다.

//es6에 추가된 템플릿 리터럴
document.write(`<h1 style="color:green">${wakeup}</h1>`);
