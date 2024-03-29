/* 
.tab-menu 버튼그룹 >a 요소
.tab-content 패널그룹>div 요소
*/
$(function () {
  var menus = $(".tab_menu a");
  var panels = $(".tab_content>div");
  //브라우저 이벤트 종류 -> event handler->event object(이벤트가 발생한 대상의 정보를 가진 객체)
  menus.eq(0).addClass("active");
  panels.eq(0).show();
  menus.click(function (e) {
    e.preventDefault();
    let tg = $(this);
    let currentLink = tg.attr("href");
    menus.removeClass("active");
    tg.addClass("active");
    panels.hide();
    $(currentLink).show();
  });
});
