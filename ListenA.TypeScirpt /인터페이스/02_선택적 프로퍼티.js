"use strict";
/* 선택적 프로퍼티 Otion bags 패턴 */
`인터페이스의 모든 프로퍼티가 필요하진 않다. 어떤 조건에서만 존재하거나 아예 없을 수 도있는데
선택적 르포퍼티들은 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는 Option bags 패턴을 만들 떄 유용하다.
`;
function createInfo(config) {
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
