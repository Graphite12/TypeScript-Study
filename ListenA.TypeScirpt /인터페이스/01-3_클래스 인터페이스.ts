//인터페이스 정의
interface Todo2 {
  id: number;
  content: string;
  completed: boolean;
}
//TodoClass는 Todo2 인터페이스를 구현하여야한다

/**
 * Class에 인터페이스를 사용할 경우
 *
 * class명 뒤에 implements를 반드시 기입한다.
 */
class TodoClass implements Todo2 {
  constructor(
    public id: number,
    public content: string,
    public completed: boolean,
  ) {}
}

const todoss = new TodoClass(1, 'typescirpt', true);

console.log(todoss);

`
인터페이스는 프로퍼티 뿐만 아니라 메소드도 포함할 수 있다.

단, 모든 메소드는 추상 메소드여야한다. 

인터페이스를 구현하는 클레스는 인터페이스에서 정의한 프로퍼티와

추상 메소드를 반드시 구현해야한다.
`;

//인터페이스 정의
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Benz implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }

  start() {
    console.log('start Engine');
  }
}

const car = new Benz('green');
car.start();
car.wheels;

//인터페이스의 확장
interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  plastic: string;
}

interface ToyCar extends Car2, Toy {
  price: number;
}
