
# board
사실상 devent-frame의 다음 작품.

[https://github.com/Team-DeVent/devent-frame]() 에서 TypeScript로 전환 한 후 게시판 기능을 강화하고 React를 적용한 프로젝트 입니다. 2022년 1월 16일부터 시작한 Frame 프로젝트는 현재까지 다양한 사이드 프로젝트에 적용되어 왔습니다. 현재 1번의 메이저 업데이트를 통해 리팩토링 해왔고 수 많은 프로젝트의 보일러프로젝트 역할을 수행했습니다. 개발 생산성 향상과 프로젝트 시작 주기 단축, 개발 속도 단축등 여러 부문에서 이점을 가져다 주었습니다.

다만 프레임 프로젝트는 단점도 존재했습니다. 보일러프로젝트의 코드를 수정해야 한다면 같은 코드를 이 보일러프로젝트를 이용한 다른 프로젝트에도 동일하게 적용되어야 했습니다. 이 경우 수정을 여러번 거처야 하며 프레임 프로젝트 자체의 수정을 힘들게 하는 원인이 되었습니다. 

이 문제를 해결하고자 보드에서는 TypeScript, React, Redux, Docker, Oauth등 Frame 프로젝트에서 문제가 되었던 기술 부문을 대폭 개선했습니다. 배포는 더 자유로워졌고 개발 속도는 향상되고 있습니다. 이 프로젝트를 기반으로 하는 프로젝트는 현재 Scrap.devent.kr등이 있습니다. 

## 설치

git clone 명령을 통해 실행할 수 있습니다.

```
git clone https://github.com/testprocess/board.git
```

의존성을 설치 합니다.

```
npm install
```


아래 개발 명령을 통해 프로젝트를 구동합니다. 

```
npm run start:dev
npm run bundle
npm run compile
```

## 설정

./server/config/oauth.ts에서 Google Oauth GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET을 설정하세요. 구글 로그인을 활성화하고자 한다면 IS_ENABLE 옵션을 true로 변경하세요.

./server/config/server.ts에서 uri를 변경합니다. 개발 옵션에 따라 조정해주세요.

## 배포

해당 프로젝트는 GoCD로 배포됩니다. 다른 CI/CD를 통해 배포한다면 아래 환경변수 세팅 후 docker compose 로 빌드하세요.
`MYSQL_ROOT_PASSWORD=<데이터베이스 비번>`
`MAIN_JWT_SECRET=<JWR SECRET>`

```
docker compose build
docker compose up
```