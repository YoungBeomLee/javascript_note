//id 선택
var el1 = document.getElementById("one");
el1.style.background = "yellow";
console.log(el1);
var el2 = document.getElementsByTagName("li");
var el3 = document.getElementsByTagName("ul");

// for (i = 0; i < 3; i++) {
//   el2[i].style.backgroundImage = "url(http://qwerew.cafe24.com/example/javascript/chicken.png)";
//   el2[i].style.backgroundSize = "20px";
//   el2[i].style.backgroundRepeat = "no-repeat";
// }
// for (let a of el2){
//     a.style.backgroundImage = "url(http://qwerew.cafe24.com/example/javascript/chicken.png)";
//     a.style.backgroundSize = "20px";
//     a.style.backgroundRepeat = "no-repeat";
// }
for (let a in el2){
    
    el2[a].style.backgroundImage = "url(http://qwerew.cafe24.com/example/javascript/chicken.png)";
    el2[a].style.backgroundSize = "20px";
    el2[a].style.backgroundRepeat = "no-repeat";
}

for(let e of el3){
    e.style.background="skyblue";
}
var el4=document.getElementsByClassName("highlight");
el4[1].style.cssText="width:500px; margin:auto; background:pink;" //css 속성 여러개 =>추가 x, 수정됨

//querySelector
var el5=document.querySelector(".highlight");
console.log(el5);//단일요소만 반환
el5.style.color="red";
var el6 = document.querySelectorAll(".highlight");
//el6.style.color="orange";
console.log(el6);
for (var k = 0; k < el6.length; k++) {
	el6[k].style.color = "orange";
}
for (a of el6) {
	a.style.backgroundColor = "black";
}
el6.forEach(function (b) {
	b.style.fontSize = "3em";
});



