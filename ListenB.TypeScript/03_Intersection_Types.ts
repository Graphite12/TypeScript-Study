//인터섹션(Intersection) Types

interface A {
  name: string;
  price: number;
  start(): void;
}

interface B {
  name: string;
  color: string;
  made(): void;
}

const ScObject: A & B = {
  name: '에이',
  start() {},
  color: 'red',
  made() {},
  price: 5000,
};
