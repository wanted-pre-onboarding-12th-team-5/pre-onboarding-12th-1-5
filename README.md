## 🟦 원티드 프리온보딩 인턴십 1주차 과제 - 5팀

- 본 repository는 [원티드 프리온보딩 프론트엔드 선발 과제](https://github.com/walking-sunset/selection-task)를 다뤘습니다.
- 같은 기능을 어떻게 구현했는지 팀원들과 토의하고, 가장 나은 방식이 무엇인지 고민하였습니다.
- 토의를 통해 도출된 Best Practice를 합친 결과물입니다.

### 기술 스택

<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
</div>

## 🗓️ 프로젝트 기간

### 2023.8.22 ~ 2023.8.25 (4일)

<br />

## 📌 프로젝트 실행 방법

1. Clone the repo

```javascript
$ git clone https://github.com/wanted-pre-onboarding-12th-team-5/pre-onboarding-12th-1-5.git
```

2. Install NPM packages

```javascript
$ npm install
```

3. Getting Started

```javascript
$ npm start
```

<br/>

## 🚀 배포

### [원티드 프리온보딩 인턴십 1차 과제 - 5팀 배포 링크](http://preonboarding-frontend-12th-1-5.s3-website.ap-northeast-2.amazonaws.com/)

| 🔎 테스트 계정 |                  |
| :------------: | :--------------: |
|     EMAIL      | team5@wanted.com |
|       PW       |     wanted05     |

## ⭐️ 팀 구성원 및 역할

|                          최지윤                           |                           유지혜                           |                           김태근                           |                          최선호                           |                          이효식                           |                 김형일(팀장)                 |
| :-------------------------------------------------------: | :--------------------------------------------------------: | :--------------------------------------------------------: | :-------------------------------------------------------: | :-------------------------------------------------------: | :------------------------------------------: |
|          [chichoon](https://github.com/chichoon)          |        [dbwlgp1yng](https://github.com/dbwlgp1yng)         |       [taegeun1111](https://github.com/taegeun1111)        |        [preferchoi](https://github.com/preferchoi)        |           [teetee6](https://github.com/teetee6)           | [brother1](https://github.com/brother1-4752) |
| ![](https://avatars.githubusercontent.com/u/37893979?v=4) | ![](https://avatars.githubusercontent.com/u/126330595?v=4) | ![](https://avatars.githubusercontent.com/u/122959190?v=4) | ![](https://avatars.githubusercontent.com/u/74041004?v=4) | ![](https://avatars.githubusercontent.com/u/17748068?v=4) |            ![Alt text](image.png)            |
|                        투두리스트                         |                           라우팅                           |                            투두                            |                         회원가입                          |                          로그인                           |                프로젝트 셋팅                 |

<br />

## [📋 협업 컨벤션](https://www.notion.so/brotherone/5-fd85a49386724f34abe49a309e9b9e3e)

### 1. Husky && lint-staged (commitlint 적용)

### 2. Commit message

| Tag Name | Explanation                                                            |
| -------- | ---------------------------------------------------------------------- |
| build    | 시스템 또는 외부 종속성에 영향을 미치는 변경사항 (npm, yarn 레벨)      |
| chore    | 코드나 기능 변경 없는 단순 수정                                        |
| docs     | documentation 변경                                                     |
| feat     | 새로운 기능                                                            |
| fix      | 버그 수정                                                              |
| refactor | 버그를 수정하거나 기능을 추가하지 않는 코드 변경, 리팩토링             |
| style    | 코드 의미에 영향을 주지 않는 변경사항(formatting, colons, white space) |

### 3. Issue && PR 템플릿 통일

### 4. Git-flow branch전략(feat/세부기능 -> develop -> master)

<br />

### 🗂️ 폴더 구조

```
📦src
 ┣ 📂components
 ┣ 📂hooks
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜useCheckToken.ts
 ┃ ┗ 📜useInput.ts
 ┣ 📂pages
 ┃ ┣ 📂Home
 ┃ ┣ 📂SignIn
 ┃ ┣ 📂SignUp
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ 📜AddTodoForm.tsx
 ┃ ┃ ┣ 📜TodoElement.tsx
 ┃ ┃ ┣ 📜TodoList.tsx
 ┃ ┃ ┣ 📜todo.d.ts
 ┃ ┃ ┗ 📜Todo.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂services
 ┃ ┣ 📜signup.ts
 ┃ ┗ 📜todoInstance.ts
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ┃ ┗ 📜validateInput.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
```

## 💡 상세 기능

### 1. 로그인

<details>
  <summary>설명</summary>
  <div>
  
  ```jsx
import axios from 'axios';
```

백엔드와 소통할 api인스턴스를 만듭니다.

```jsx
const todoInstance = axios.create({
baseURL: 'https://www.pre-onboarding-selection-task.shop/',
headers: {
Authorization: Bearer ${localStorage.getItem('token')},
'Content-Type': 'application/json',
},
});

```

다음과 같이 signIn api인스턴스 메소드를 만들고 export한 후,

```jsx
export function signIn(email: string, password: string) {
  return todoInstance.post('/auth/signin', { email, password });
}
```

해당 api 메소드를 가져다 씁니다! 그러면 일일이 axios를 import할 필요가 없어 유용합니다!

```jsx
const handleSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
try {
const response = await signIn(email, password);
console.log(response);
if (response.status === 200) {
alert('로그인에 성공했습니다. \n투두리스트 화면으로 이동합니다.');
localStorage.setItem('access_token', response.data.access_token);
navigate('/todo');
} else {
alert(response);
}
} catch (error) {
const axiosError = error as AxiosError;
console.log(axiosError.response?.data);
setEmail('');
setPassword('');
}
};
```

  </div>
</details>

### 2. 라우팅

<details>
  <summary>설명</summary>
  <div>

```js
const token = localStorage.getItem('access_token');
```

'useCheckLogin' 커스텀 훅을 통해 로그인 상태를 확인하고 페이지 이동을 처리합니다.

```js
const pathname = window.location.pathname;
```

window.location의 pathname을 사용하여 현재 페이지의 경로를 가져옵니다.

```js
const nav = useNavigate();
```

useNavigate 함수를 사용하여 라우팅 처리를 합니다.

```js
if (token) {
  const allowedPaths = ['/signin', '/signup', '/'];
  if (allowedPaths.includes(pathname)) {
    navigate('/todo');
  }
} else {
  const restrictedPaths = ['/todo'];
  if (restrictedPaths.includes(pathname)) {
    navigate('/signin');
  }
}
```

다음과 같이, 페이지 이동을 처리합니다. 로그인된(토큰이 있는) 상태에서 특정 경로(/signin, /signup, /)로 접근 시, 자동으로 페이지를 /todo로 리다이렉션합니다. 로그인되지 않은(토큰이 없는) 상태에서 특정 경로(/todo)로 접근하는 경우, /signin 페이지로 리다이렉션합니다.

</div></details>

### 3. 투두리스트 화면과 debouncing에러 처리 및 배포 자동화

<details>
  <summary>설명</summary>
  <div>
투루리스트 출력 및 연속하여 삭제 버튼 클릭시 발생한 debouncing 에러를 처리하였습니다.

```js
const [isEditing, setIsEditing] = useState(false);

const handleClickDelete = async (todoId: number) => {
  if (clickEnabled) {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    if (confirmDelete) {
      setClickEnabled(false);
      await deleteTodo(todoId).then(() => {
        setTodoList((prev) => prev.filter((element) => element.id !== todoId));
        setClickEnabled(true);
      });
    }
  }
};
```

더불어, AWS S3 배포 및 Github Actiond을 통해 Repository Push 시 Master 브랜치에 배포 자동화를 하였습니다.

```yaml
name: CI/CD

on:
  push:
    branches:
      - master
  workflow_dispatch:

jobs:
  cicd:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          ref: 'master'
      - run: npm ci
      #      - run: npm run test
      - run: npm run build
      - name: deploy to s3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: 'ap-northeast-2'
          SOURCE_DIR: 'build'
```

  </div>
<details>
