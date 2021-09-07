`TypeScript의 핵심 원칙 중 하나은 타입 검사가 값의 형태에 초점을 맞추고 있다.
덕 타이핑(duck typing) 혹은 구조적 서브타이핑(structural subtyping) 이라고 한다.

인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의, 프로젝트 외부에서 사용하는 코드의 계약을 정의한다.
`;

function interfaceOne(labeledobj: { label: string }) {
  console.log(labeledobj);
}

let myInterface = { size: 10, label: "size 10 Object" };

interfaceOne(myInterface);

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
