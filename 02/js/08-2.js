/*방문자에게 질의응답 창(prompt)을 이용하여 신장과 몸무게를 입력받아 옵니다.
방문자의 몸무게가 적정 몸무게보다 이상일 경우 "적정 몸무게 이상", 미만일 경우에는 "적정 몸무게 미달"로 출력되도록 하세요.
적정 몸무게 공식은 '몸무게=(신장-100)*0.9'입니다*/

/*var weight=Number(prompt("당신의 체중은?","0"));
var height=Number(prompt("당신의 신장은?","0"));
var avg_weight=(height-100)*0.9;
var result=weight>=avg_weight?"적절몸무게 이상":"적절몸무게 미달";
document.write("<br>",weight,"<br>",height,"<br>",avg_weight);
document.write("<br>",result);*/

/*사용자로부터 cm을 입력받아 inch로 변환하여 출력하는 단위변환기를 만드세요. 
cm*0.393701
*/

const user_cm=prompt("cm를 입력해주세요.","0");
const unit_converter=Number(user_cm)*0.393701;
document.write(unit_converter,"inch");