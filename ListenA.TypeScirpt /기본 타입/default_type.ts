/* 

타입스크립트도 기본 타입이 존재하며, 함수나 변수와 같은 자바스크립트 코드에 타입을 정의할 수 있다.

타입스크립트에서는 12가지의 타입이 존재한다.

*/

/* Boolean */
let isLoggedIn: boolean = false;

/* Number */
let num: number = 10;
let hex: number = 0xf00d;

/* String */
let target: string = "target";

let sense: string = `Hello, my name is ${target}`;

/* Object */
// Obejct는 원시타입이 아님을 나타낸다. number, string, boolean, bigint, symbol, null, undefined 를 제외한 나머지를 의미함

declare function create(o: object | null): void;

//성공
create({ prop: 0 });
create(null);

//에러사례
create(42);
create("string");
create(false);
create(undefined);

/* Array */
`JS처럼 값들을 배열로 다룰 수 있게 한다. 투가지 방법으로 사용가능하다.`;

`배열 요소를 나타내는 타입뒤로 [] 사용.`;
let list: number[] = [1, 2, 3];
let strlist: string[] = ["a", "b", "c"];

`제너릭 배열 타입을 사용`;
let list2: Array<number> = [1, 2, 3];
let strList2: Array<string> = ["a", "b", "c"];

/* Tuple */
`튜플 타입을 사용하면, 요소의 타입과 개수가 고정된 배열을 표현할 수 있다.
단, 요소들의 타입이 모두 같을 필요는 없다.
`;

let x: [string, number];

//허용
x = ["hi", 20];

//실패
x = [10, "hi"]; //vsc가 친절히 빨간줄을 그어준다.

/* Enum */
`JS의 표준 자료형 집합과 사용하면 도움이 될만한 데이터 형이 enum 이다.`;

enum Color {
  Red,
  Green,
  Blue,
}

let grn: Color = Color.Green;

`enum은 기본적으로 0부터 시작하여 멤버들의 번호를 매긴다. 임의로 번호를 바꿀수있다.`;

enum Color2 {
  Red = 1,
  Green,
  Blue,
}

`혹은 모든 값을 수동으로 설정할 수 있다.`;

enum Color3 {
  Red = 3,
  Green = 5,
  Blue = 7,
}

`유용한 기능중 하나는 매겨진 값을 사용해 enum 멤버의 이름을 알아낼 수 있다.

예를 들어 Color3에서 3이라는 값이 담긴 아니면 enum 의 값이 담긴 Color enum 멤버와
매칭되는지 알 고자할때 아래와 같은 방법으로 파악할 수  있다.
`;

let colorName: string = Color[2];
console.log(colorName); // Color2의 경우 'Green'

let colorName2: string = Color[5];
console.log(colorName2); // Color3의 경우 'Green'

/* Any */
`애플리케이션을 만들 때, 알지 못하는 타입을 표현해야할 수 있다. 어떠한 타입이 존재함을 알리는게 any이다.

타입 검사를 하지 않고, 그 값들이 컴파일 시간에 테스트를 통과해야할 때가 있다. 
아니면 그냥 단순히 특정 타입을 지정하지 않고 아무거나 넣을때, 이럴 때 any 타입을 사용할 수있다.`;

let noneType: any = 4;

noneType = "maybe a string instead";
noneType = false;

let anylist: any[] = [1, true, "free"];

`Any타입과 Obejct 타입의 차이점`;
//any Type
let anyType: any = 5;
anyType.toFixed(); // 성공, toFixed는 존재한다. (그렇지만 컴파일러는 검사하지않음)
anyType.anotherMethod(); //성공, anotherMethod는 런타임엔 존재할 것이다.

//Object Type
let objectType: Object = 5;
objectType.toFixed(); // 오류: 프로퍼티 'to Fixed'는 'Object'에 존재하지 않는다.

/* Void */
`void는 어떤 타입도 존재할수 없음을 알리기위해 사용하며, any 반대의 타입일 것이다.`;

function names(): void {
  console.log("void Message");
}
`void를 타입 변수에 선언하는 것은 유용하지 않아 사용하지 않는다.
예를들어 --strictNullCehcks 모드를 사용하지 않을 경우

그 변수에 null 또는 undefined만 할당할 수 있기때문이다.
`;
let unusable: void = undefined;
unusable = null; // --strictNullchekcs 모드 사용하지 않을때만

/* Null */ /* Undefined */
`JS처럼 각자 자신의 타입을 가지고있고, 따로 사용한다.


모든 타입의 하위로 각각의 타입의 하위요소로 할당할 수 있다.
`;

let undefinedVarible: undefined = undefined;
let nullVarible: null = null;

/* Never */

`never는 절대 반활할 수 없는 타입을 나타낸다. 예를 들어 함수 표현식이나 화살표 함수 표헌식에서 
항상 오류를 발생시키거나 절대 반환하지 않는 타입으로 쓰인다.
`;

//never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

//반환 타입이 never로 추론
function fail() {
  return error("어떤 실패원인");
}
