//인터페이스에서 제너릭2
interface U {
  name: string;
  age: number;
}

interface C {
  name: string;
  color: string;
}

interface BK {
  price: number;
}

const user: U = { name: 'Kim', age: 10 };
const car3: C = { name: 'KonaEV', color: 'Vanta_Black' };
//books인자는 name이라는 속성이 없다!!!
const books: BK = { price: 3000 };

/**
 * 이 함수는 인자의 name이라는 속성을 반환한다.
 * 
 * 하지만 어떤 녀석은 name이라는 속성을 가지고있지 않음에도 불구하고 에러를 보여주지 않는다.
 * 
 * 그럴땐 제너릭을 이용해보도록하자.

*/
function showNames1(data): string {
  return data.name;
}

//제너릭을 추가했지만. T형식에 name이라는 속성이 존재하지 않는다고 나온다.
function showNames2<T>(data: T): string {
  return data.name;
}

function showNames3<T extends { name: string }>(data: T): string {
  return data.name;
}

showNames3(user);
showNames3(car3);
//books에는 name이라는 속성이 없기 때문에 이 함수는 books를 매개변수로 사용이 불가능하다.
showNames3(books);
