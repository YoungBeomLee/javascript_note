let total ="";//전역변수 total
let sum=(a,b)=>{
  let total= a+b; //새 그릇을 준비
  //let total; //같은지역에서 동명이인 안됨
  total = a+b; // 원래 그릇에 재할당
  
};
sum(10,20);
document.write("두수의 합"+total);
/* return문의 역할1 */
//값을 함수 밖으로
let sum1 =  (a,b)=>{
    return a+b;
};
document.write("<hr>두수의 합" + sum1(10,20));
(function(){
    console.log('hello')
})()//호출은 바로뒤에
