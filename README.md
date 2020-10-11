This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## boilerplate 설명

기본적으로 CRA의 typescript template를 이용하여 생성한 boilerplate 입니다.

### eslint

아래 참고 사이트의 `eslint config`를 따라하여 진행하였습니다.
다른점이 있다면 `eslint-plugin-header` 를 삭제한 버전입니다.

참고 사이트 링크

### folder structure

아래 참고 사이트의 폴더 구조를 따라하여 진행하였습니다.

참고 사이트 링크

각각의 폴더가 의미하는건 다음과 같습니다.

- `assets`

  이미지나 로고 같은 사진 파일들을 저장합니다.
 
- `lib`

  다른 라이브러리를 사용할 때 사용합니다.
  
  그 라이브러리에 대한 `init` 코드와 같은 로직들을 집어 넣어 줍니다.
  
- `components`

  재사용 가능한 컴포넌트들에 대한 코드를 넣어줍니다. 
  
  `components`는 `page`에서 호출되어 사용되며 예로는 `form`, `button`, `carousel` 등이 될 수 있습니다.

- `pages`

  `page`들 역시 `component`라고 할 수 있습니다.

  다른점이라면 한 화면에 대한 모든 로직들이 존재하며 라우터에게 호출됩니다.
   
- `services`

  비지니스 로직들이 존재하는 폴더입니다.
  
  `lib`와 다른점은 다른 라이브러리를 사용하기 위한 로직이 아니라는 것입니다.  
  
  `api`를 사용하기 위한 로직들이나, `Date`나 `String Format` 로직들이 존재 할 수 있습니다.
  
- `AppRoutes`

  `CRA`의 App 컴포넌트 역할을 합니다.
  
  다만 이 컴포넌트에는 라우팅에 관한 로직들만 존재하기 때문에 이름에 `Routes`를 추가 했습니다.

## Available Scripts

In the project directory, you can run:

### `yarn start`

`3000` 포트로 서버를 실행시켜줍니다.

### `yarn test`

테스트를 실행시켜줍니다.

### `yarn build`

build 파일을 생성해 줍니다.

### `yarn eslint`

`.eslintrc` 에 맞추어 어떤 파일에서 rule을 어긴 문법이 있는지 알려줍니다.

### `yarn eslint:fix`

`rule` 에 맞추어 모든 파일들을 포맷팅합니다.


