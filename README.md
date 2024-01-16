
# 밸런스게임


## 🖥️ 프로젝트 소개
밸런스 게임을 할 수 있는 사이트입니다. 재미있는 선택지를 작성해 보세요~!
<br>

## 🕰️ 개발 기간
* 

### 🧑‍🤝‍🧑 맴버구성
 - 

### ⚙️ 개발 환경


## 📌 주요 기능
#### 로그인 - 
- ID찾기, PW찾기
- 로그인 시 쿠키(Cookie) 및 세션(Session) 생성
#### 회원가입 - 
#### 밸런스게임 생성 수정 삭제
#### 밸런스게임 좋아요 기능

```
ec2_deploy_balanceGame
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-4aad0f688ac5f15783c2f25fb11352d9c1a8824f.idx
│  │     └─ pack-4aad0f688ac5f15783c2f25fb11352d9c1a8824f.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ main
│     │  └─ test
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ BE_with_express
│  ├─ app.js
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  └─ yarn.lock
├─ FE_with_react
│  ├─ build
│  │  ├─ asset-manifest.json
│  │  ├─ background
│  │  │  ├─ bgDeco.png
│  │  │  ├─ cardlist.png
│  │  │  ├─ error.png
│  │  │  ├─ errorDeco.png
│  │  │  ├─ Login.png
│  │  │  ├─ signup.png
│  │  │  └─ submit.png
│  │  ├─ images
│  │  │  ├─ Balance Game.png
│  │  │  ├─ cardlist.png
│  │  │  ├─ favicon.ico
│  │  │  ├─ Frame 36.png
│  │  │  ├─ gameImg-1.png
│  │  │  ├─ homeInfo.png
│  │  │  ├─ Logo.png
│  │  │  └─ LogoNav.png
│  │  ├─ index.html
│  │  ├─ manifest.json
│  │  ├─ robots.txt
│  │  └─ static
│  │     ├─ css
│  │     │  ├─ main.c2413297.css
│  │     │  └─ main.c2413297.css.map
│  │     └─ js
│  │        ├─ main.378cc964.js
│  │        ├─ main.378cc964.js.LICENSE.txt
│  │        └─ main.378cc964.js.map
│  ├─ db.json
│  ├─ favicon.ico
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ background
│  │  │  ├─ bgDeco.png
│  │  │  ├─ cardlist.png
│  │  │  ├─ error.png
│  │  │  ├─ errorDeco.png
│  │  │  ├─ Login.png
│  │  │  ├─ signup.png
│  │  │  └─ submit.png
│  │  ├─ images
│  │  │  ├─ Balance Game.png
│  │  │  ├─ cardlist.png
│  │  │  ├─ favicon.ico
│  │  │  ├─ Frame 36.png
│  │  │  ├─ gameImg-1.png
│  │  │  ├─ homeInfo.png
│  │  │  ├─ Logo.png
│  │  │  └─ LogoNav.png
│  │  ├─ index.html
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ App.test.js
│  │  ├─ axios
│  │  │  └─ api.js
│  │  ├─ components
│  │  │  ├─ Button.jsx
│  │  │  ├─ Flex.jsx
│  │  │  ├─ GlobalStyle.jsx
│  │  │  ├─ Header.jsx
│  │  │  └─ Input.jsx
│  │  ├─ features
│  │  │  ├─ card
│  │  │  │  └─ Comments.jsx
│  │  │  └─ comments
│  │  │     ├─ AddCommentForm.jsx
│  │  │     ├─ CommentsAList.jsx
│  │  │     └─ EditComment.jsx
│  │  ├─ Hooks
│  │  │  ├─ LoginBtn.jsx
│  │  │  ├─ NInput.jsx
│  │  │  └─ useInput.js
│  │  ├─ image
│  │  │  └─ Pasted.png
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ jsconfig.json
│  │  ├─ pages
│  │  │  ├─ CardList.jsx
│  │  │  ├─ Detail.jsx
│  │  │  ├─ Edit.jsx
│  │  │  ├─ Error.jsx
│  │  │  ├─ Home.jsx
│  │  │  ├─ Login.jsx
│  │  │  └─ Register.jsx
│  │  ├─ redux
│  │  │  ├─ config
│  │  │  │  └─ configStore.js
│  │  │  └─ modules
│  │  │     ├─ cardsSlice.jsx
│  │  │     ├─ commentASlice.jsx
│  │  │     ├─ commentSlice.jsx
│  │  │     ├─ editSlice.jsx
│  │  │     ├─ likeSlice.jsx
│  │  │     ├─ login.js
│  │  │     └─ signup.js
│  │  ├─ reportWebVitals.js
│  │  ├─ setupTests.js
│  │  └─ shared
│  └─ yarn.lock
└─ README.md

```