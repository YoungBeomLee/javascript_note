/*addEventListener("load",function(){
    var bt=document.querySelector("h1").nextElementSibling;
    bt.onclick=function(){
        //document.querySelector("h1").className="red";
        //document.querySelector("h1").classList.remove('red','class');
        document.querySelector("h1").classList.toggle('toggle');
        document.querySelector("h1").classList.replace("red","orange");
    }
    document.querySelector("h1").classList.add("bg-orange","red","class");
    document.querySelector("h1").nextElementSibling.classList.add("red");
    document.querySelector("h1").nextElementSibling.nextElementSibling.classList.add("orange");
    document.querySelector("h1").nextElementSibling.nextElementSibling.nextElementSibling.classList.add("bg-orange","white","red");
})
*/
$(function(){
    var bt=$("h1").next().next().next();
    bt.click(function(){
        if($(this).hasClass("red")){//red클래스가 있는지 검사
            $(this).removeClass("bg-orange");
        }//이 태그가 클래스를 가지고있는지 판별.true,false를 반환값으로 가짐.
        
    })
    $("h1").addClass("red");
    $("h1").removeClass("red");
    //document.querySelector("h1").nextElementSibling.classList.add("red"); 자바스크립트
    $("h1").next().addClass("red");
    $("h1").next().next().addClass("orange");
    $("h1").next().next().next().addClass("bg-orange white red");
})