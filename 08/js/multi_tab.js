/* 
.tab_wrapper 버튼과 패널의 부모
.tab_menu 버튼그룹 >a 요소
.tab_content 패널그룹>div 요소
*/
$(function () {
  var tabWrapper = $(".tab_wrapper");
  tabWrapper.each(function () { //각각
  var currentEl=$(this);
  var menus = currentEl.find(".tab_menu a");
  var panels = currentEl.find(".tab_content > div");
  //브라우저 이벤트 종류 -> event handler->event object(이벤트가 발생한 대상의 정보를 가진 객체)
  menus.click(function (e) {
  e.preventDefault();
  let tg = $(this);
  let currentLink = tg.attr("href");
  menus.removeClass("active");
  tg.addClass("active");
  panels.hide();
  $(currentLink).show();
  
});//menus.click
 
  
});//each function


});//$(function(){})
