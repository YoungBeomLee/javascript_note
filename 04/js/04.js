//function mango(){}
/* 익명함수, 이름없는 함수 */
const mango = function () {
  document.write("응<br>");
  document.write("응응<br>");
  document.write("응응응<br>");
};
console.log(typeof mango);
console.log(mango, document.write);
mango();

//매개변수 있는거

const sum = function (a, b) {
  let c = a + b;
  document.write(`<h1>${c}</h1>`);
};
sum(10, 11);

/* 즉시실행 함수 */


    (function () {
  document.write(`<h1>매개변수없는 즉시실행함수</h1>`);
}());

(function (x, y) {
    document.write(x + y+"<br>");
  }
)(10, 20);

/* 화살표함수,람다식 */
/* 익명함수를 줄여서 씀 */
//const hi = function () {
//	return "안녕하세요";
//};

const hi =()=> "안녕하세요";
 
alert(hi());

/*
인자가 있는 화살표함수
let sum1=(a,b)=>{
    return a+b

}
*/

let sum1=(a,b)=>{
    return a+b

}
document.write("두수의합:"+sum1(10,20));