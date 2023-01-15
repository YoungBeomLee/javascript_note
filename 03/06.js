/* 자리배치도 */
/* 총입장객과 한줄에 앉을 인원을  입력받아 좌석배치도를 출력하는 프로그램을 만드시오 */

//전체 입장객
<<<<<<< HEAD
var memNum=prompt("입장객은 몇명인가요?") //td의 총갯수
//한줄에 앉을 사람
var colNum=prompt("한 줄에 몇명씩 앉습니까?") //tr에 포함될 td 갯수  (<tr>tr*colnum</td>)
var i,j,rowNum;
=======

var memNum=prompt("입장객은 몇명인가요?") 
//한줄에 앉을 사람
var colNum=prompt("한 줄에 몇명씩 앉습니까?") //td 개수

>>>>>>> 8a5bcadc449620bba744336dec1f3225a6df6040

if(memNum%colNum===0){
    //tr
    rowNum=parseInt(memNum/colNum);
}
else{
<<<<<<< HEAD
    rowNum=parseInt(memNum / colNum)+1; //rownum은 열의 갯수
}
document.write("모두"+rowNum+"개의 줄이 필요합니다")
document.write("<table>");
//table>tr>td
for(i=0;i<rowNum;i++){//i=tr
    document.write("<tr>");
    for(j=1;j<=colNum;j++){
        var seatNo=i*colNum+j;
        if(seatNo>memNum)break;
        document.write("<td>"+seatNo+"좌석"+"</td>"); 
        
    }
    document.write("</tr>");
}



//parseInt 소수점 빼고 (정수)숫자만 가져옴
=======

    rowNum=parseInt(memNum / colNum)+1;
}
document.write("모두"+rowNum+"개의 줄이 필요합니다")

//parseInt 소수점 빼고 숫자만 가져옴

>>>>>>> 8a5bcadc449620bba744336dec1f3225a6df6040
//Number 숫자만 가져옴.