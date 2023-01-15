$(function(){
    //id선택
    //document.getElementById("one").style.background = "yellow";
    $("#one").css("background","yellow");
    var el1=$("#one");//id를 변수에 저장
    el1.css("color","red"); //변수에 css메서드를 적용
    var el2=$("li");
    el2.css("background","pink");
    $(el2[1]).css("color","blue");
    //배열중 특정번째만 적용
    //css는 제이쿼리 함수여서 사용할려면 $()로 감싸야한다.
    el2.eq(1).css("color","yellow");//제이쿼리 메서드를 사용해서 선택
    el2.each(function(a,b,c){
        console.log(a,b,c)
    el2.eq(a).css("background","blue");
    $(b).css("color","white");
    })
    var el3=$(".highlight");
    el3.eq(1).css({width:"500px",margin:"auto",background:"pink"});
});