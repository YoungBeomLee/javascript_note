const container=document.querySelector(".container")
const child=document.querySelector(".child")
const containerW=container.clientWidth;
console.log('container의 clinetWidth',containerW);

let childStyle=Number(window.getComputedStyle(child).getPropertyValue('padding-left').split('px',1)[0]);//split:px문자 기준으로 1개 잘라냄 0번째 요소 취득; 
/*getComputedStyle(html에서 가져옴):윈도우가 가지고있는 대상에서 get함
getPropertyValue(css 속성값을 가져옴)
*/
const calc=containerW-childStyle;
console.log(calc);
//child.style.width=calc;
//set
console.log(childStyle);

let pseudo=window.getComputedStyle(child,":before").content;
console.log(pseudo);