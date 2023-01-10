var sub=document.querySelector(".sub");
//.sub{transition:height .5s;}
sub.style.transition="height .5s";
sub.style.overflow="hidden";
sub.style.height="0px";

document.querySelector(".gnb>li>a").addEventListener(
    "click", function(){
        var k=this.nextElementSibling.style.height;
        console.log(k);
        if(k==='0px'){
            this.nextElementSibling.style.height="100px";
        }
        else{
            this.nextElementSibling.style.height="0px";
        }
    }
)



/*
var sub=$(".sub");
sub.css("display","none");
$(".gnb>li>a").click(function(){
    var k=$(this).next(".sub").css("display");
    console.log(k);
    if(k==='none'){
        $(this).next().slideDown();
    }
    else{
        $(this).next().slideUp();
    }
})
*/