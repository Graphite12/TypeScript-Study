`인터페이스는 extends 키워드를 사용하여 인터페이스 또는 클래스를 상속 받을 수 있다.`;

interface Persons {
  name: string;
  age?: number;
}

interface Student extends Persons {
  grade: number;
}

const student: Student = {
  name: "Kim",
  age: 20,
  grade: 30,
};

`복수의 인터페이스 상속`;

/* 복수의 인터페이스 상속 */
interface Persons2 {
  name: string;
  age?: number;
}

interface Developer {
  skills: string[];
}

interface WebDeveloper extends Persons2, Developer {}

const webDeveloper: WebDeveloper = {
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
  constructor(public name: string, public age: number) {}
}

interface Developers extends Persons3 {
  skills: string[];
}

const Developer: Developers = {
  name: "Park",
  age: "25",
  skills: ["JavaScript", "CSS", "HTML"],
};
