//유니온(Union) Types

interface Unit {
  name: 'unit';
  color: string;
  start(): void;
}

interface Building {
  name: 'building';
  color: string;
  made(): void;
}

/**동일한 속성의 타입을 다르게 구분지어 놓은 것을
 * 식별 가능한 유니온 타입이라고 한다.
 *
 * 유니온 타입의 다른 표현으로는 || or이라고한다.
 */

function StarCraft(obj: Unit | Building) {
  console.log(obj.name);
  if (obj.name === 'unit') {
    obj.start();
  } else {
    obj.made();
  }
}
