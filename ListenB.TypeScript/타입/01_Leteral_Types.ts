// 리터럴(Literal Types)
const username1 = 'kim';
//유니온 타입의 변수
let username2: string | number = 'Tom';

username2 = 7;
//상수이므로 'username1'에 할당할 수 없습니다.
username1 = 5;

//문자형 리터럴 타입
type Job = 'Programmer' | 'Developer' | 'Pro Gamer';

interface UserA {
  name: string;
  job: Job;
}

const Man: UserA = {
  name: 'idiot',
  job: 'Homeless', //Job안에는 노숙자라는 문자가 존재하지 않는다.
};

//숫자형 리터럴 타입도 사용가능
interface Languages {
  name: string;
  nation_code: 1 | 2 | 3;
}
