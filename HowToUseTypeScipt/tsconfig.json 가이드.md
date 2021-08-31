## tsconfig.json

vsc는 기본적으로 typescript에 대한 intellisense를 지원한다. 이 intellisense가 `.ts` 파일을 인식하는 방법을 제어하기 위해서 `tsconfig.json`을 작성해야 한다.

하지만 vsc와 tsc는 완벽히 분리되어있다.
그렇기 때문에 vsc 에디터 상에서는 에러가 발생하지 않지만 tsc를 통해서 컴파일을 시도할 경우 에러가 발생할 수 있다.

### tsconfig.json 설정

[타입스크립트 공식문서](https://www.typescriptlang.org/tsconfig) 를 참고하여 대표적으로 설정할것 들을 작성해보자

#### 파일 설정

```js
{
  "compilerOptions": {},
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts",
    "hello.ts"
  ]
}
```

프로그램에 포함할 파일의 허용 목록을 지정할 때 위와 같이 작성한다. 파일을 찾을 수 없으면 오류 발생

일일히 파일을 찾아

`tsc target.ts`를 적용하지 않아도

`tsc`하나만으로 `js`로 변환이 가능하다.

#### include 설정
