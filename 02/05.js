let x=10,y=20,z="10";
document.write(`x &gt; y : ${x>=y} <br>`); //10>20 false(조건연산자는 true,false값을 반환한다.)
document.write(`x &lt; y : ${x<y} <br>`) ; // 10<20 true
document.write(`x &lt;= y : ${x<=y} <br>`) ; 10<=20
document.write(`x != y : ${x!=y} <br>`) ;//10!=20 true
document.write(`x !== z : ${x!==z} <br>`) ;//10!=10  자료형까지 달라야 true
document.write(`x == z : ${x==z} <br>`) ;//10 =="10" true  얕은비교
document.write(`x === z : ${x===z} <br>`) ;//10 ==="10" false  깊은비교
document.write(`x = z : ${x=z} <br>`) ;//10 ="10" 대입  