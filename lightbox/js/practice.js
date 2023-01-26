$(function(){
    var btn=$(".gallery a");
    visible=$("#lightbox-overlay");
    visibleimg=visible.find("img");

    btn.click(function(){
        var imgdata=$(this).find("img").attr("data-lightbox");
        visible.addClass("visible");
        visibleimg=visibleimg.attr("src",imgdata);

    })
    visible.click(function(){
        visible.removeClass("visible");
    })

})