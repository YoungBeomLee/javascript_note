/*for each:배열의 요소를 콜백함수를 이용하여 반복순환. */
let arr=[277,56,7589,233,123,66]
arr.forEach(function(value,index,array){
    //console.log(value,index,array);
})
/* filter: 원하는 값만 */

let words=['스폰지밥','뚱이','다람이'];
const result=words.filter(function(value,index,array){
    return value.length >=3;
})
//alert(result);

/* map : 배열을 새 값과 연결해서 새 배열로 저장*/
words=words.map(function(value,index){
    return value+"❤💚💛"
})
document.write(words[0]);
/* .filter를 사용하여 arr 배열에서 짝수만 출력 */

const result1=arr.filter(function(value,index,array){
   console.log(value,index,array);
    if(value%2==0){
    return value;
   }
})
document.write("<br>",result1);