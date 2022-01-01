/* 함수 인터페이스의 정의 */

interface InterFunc {
  (num: number): number;
}

//함수 인터페이스를 구현하는 함수는 인터페이스를 준수해야함
const interFunc: InterFunc = function (num: number) {
  return num * num;
};

console.log(interFunc(10)); //100

/* 두 개의 인자값을 받을 때 */

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20); //30

//참 거짓을 구분지을때
interface RealOrFake {
  (answer: number): boolean;
}

const answers: RealOrFake = (ans) => {
  return ans > 50;
};

answers(20); //false
