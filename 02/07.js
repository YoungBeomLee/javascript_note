/* 삼항연산자:항이 3개 
조건?참일때:거짓일때
*/

let your="어렵네요";
let study=(your=="어렵네요")?"천재이시군요":"복습하세요";
document.write(`자바스크립트가 ${your}<h1>${study}</h1>`)

var trans_cost=3000;
var food_cost=7000;
var drink_cost=2000;
console.log(trans_cost,food_cost,drink_cost);
var total_cost=trans_cost+food_cost+drink_cost;
//console.log(total_cost);
//12000>10000
var result=(total_cost>10000)?total_cost-10000+"원 초과 "+"-_-":+"참잘했어요.";
document.write(`${result}`);