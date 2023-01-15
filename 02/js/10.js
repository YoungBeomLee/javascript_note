/*switch 
 조건 case:
*/

/*let day="월";
day="목"
document.write(day+"요일에는")
switch(day){
    case "월":document.write("오전 10시 수업시작") ;break;
    case "화":document.write("<br>오후 2시 수업시작"); break;
    case "수":document.write("<br>오후 4시 수업시작"); break;
    case "목":document.write("<br>오후 10시 수업시작"); break;
    case "금":document.write("<br>오후 11시 수업시작"); break;
    default:document.write("월요일에서 금요일까지만 입력하세요")
}*/

/* 사용자로부터 숫자를 입력받아 짝수인지 홀수인지 숫자가 아닌지를 출력하시오.*/

/*let user_num=Number(prompt("숫자를 입력하시오.","0"));
document.write(user_num,"<br>");
switch(user_num%2){
    case 0:alert("짝수입니다."); 
    break;
    case 1:alert("홀수입니다."); 
    break;
    default: alert("숫자가 아닙니다");
     
}

if(user_num%2==1){
    document.write("홀수입니다.");
}
else if(user_num%2==0){
    document.write("짝수입니다");
}
else{
    document.write("숫자가 아닙니다.");
}*/

/*const user_num1=Number(prompt("숫자1를 입력하시오.","0"));
const user_num2=Number(prompt("숫자2를 입력하시오.","0"));

if(user_num1>user_num2){
    document.write("num1가 큽니다");
}
else if(user_num1<user_num2){
    document.write("num2가 큽니다.");
}
else if(user_num1==user_num2){
    document.write("두 수가 같습니다.");
}
else{
    document.write("숫자가 아닙니다.");
}*/

/***
 * 3의 배수 확인
 */
let userNum=prompt("숫자를 입력하세요");
//1. 3의 배수인지를 확인하여 결과를 alert로 출력
//2. 사용자가 아무것도 입력하지 않은 경우 입력이 취소되었습니다 출력
/*if(userNum !==null){//사용자가 입력을 안한경우
    if(userNum%3==0){
    alert("3의 배수입니다.")
    }
    else{
    alert("3의 배수가 아닙니다.");
    }
}
else{
    alert("입력이 취소되었습니다.");
}
console.log(userNum);*/

if(userNum !==null){//사용자가 입력을 안한경우
    (userNum%3 === 0)? alert("3의 배수입니다."):alert("3의 배수가아닙니다.");
}
else{
    alert("입력이 취소되었습니다.");
}
