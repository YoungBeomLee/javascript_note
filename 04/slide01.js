$(function () {
  const visual = $("#brand_visual>ul>li");
  const button = $("#buttonlist>li");
  let current = 0; // 현재
  let btnidx = 0; //클릭한 페이저 버튼의 인덱스
  let id; //setIntervalId
  const speed = 3000;
  //console.log(visual,button);

  //버튼클릭함수
  button.click(function () {
    btnidx = $(this).index();
<<<<<<< HEAD
   // console.log(btnidx);
=======


>>>>>>> 8a5bcadc449620bba744336dec1f3225a6df6040
    button.removeClass("on");
    $(this).addClass("on");
    move();
    //선택된것만 적용하기
    //1.다 지우고 걔(this 클릭되어져있는놈)만 적용.
  });
  //시간마다실행

  

  //이동시키는 함수
  function move() {
    if (current == btnidx) return;
    //console.log("무브" + next);
    let cu = visual.eq(current);
    let ne = visual.eq(btnidx);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.css("left", "100%").stop().animate({ left: "0%" });
    current = btnidx;
  }

  timer();
  function timer() {
    id = setInterval(function () {
      let next = current + 1;
      if (next == visual.length) {
        //인덱스번호가 3이면 next를 0으로 해라.
        next = 0;
      }
      button.eq(next).trigger("click");
<<<<<<< HEAD
       console.log(current);
    }, speed);
  }

  //이동시키는 함수
  function move() {
    if (current == btnidx) return;
    //console.log("무브" + next);
    //console.log(btnidx);
    let cu = visual.eq(current);
    let ne = visual.eq(btnidx);
    cu.css("left", "0").stop().animate({ left: "-100%" });
    ne.css("left", "100%").stop().animate({ left: "0%" });
    current = btnidx;
  }

  //clearInterval
  clearAuto();
	function clearAuto() {
		$("#brand_visual,#buttonlist,.controls").mouseenter(function () {
			clearInterval(id);
		});
		$("#brand_visual,#buttonlist,.controls").mouseleave(function () {
			timer();
		});
	}

  //좌우컨트롤 버튼
  controls();
  function controls() {
    $(".controls .next").click(function () {
      btnidx = btnidx + 1;
      if (btnidx == visual.length ) {
        btnidx = 0;
      }
      button.removeClass("on");
      button.eq(btnidx).addClass("on");

      let cu = visual.eq(current);
      let ne = visual.eq(btnidx);
      cu.css("left", "0").stop().animate({ left: "-100%" });
      ne.css("left", "100%").stop().animate({ left: "0" });
      current = btnidx;
      return false;
    });
    $(".controls .prev").click(function () {
      btnidx = btnidx - 1;
      if (current == 0) {
        btnidx = visual.length - 1;
      }
      button.removeClass("on");
      button.eq(btnidx).addClass("on");
      let cu = visual.eq(current);
      let pr = visual.eq(btnidx);
      cu.css("left", "0").stop().animate({ left: "100%" });
      pr.css("left", "-100%").stop().animate({ left: "0" });
      current = btnidx;
      return false;
    });
  }
});

=======

      // console.log(current++);
    }, speed);
  }

 
  

 


  //clearInterval
  clearAuto();
	function clearAuto() {
		$("#brand_visual,#buttonlist,.controls").mouseenter(function () {
			clearInterval(id);
		});
		$("#brand_visual,#buttonlist,.controls").mouseleave(function () {
			timer();
		});
	}

  //좌우컨트롤 버튼
  controls();
  function controls() {
    $(".controls .next").click(function () {
      btnidx = btnidx + 1;
      if (btnidx == visual.length ) {
        btnidx = 0;
      }
      button.removeClass("on");
      button.eq(btnidx).addClass("on");

      let cu = visual.eq(current);
      let ne = visual.eq(btnidx);
      cu.css("left", "0").stop().animate({ left: "-100%" });
      ne.css("left", "100%").stop().animate({ left: "0" });
      current = btnidx;
      return false;
    });
    $(".controls .prev").click(function () {
      btnidx = btnidx - 1;
      if (current == 0) {
        btnidx = visual.length - 1;
      }
      button.removeClass("on");
      button.eq(btnidx).addClass("on");
      let cu = visual.eq(current);
      let pr = visual.eq(btnidx);
      cu.css("left", "0").stop().animate({ left: "100%" });
      pr.css("left", "-100%").stop().animate({ left: "0" });
      current = btnidx;
      return false;
    });
  }
});


>>>>>>> 8a5bcadc449620bba744336dec1f3225a6df6040
//jQuery

/*
document.addEventListener("DOMContentLoaded", function () {
	const visual = document.querySelectorAll("#brand_visual>ul>li");//자바스크립트는 html요소를 전달받을때 이거 써야함.
	visual.style.backgroundColor = "white";
});
*/
