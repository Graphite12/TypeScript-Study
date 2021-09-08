/* 함수 인터페이스의 정의 */

interface InterFunc {
  (num: number): number;
}

//함수 인터페이스를 구현하는 함수는 인터페이스를 준수해야함
const interFunc: InterFunc = function (num: number) {
  return num * num;
};

console.log(interFunc(10)); //100
