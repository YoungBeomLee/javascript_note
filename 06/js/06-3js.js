let gnbLiA=$('.gnb>li>a');
let aH=$('.sub>li>a').outerHeight();
gnbLiA.click(function(){
    let tg=$(this);
    //tg e
    let subA=tg.next().find("a").length;
    $('.sub').css('height','0px');
    tg.next().css('height',aH*subA+"px");
})