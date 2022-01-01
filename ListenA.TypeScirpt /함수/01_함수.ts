/**
 * 함수 알아보기
 */

//기존 자바스크립트 함수
function add(x, y) {
  return x + y;
}

//타입스크립트의 함수
//      -함수명 -타입인자 -타입인자  -리턴타입
function addT(x: number, y: number): number {
  return x + y;
}

// Optional Parameter 규칙
function hello(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}`;
  } else {
    return `Hello, ${name}`;
  }
}
// ? 는 값을 입력 하거나 안해도되는 속성을 정할때 사용,
// 위에서 name은 사용 안해도되는 매개변수

console.log(hello('kim'));
console.log(hello('kim', 2));

//Optional한 매개변수의 순서가 첫번째로 하고싶을 때
function hello2(age: number | undefined, name: string): string {
  if (age !== undefined) {
    0;
    return `Hello, ${name}. You are ${age}`;
  } else {
    return `Hello, ${name}`;
  }
}
