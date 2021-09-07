"use strict";
/* 초과 프로퍼티 검사 */
`01번 인터페이스 예제에서 {label: string}을 타입스크립트가 기대해도 프로퍼티를 하나더 추가한
{size: number; label: string}을 허용해주었다

02번 인터페이스 예제에선 Option bags로 선택적 프로퍼티를 배워다.

하지만 이 둘을 결합할경우 에러가 발생할 수 있다. 다시 예제를 보자.
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
let myInfo = createInfo({ named: "Chang", age: 20 });
