const 테스트=function(콜백함수){
    for(let i=0;i<5;i++){
        콜백함수(i)
    }
}
const 함수=function(콜백함수_매개변수){
    var num=콜백함수_매개변수+1;
    document.write(`<h1>${num}번째 안녕하세요</h1>`)
}
테스트(함수);