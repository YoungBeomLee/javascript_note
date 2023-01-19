addEventListener("DOMContentLoaded",()=>{
    //load.html 요소를 변수에 할당
    var book1=document.querySelector("#book1")
    var book2=document.querySelector("#book2")
    //데이터파일의 경로를 변수에 할당
    const url="./book.html"
    //XMLHttpRequest 객체를 생성
    let request=new XMLHttpRequest();
    //서버에 요청프로그램 작성
    //.open(방법,주소)
    request.open("GET",url)
    
})