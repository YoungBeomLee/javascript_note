var x=10; //변수 x를 초기화한다.
var y=20;
function display(){
    var y=10;
    console.log("x is"+ x);
    console.log("y is"+ y);
    
}
display();
console.log(y);
Exam1();
Exam();//B
var Exam1=function(){
    alert("A");
}
function Exam(){//명명함수는 호이스팅이 된다. 끌어올림현상- 함수선언 이전에 호출해도 실행된다.
    alert("B");
}
Exam();//A

/* var 과 선언적 함수는 호이스팅 발생 es6 const, let
익명함수는 호이스팅 없음*/