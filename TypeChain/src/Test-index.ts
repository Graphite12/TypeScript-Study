//사전에 인터페이스르 통해 해당 속성에 대한 타입이 어떠한 타입이 들어가야하는지 타입을 지정할 수 있다.
interface Human {
  name: string;
  age: number;
  gender: string;
}

//인터페이스대신 Class를 사용할 경우
//타입스크립트도 Class활용이 가능하다. 자바스크립트와 비슷한데 타입스크립트는 특별한 타입이 들어간다.

class Human2 {
  //속성을 공개할 수 있고, prviate로 외부에서 접근이 불가능하게 설정할 수있다. 뒤에 readonly를 붙여서 읽기전용 속성으로 만들면 외부에서 수정이 불가능하다.
  //public, private  readonly
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
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

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};
