type Score = 'A' | 'B' | 'C' | 'D';

interface Property {
  a: string;
  b: boolean;
  c: number;
  d?: string;
  readonly s: boolean;
  [g: number]: Score;
}

/**
 *  위 Property 인터페이스에서
 *  d?는 Optional한 속성이다.
 *
 *  즉, 가져다 쓰기위해서 필수적으로 사용하지 않아도 되는 속성이다.
 *
 */
let target: Property = {
  a: 'kim',
  b: true,
  c: 5,
  s: false,
  1: 'C',
  2: 'D',
};
