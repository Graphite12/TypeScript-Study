//함수의 인자를 배열로 받을 때

//배열의 있는 요소를 모두 더하는 함수
function addElements(...nums: number[]): number {
  return nums.reduce((result, num) => result + num, 0);
}

addElements(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
