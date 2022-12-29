//자바스크립트는 문자형은 배열로 다룸
//인덱스 번호 0번부터시작해서 차례대로 번호가 붙는다. 0,1,2...
let str=[]; //배열선언 || ex)수납장 칸막이
str='안녕하세요';
document.write(`<span style="font-size:20px; color:red;">${str}</span>`);
document.write("<br>",str[0]);
document.write("<br>",str[1]);
document.write("<br>",str[2]);
document.write("<br>",str[3]);
document.write("<br>",str[4]);
document.write("<br>",str[0]+str[1]+str[4]);
document.write("<br>",str[0]+str[1]+str[str.length-1]+'<hr>');
//배열의 총길이
document.write(str.length)
console.log(str);
/* 2-배열의 생성 */
const arr=["영","우","야","그","만","자"];
document.write("<br>",arr);
//arr[2]='우';
console.log(arr);

const arr1=[273,'stirng',true,function(){},{},[273,106]];
console.log(arr1);
document.write("<br>",arr1);
const arr2=[,,,];
arr2[1]="망";
console.log(arr2);

/* 3-배열생성 */
const arr3= new Array(1,2,3);
console.log(arr3.length);


const arr4=new Array(3);
console.log(arr4);

const fruits=['배','사과','키위','바나나']
fruits[4]="소세지";
//화면에 fruits의 총길이를 출력하세요
document.write("<br>","fruits.length:",fruits.length);
document.write("<br>",fruits[1]);
document.write("<br>",fruits[3]);
document.write("<br>",fruits[4]);
