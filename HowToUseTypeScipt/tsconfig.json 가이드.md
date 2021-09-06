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

프로그램에 포함한 파일 이름 또는 패턴의 배열을 지정한다. `include`와 `exclude` 방식은 glob패턴을 지원한다.

ex// glob 패턴이란??

- 같은 와일드카드 문자를 사용하여 일정한 패턴을 가진 파일 이름들을 지정하기 위한 패턴이다.

```js
{
"include": ["src/**/*", "tests/**/*"]
}
```

- `*`: 0개 이상의 문자열과 일치(디렉토리 구분기호 제외)
- `?`: 하나의 문자와 일치 (디렉터리 구분기호 제외)
- `**/`: 단계에 관계없이 아무 디렉터리와 일치

만약 glob 패턴에 파일 확장자를 선언하지 않을경우 ts가 지원하는 확장자만을 포함한다.

`.ts`,`.tsx`,`.d.ts` 등이 있으며, `allowJs`를 활성화 시키면 `.js`와 `.jsx`도 포함한다.

#### exclude 설정

`exclude`로 `include`에 지정한 파일이나 패턴을 제외시킬 수 있다.
하지만 `include`에 지정한 파일만 가능하다는 점이있다.

`exclude`를 지정하지 않으면 기본값은 아래와 같음

`["node_modules", "bower_components", "jspm_packages"],`

```js
{
    "exclude": [
        "node_modules",
        "build",
        "**/*.spec.ts"
    ]
}
```

### compilerOption 설정

```js
{
  "compilerOptions": {},
  "files": [
  ]
}
```

file과 include, exclude를 알아봤으니 compilerOptions를 알아보자

compilerOptions는 선택된 파일들을 처리하는 설정이 된다. 수많은 옵션들이 존재하기 때문에 대표적인 것들을 알아보자.

`target`: `defalult`는 ES3이지만, `--init`을 통해 생성되는 것은 ES5로 생성된다. target은 TypeScript가 JavaScript 코드로 컴파일 되는 버전을 결정한다. ES6로 설정하면 된다.
