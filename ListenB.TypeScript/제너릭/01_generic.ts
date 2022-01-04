// Generic

/**
 * 제너릭이 없다고 가정
 *
 * 전달할 배열 요소들의 타입이 다를때 .. 어느 함수의 parameter는 type를 명시해줘야한다.
 */
function getSize(arr: number[] | string[] | boolean[] | object[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize(arr1);

const arr2 = ['1', '2', '3'];
getSize(arr2);

const arr3 = [false, true, false];

//...
// 이렇게 인자에 타입을 일일히 작성해주는 대신 Generic를 사용한다.

//  T: Type
function getSize2<T>(arr: T[]): number {
  return arr.length;
}

const arr_1 = [1, 2, 3];
getSize2<number>(arr_1);

const arr_2 = ['1', '2', '3'];
getSize2<string>(arr_2);

//타입스크립트는 인자가 어떤 타입인지 알기 때문에 TypeParameter를 작성안해줘도된다.
//단, 강제하고싶을 경우 <type>타입을 입력해야한다.
const arr_3 = [false, true, false];
getSize2(arr_3);
