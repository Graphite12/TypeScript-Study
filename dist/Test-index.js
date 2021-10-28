"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//인터페이스대신 Class를 사용할 경우
//타입스크립트도 Class활용이 가능하다. 자바스크립트와 비슷한데 타입스크립트는 특별한 타입이 들어간다.
class Human2 {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const park = new Human2('Park', 20, 'male');
const person = {
    name: 'kim',
    age: 22,
    gender: 'Male',
};
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
console.log(sayHi(person));
//# sourceMappingURL=Test-index.js.map