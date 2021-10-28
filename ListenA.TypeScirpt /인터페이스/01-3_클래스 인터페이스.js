"use strict";
//TodoClass는 Todo2 인터페이스를 구현하여야한다
class TodoClass {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const todoss = new TodoClass(1, "typescirpt", true);
console.log(todoss);
`
인터페이스는 프로퍼티 뿐만 아니라 메소드도 포함할 수 있다.

단, 모든 메소드는 추상 메소드여야한다. 

인터페이스를 구현하는 클레스는 인터페이스에서 정의한 프로퍼티와

추상 메소드를 반드시 구현해야한다.
`;
class PersonInfo {
    //인터페이스에서 정의한 프로퍼티의 구현
    constructor(name) {
        this.name = name;
    }
    //인터페이스에서 정의한 주상 메소드의 구현
    saying() {
        console.log(`내가 누구냐면 나는 ${this.name}`);
    }
}
function greeter(person) {
    person.saying();
}
const introduce = new PersonInfo("Kim");
greeter(introduce);
//# sourceMappingURL=01-3_%ED%81%B4%EB%9E%98%EC%8A%A4%20%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4.js.map