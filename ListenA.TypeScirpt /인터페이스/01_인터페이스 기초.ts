//Interface

/**
 * 타입스크립트에서 객체를 생성하면 아래와 같이 작성해준다.
 */

// 자바스크립트에서는 object는 항상 상위타입이다.
let powerObj: object = {};

//보다 정확한 타입을 위해 object대신 속성들의 타입을 개별적으로 지정해준다.
let engines: { unreal: string; snowdrop: string; otherNum: number } = {
  unreal: 'unreal',
  snowdrop: 'snowdrop',
  otherNum: 123,
};

console.log(engines.otherNum);
console.log(engines.snowdrop);
console.log(engines.unreal);
/**
 * 개발자는 engines라는 변수가 담고 있는 객체는
 * string타입의 unreal, snowdrop, number타입의 otherNum 속성을 가지고 있는것을 알고있다.
 *
 * 타입스크립트에서는
 * 이 객체의 표현을 사전에 미리 작성해 주어 어떤 속성이 들어갈지 사전정의가 가능하다.
 */

interface Engines {
  unreal: string;
  snowdrop: string;
  otherNum: number;
}

let engines_clone: Engines = {
  unreal: 'unreal',
  snowdrop: 'snowdrop',
  otherNum: 123,
};

let engines_clone2: Engines = {
  unreal: 'unreal',
  snowdrop: 'snowdrop',
  otherNum: 123,
};

/** 보다 깔끔하고, 해당 인터페이스가 다른 변수에도 적용이 가능하다는 것이 특징이다.
 *
 * 하지만, 반드시 인터페이스의 정의된 속성들을 모두 사용해야하며, 그외의 경우 에러를 보여준다.
 */

//A. 없는 속성을 사용할경우
let engines_error_clone: Engines = {
  cry: 'cry', //인터페이스 Engines에는 cry라는 속성이 존재하지 않는다.
};

//B. 속성을 하나라도 빼먹을 경우

let engines_error_clone2: Engines = {
  //otherNum의 속성이 필수로 들어가야한다.
  unreal: 'unreal',
  snowdrop: 'snowdrop',
};
