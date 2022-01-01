interface User {
  name: string;
  age: number;
}

// 결과 값이 유저 객체이거나, 문자열을 반환할 수 있다 그러면...
function join(name: string, age: number | string): User | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력하세요';
  }
}

//그러나 이상태에서는 에러가 발생한다.
const sam: User = join('Sam', 30);
const kim: string = join('Kim', '30');

//이럴때는 함수 오버로드라는 것을 사용한다.

/**
 * 함수 오버로드란?
 *
 * 전달받은 매개변수의 개수나 타입에따라 다른 결과값, 동작을 하기 위해 사용하는 함수이다.
 */

//이렇게 매개변수의 개수나 타입에 따른 결과값에 대비해 오버로드 함수를 작성해준다.
function join2(name: string, age: number): User;
function join2(name: string, age: string): string;
function join2(name: string, age: number | string): User | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력하세요';
  }
}

//그러나 이상태에서는 에러가 발생한다.
const sam2: User = join2('Sam', 30);
const kim2: string = join2('Kim', '30');
