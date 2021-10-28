"use strict";
`TypeScript의 핵심 원칙 중 하나은 타입 검사가 값의 형태에 초점을 맞추고 있다.
덕 타이핑(duck typing) 혹은 구조적 서브타이핑(structural subtyping) 이라고 한다.

인터페이스는 이런 타입들의 이름을 짓는 역할을 하고 코드 안의 계약을 정의, 프로젝트 외부에서 사용하는 코드의 계약을 정의한다.

좀더 쉽게 이해하자면 타입스크립트의 인터페이스는 일반적으로 타입 체크를 위해 사용되며 변수, 함수, 클래스 등에 사용할 수 있다.
`;
function interfaceOne(labeledobj) {
    console.log(labeledobj);
}
let myInterface = { size: 10, label: "size 10 Object" };
interfaceOne(myInterface);
`타입 검사는 interfaceOne 호출을 확인한다. 이 함수는 string 타입 label을 갖는 객체를 하나의 매게변수로 가진다.

실제로 더 많은 프로퍼티를 가지고 있겠지만, 컴파일러는 최소한 필요한 프로퍼티가 있는지와 

타입이 잘 맞는지만 검사한다.
`;
`이번엔 좀더 명확하게 작성해보자`;
function interfaceTwo(labeledObj) {
    console.log(labeledObj);
}
let myInterface2 = {
    size: 100,
    label: "Size 10 Object",
    content: "text",
    completed: true,
};
interfaceTwo(myInterface2);
//# sourceMappingURL=01_%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%20%EA%B8%B0%EC%B4%88.js.map