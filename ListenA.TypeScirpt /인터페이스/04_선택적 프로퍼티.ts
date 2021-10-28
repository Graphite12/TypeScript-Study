/* 선택적 프로퍼티 Otion bags 패턴 */
`
인터페이스의 프로퍼티는 반드시 구현되어야 한다. 하지만 인터페이스의 프로퍼티가

선택적으로 필요한 경우가 있을 수 있다. 선택적 프로퍼티 명 뒤에 ? 를 붙여 생략하여 표현한다.

`;

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
