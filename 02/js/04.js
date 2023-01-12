let x=1;
//x++: 후위연산 
document.write(x++);//x+1 // 1(2)=1+1
document.write("<br>");
document.write(x);//2
document.write("<br>");
document.write(x++);//2
document.write("<br>");
document.write(x++);//3(4)
document.write("<br>");
document.write(x++);//4(5)
document.write("<br>");
document.write(x++);//5(6)
document.write("<br>");
document.write(x);//(6)
document.write("<br>");

//전위연산
x=1;
document.write('<hr>',++x);//2
document.write('<br>',++x,"&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","3=2+1");//3=2+1
document.write('<br>',++x,"&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","4=3+1");//4=3+1
document.write('<br>',++x,"&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","5=4+1");//5=4+1
document.write('<br>',++x,"&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","&nbsp;","6=5+1");

let y=1;
document.write(`<h1>${y--},${y},${--y}</h1>`)//1=1-1(0)

