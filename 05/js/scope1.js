function add(){
    var sum=10+20; //지역변수
    multi=10*20; //앞에 키워드 안쓰고 변수선언하면 전역변수
    total=sum; //30
    return total;
  }
  add();
  console.log(multi);
  console.log(total);
  console.log(sum);