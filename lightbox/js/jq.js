$(function(){
    var button=$('.gallery a');
    target=$('#lightbox-overlay'),targetimg=target.find('img');
    
    button.click(function(){
        //큰 이미지주소
        var newimg=$(this).find('img').attr('data-lightbox');
        //변수 oldimg 를 선언후 this 하위 img의 src를 할당하시오.
        //var oldimg=$(this).find('img').attr('src');
        target.addClass("visible");
        targetimg.attr("src",newimg);
    })
    target.click(function(){
        target.removeClass("visible");
    })
})