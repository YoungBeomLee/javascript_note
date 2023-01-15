var kor=Number(prompt("국어점수는?","0"));
var math=Number(prompt("수학점수는?","0"));
var eng=Number(prompt("영어점수는?","0"));

var avg=kor+math+eng/3;
var bool= avg>=70 && kor>=60 && math>=60 && eng>=60;

document.write(kor,"<br>",math,"<br>",eng,"<br>",avg);
document.write(`<h1>${bool}</h1>`);