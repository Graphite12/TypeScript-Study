//추상(Abstract) Class

//추상화는 프로퍼티의 메소드와 이름만 정해 줄뿐 사용할 순 없다
//추상클래스를 상속받는 클래스 객체에서 구현해줘야한다.
abstract class Target {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  doSomething() {
    console.log('do Something');
  }

  abstract start(): void;
}

class Maneged extends Target {
  constructor(name: string) {
    super(name);
  }
  start(): void {
    alert('HelpMe');
  }
}

const n = new Maneged('Gimlee');
