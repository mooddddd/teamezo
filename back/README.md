# Community Project - Refactoring

## 기존 디렉토리 구조

<br />

```
|
|--dummy : 더미 데이터
|--lib : Jsonwebtoken 구현 --> 라이브러리로 대체
|--middlewares : multer 설정 --> nest 설정으로 변경 
|--models : sequelize 설정 --> typescript로 변경
|--routes : router 설정 --> nest 설정으로 변경
|--src --> nest 설정으로 변경
|   |-- index : 메인 페이지 
|   |-- search : 검색 기능
|   |-- auth : 로그인 검증
|   |-- user : 유저 정보
|   |-- board : 게시판 기능
|   |-- notice : 공지사항 기능
|   |-- qna : QnA 기능
|   |-- admin : 관리자 페이지
|
|--uploads : 파일 업로드 위치
|
```

## issue

- 미들웨어 장착하는 방법
- DB에 연결하는 방법