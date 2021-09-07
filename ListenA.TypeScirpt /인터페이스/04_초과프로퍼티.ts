/* 초과 프로퍼티 검사 */

`01번 인터페이스 예제에서 {label: string}을 타입스크립트가 기대해도 프로퍼티를 하나더 추가한
{size: number; label: string}을 허용해주었다

02번 인터페이스 예제에선 Option bags로 선택적 프로퍼티를 배워다.

하지만 이 둘을 결합할경우 에러가 발생할 수 있다. 다시 예제를 보자.
`;

interface IntelConfig {
  name?: string;
  age?: number;
}

function createInfo(config: IntelConfig): { name: string; phone: number } {
  let newInfo = { name: "kim", phone: 1111111111 };
  if (config.name) {
    newInfo.name = config.name;
  }

  if (config.age && config.age >= 18) {
    newInfo.phone = 43545324523;
  }

  return newInfo;
}

let myInfo = createInfo({ named: "Chang", age: 20 });

`createInfo 의 매개변수가 named로 전달 된 것에 JS에서는 잠잠하게 오류가 발생한다.
프로퍼티 age는 적합, name 프로퍼티는 안보이고 named프로퍼티는 중요하지 않다고 판단하기 떄문에

이 프로그램이 올바르게 작성되었다고 생각하게 된다.

하지만 타입스크립트에서는 이또한 그냥 넘어가는것 없이 코드의 버그가 존재한다는 것을 확인한다.
`;

// error: Object literal may only specify known properties, but 'named' does not exist in type 'IntelConfig'. Did you mean to write 'name'?
`객체 리터럴이 "대상타입"이 갖고있지 않은 프로퍼티를 갖고 있으면 에러 발생`;
let myInfo = createInfo({ named: "Chang", age: 20 });

`해당 검사를 피하는 방법은 타입 단언을 사용하는 방법이 있고, 추가적인 프로퍼티가 존재할경우
 아래와 같이 작성해 줄 수 있다.
`;
//타입 단언 사용
let mySquare = createInfo({ age: 20, tall: "177cm" } as IntelConfig);

//추가적인 프로퍼티 생성시

interface IntelConfig {
  name?: string;
  age?: number;
  [propname: string]: any;
}
