/* 타입스크립트에서는 접근 제한자라는 개념이 있다. */

// 접근제한자(Access Modifier)

/*
public - 자식 클래스, 클래스 인스턴스 모두 접근가능, Default (아무것도 작성안하면 기본)
private - 해당 클래스 내부에서만 접근 가능
protected - 자식 클래스에서 접근 가능
readonly - 읽기 전용, 생성자내부 에서 한번 작성해줘야함
static - 정적 맴버 변수
*/

class Protocol {
  // public port:number와 동일
  name: string = 'Any';
  port: number;

  constructor(port: number) {
    this.port = port;
  }
  start() {
    console.log('start');
  }
}

class Https extends Protocol {
  constructor(port: number) {
    super(port);
  }

  showPort() {
    console.log(super.name, super.port);
  }
}

const https = new Https(443);
console.log(https.name);

//Private일때

class Protocol2 {
  private name: string = 'Private Any';
  #name2: string = 'Private Any';
  port: number;

  constructor(port: number) {
    this.port = port;
  }
  start() {
    console.log('start');
    console.log(this.name);
    console.log(this.#name2);
  }
}

class Https2 extends Protocol2 {
  constructor(port: number) {
    super(port);
  }

  showPort() {
    console.log(super.name, super.port);
  }
}

//이때 name 속성은 Protocol 클래스 내에서만 사용이 가능하다.

//protected일때

class Protocol3 {
  protected name: string = 'Any';
  port: number;

  constructor(port: number) {
    this.port = port;
  }
  start() {
    console.log('start');
  }
}

class Https3 extends Protocol3 {
  constructor(port: number) {
    super(port);
  }

  showPort() {
    console.log(super.name, super.port);
  }
}

const https2 = new Https3(443);
console.log(https2.name);
//protected 일 경우 인스턴스로는 name을 사용할 수 없지만
// 자식 클래스에서 사용 가능하다.

//Readonly && Static
class Protocol4 {
  readonly name: string = 'Any';
  port: number;
  //정적 멤버 변수
  static option = 'CRUD';

  constructor(port: number, name) {
    this.port = port;
    this.name = name;
    //사용하기 위해선 클래스명을 가져온다
    Protocol4.option;
  }
  start() {
    console.log('start');
    console.log(this.name);
  }
}

class Https4 extends Protocol4 {
  constructor(port: number) {
    super(port);
  }

  showPort() {
    console.log(super.name, super.port);
  }
}
