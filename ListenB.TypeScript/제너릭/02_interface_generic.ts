//인터페이스의 경우 제너릭

interface Mobile<T> {
  name: string;
  price: number;
  option: T;
}

const a1: Mobile<{ color: string; coupon: boolean }> = {
  name: 's21',
  price: 21000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const a2: Mobile<boolean> = {
  name: 's21',
  price: 21000,
  option: false,
};
