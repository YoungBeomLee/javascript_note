// console.log(window);
// window.open("popup.html","배너","width=300,height=300,left=50,top=10");

function expandingwindow(website){
    let winwidth=window.screen.availWidth;
    let winheight=window.screen.availHeight;
    let sizer=window.open("","" ,"left=0,top=0,scrollbar=yes");
    for(let sizewidth=1; sizewidth<winwidth;sizewidth+=7){
        sizer.resizeTo(sizewidth,500);
    }
    sizer.location=website;
    
    // console.log(winwidth,winheight);
    // console.log(`화면크기 알아내기
    // window:창크기 (주소창 포함여부)
    // window.outerWidth:${window.outerWidth} /
    // window.innerWidth:${window.innerWidth} /
    // screen:모니터크기(작업표시줄 포함여부)
    // screen.width:${screen.width} /
    // screen.availwidth:${screen.availWidth} /
    // `);
    /* 작업표시줄 뺀 화면크기 */
    
}