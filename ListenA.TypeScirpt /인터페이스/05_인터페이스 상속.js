"use strict";
`인터페이스는 extends 키워드를 사용하여 인터페이스 또는 클래스를 상속 받을 수 있다.`;
const student = {
    name: "Kim",
    age: 20,
    grade: 30,
};
`복수의 인터페이스 상속`;
const webDeveloper = {
    name: "Kim",
    age: 30,
    skills: ["JavaScript", "HTML", "CSS", "TypeScript"],
};
/* 클래스 상속 */
`
클래스도 상속 받을 수 있다.

각 클래스의 모든 멤버(Public, protected, private)는 상속되지만, 

구현까지 상속하지는 않는다.
`;
class Persons3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const Developer = {
    name: "Park",
    age: "25",
    skills: ["JavaScript", "CSS", "HTML"],
};
//# sourceMappingURL=05_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%20%EC%83%81%EC%86%8D.js.map