"use strict";
/* 읽기전용 프로퍼티 */
`읽기 전용 프로퍼티는 객체가 처음 생성될 때만 수정이 가능하며, 프로퍼티 이름앞에 항상 readonly를 넣어줘야한다.`;
`아래처럼 객체 리털로 할당하여 readOnly를 생성하고, 할당 이후에는 절대 수정이 불가능하다.`;
let size = { width: "200px", height: "350px" };
size.height = "5000px"; // 오류 발생
`또한 모든 변경 메소드가 제거된 Array<Type>과 동일한 ReadonlyArray<Type> 타입을 제공한다.
생성 이후 배열을 변경하지 못한다.
`;
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = arrayOne;
arrayTwo[0] = 12; // 오류 읽기전용 속성
arrayTwo.push(200); //오류 읽기전용 속성
arrayTwo.length; //오류 읽기전용 속성
arrayOne = arrayTwo; //오류 읽기전용 속성
