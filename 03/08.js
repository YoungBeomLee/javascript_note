for(let i=0;true;i++){
    alert(i+"번째 반복입니다.")
    const isContinue=confirm("계속하시겠습니까?");
    if(!isContinue){
        //break;
        continue;
    }
}
document.write("반복문 종료");