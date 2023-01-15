var dog = new Object(); //객체 생성
dog = {
    /* property */
    /* key : value */
    name:"망고",
    features:"말티즈"

};
//arr.length
console.log(dog.name);
document.write(`<h1>${dog.name}<br>${dog.features}</h1>`);

/* 2- 객체 생성 */

const baby={name:"ㅇㅇ",features:"ㅋㅋ"}
document.write(`<h1>${baby.name}<br>${baby.features}</h1>`);

/* 3- method */

const pet={
    name:"망고",
    eat: function(food){
        document.write(`<h1>${this.name}는 ${food}를 좋아해요</h1>`);
        //객체 안에서의 this 객체 자신을 가르킴
    }
}
pet.eat('연어')
pet.eat('닭가슴살')
//인자를 통해 매개변수로(food) 받아서  eat메소드를 두 번 실행한다.