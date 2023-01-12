/*$(선택자).css({"color":"red","background-color":"yellow"}) */

document.querySelector("h1").style.color="red";
document.querySelector("h1").style.backgroundColor="Yellow";
document.querySelector("h1").onclick=function(){
document.querySelector("h1").style.backgroundColor="green";
}

/*var your_sex="남자";
document.write("당신은 "+your_sex+"이므로")
//if(조건){조건이 참일때 실행}
if(your_sex=="남자"){
    document.write(" 반바지를 입으세요.");
}
if(your_sex=="여자"){
    document.write("긴바지를 입으세요.");
}*/
/*현재 시간이 18시 이전이면 햇님을 출력하고 18시 이후면 달을 출력*/

let current=new Date();
let day_time=current.getHours();
if(day_time<18){/*0시부터 17시까지는 해 */
    document.write(`<img src="./img/day.gif" style="display:block; margin:0 auto">`);
}
if(day_time>=18){/*18시부터 24시까지는 달 */
    document.write(`<img src="./img/night.gif" style="display:block; margin:0 auto">`);
}