//인터페이스 정의
interface Todo2 {
  id: number;
  content: string;
  completed: boolean;
}
//TodoClass는 Todo2 인터페이스를 구현하여야한다
class TodoClass implements Todo2 {
  constructor(
    public id: number,
    public content: string,
    public completed: boolean
  ) {}
}

const todoss = new TodoClass(1, "typescirpt", true);

console.log(todoss);

`
인터페이스는 프로퍼티 뿐만 아니라 메소드도 포함할 수 있다.

단, 모든 메소드는 추상 메소드여야한다. 

인터페이스를 구현하는 클레스는 인터페이스에서 정의한 프로퍼티와

추상 메소드를 반드시 구현해야한다.
`;

//인터페이스 정의

interface ClassPerson {
  name: string;
  saying(): void;
}

class PersonInfo implements ClassPerson {
  //인터페이스에서 정의한 프로퍼티의 구현
  constructor(public name: string) {}

  //인터페이스에서 정의한 주상 메소드의 구현
  saying() {
    console.log(`내가 누구냐면 나는 ${this.name}`);
  }
}

function greeter(person: PersonInfo): void {
  person.saying();
}

const introduce = new PersonInfo("Kim");

greeter(introduce);
