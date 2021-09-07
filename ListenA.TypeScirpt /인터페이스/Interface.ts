`TypeScript의 핵심 원칙 중 하나은 타입 검사가 값의 형태에 초점을 맞추고 있다.
덕 타이핑(duck typing) 혹은 구조적 서브타이핑(structural subtyping) 이라고 한다.

인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의, 프로젝트 외부에서 사용하는 코드의 계약을 정의한다.
`;

function interfaceOne(labeledobj: { label: string }) {
  console.log(labeledobj);
}

let myIterface = { size: 10, label: "size 10 Object" };

interfaceOne(myIterface);

`타입 검사는 interfaceOne 호출을 확인한다. 이 함수는 string 타입 label을 갖는 객체를 하나의 매게변수로 가진다.

실제로 더 많은 프로퍼티를 가지고 있겠지만, 컴파일러는 최소한 필요한 프로퍼티가 있는지와 

타입이 잘 맞는지만 검사한다.
`;

`이번엔 좀더 명확하게 작성해보자`;

interface LabelValue {
  label: string;
}

function interfaceTwo(labeledObj: LabelValue) {
  console.log(labeledObj.label);
}

let myInterface2 = { size: 10, label: "Size 10 Object" };
interfaceTwo(myInterface2);

`인터페이스의 모든 프로퍼티가 필요하진 않다. 어떤 조건에서만 존재하거나 아예 없을 수 도있는데
선택적 르포퍼티들은 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는 Option bags 패턴을 만들 떄 유용하다.
`;

/* 선택적 프로퍼티 Otion bags 패턴 */

interface intelConfig {
  name?: string;
  age?: number;
}

function createInfo(config: intelConfig): { name: string; phone: number } {
  let newInfo = { name: "kim", phone: 1111111111 };
  if (config.name) {
    newInfo.name = config.name;
  }

  if (config.age && config.age >= 18) {
    newInfo.phone = 43545324523;
  }

  return newInfo;
}

let myInfo = createInfo({ name: "Chang", age: 20 });

`위 코드와같이 선택적 프로퍼티를 가지는 인터페이스는 다른 인터페이스와 비슷하게 작성한다.
선택적 프로퍼티는 항상 선언 시 프로퍼티 이름 끝에 ? 를 붙인다.

선택적 프로퍼티가 갖는 이점은 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서
사용 가능한 속성을 기술하는 것이다. 

만약 위의 name 프로퍼티 이름을 잘못 입력하면 오류를 반환한다.

`;

`// Error: Property 'nam' does not exist on type 'IntelConfig'`;

/* 읽기전용 프로퍼티 */

`읽기 전용 프로퍼티는 객체가 처음 생성될 때만 수정이 가능하며, 프로퍼티 이름앞에 항상 readonly를 넣어줘야한다.`;

//ex
interface readOnlySize {
  readonly width: string;
  readonly height: string;
}

`아래처럼 객체 리털로 할당하여 readOnly를 생성하고, 할당 이후에는 절대 수정이 불가능하다.`;

let size: readOnlySize = { width: "200px", height: "350px" };

size.height = "5000px"; // 오류 발생

`또한 모든 변경 메소드가 제거된 Array<Type>과 동일한 ReadonlyArray<Type> 타입을 제공한다.
생성 이후 배열을 변경하지 못한다.
`;

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: ReadonlyArray<number> = arrayOne;

arrayTwo[0] = 12; // 오류 읽기전용 속성
arrayTwo.push(200); //오류 읽기전용 속성
arrayTwo.length; //오류 읽기전용 속성
arrayOne = arrayTwo; //오류 읽기전용 속성
