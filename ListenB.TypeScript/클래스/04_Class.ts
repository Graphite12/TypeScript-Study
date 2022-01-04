//타입스크립트의 Class
class Units {
  name: string;
  text: string;
  constructor(name: string, text: string) {
    this.name = name;
    this.text = text;
  }
  start() {
    console.log(this.text);
  }
}

const battle_crusier = new Units('전투순양함', '누가호출하셨소');

//또 다른 방법
class Units2 {
  constructor(
    public name: string,
    readonly text: string,
    private price: number,
  ) {
    this.name = name;
    this.text = text;
    this.price = price;
  }
  start() {
    console.log(this.text);
    console.log(this.price);
  }
}
