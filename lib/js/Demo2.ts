class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        return "xin chao toi là: "+this.name;
    }
}

class Child extends Person{
    constructor(name,age,hobby){
        super(name,age);
        this.hobby = hobby;
    }
    sayHello(){
        return "Xin chao e là: "+this.name+" e thích: "+this.hobby;
    }
}

var p2 = new Child("haau",2,"Code");
console.log(p2.sayHello());