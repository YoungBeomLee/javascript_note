/*
    - 함수는 기능,할 일 동작
    선언부
    function 함수이름 (//매개변수 parameter)
    { //실행문}

    *   실행문
        함수이름(argument)

*/

function h2(){
    //안녕하세요 400번 출력
    for(var i=1;i<401;i++){
        document.write(`<h2>안녕하세요${i}</h2>`)
        
    }
}
h3("hi","회원님");
function h3(a,b){
    for(var i=1;i<4;i++){
        document.write(`<h3>${a}</h3>`)
        document.write(`<h3>${b}</h3>`)
        
    }
}