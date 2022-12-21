# 20221201_frontendproject

### 221206
- 회원 테이블 구상 및 생성
- 회원가입 페이지 html/css 구현
- 회원가입 기능 구현
    - 각 입력칸 데이터 예외처리 및 중복확인 기능
    - 데이터가 입력되지 않거나 잘못 입력된 경우 해당 input 태그로 focus
    - 데이터 서버로 전송
    - 전송된 데이터는 DB에 Insert됨
    - 비밀번호는 md5로 암호화 한 값 저장
 
<br/>[221206 velog 정리](https://velog.io/@lhj9520/221206-%ED%94%84%EC%97%946-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82)

추가해야 할 기능
- 자동로그인 -> 못할듯
- SNS 간편 로그인 -> 서브페이지 기능 구현 후
- ID 찾기 -> 서브페이지 기능 구현 후
- PW 찾기 -> 서브페이지 기능 구현 후
이거 다 구현하면 로그인 페이지 기능은 끝날듯?

### 221212
js소스 폴더 분리
메인에서 메뉴 선택하면 각 페이지로 이동(기본틀만 서브 페이지 디자인 및 기능 구현은 진행 할 예정)<br/>
로고 이미지 및 페이지 색상 변경<br/>
분명 벨로그에 정리해놨는데 글이 사라짐..?

추가해야 할 서브페이지(대충 정리 12월 끝나기전에 제발 다 구현하자..)
- 여행모임
    - 모임 생성
    - 친구 초대/강퇴-방장권한
    - 계획(항목 정의 필요) crud
- 마이페이지
    - 내정보 확인 및 수정
    - 내친구목록 및 관리/친구추가신청목록 -> 나의메이트 페이지로 기능 분리
    - 내가 생성한 모임 목록(추가,수정,삭제)  -> 나의여행 페이지로 기능 분리
- 이용방법 -> 글,그림 이용하여 설명해주는 페이지


### 221213
구현 기능
- 메뉴바 컴포넌트화
- 모달팝업 컴포넌트화
- 나의메이트 페이지
    - 메이트 목록 업데이트
    - 메이트 요청 확인 모달팝업으로 구현
    - 메이트 요청 수락 or 거절 기능
    - 수락하면 메이트 목록 업데이트

[221213 velog 정리](https://velog.io/@lhj9520/221213-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B83)<br/>
내일은 메이트 관련 기능 마무리하고 여행모임 기능 구현 진행할 예정<br/>
메뉴바 항목 : 커뮤니티, 나의메이트, 나의여행,이용방법,로그인(마이페이지,로그아웃)<br/>

### 221214
구현 기능
- 메이트 검색
- 메이트 요청 신청
- 메이트 삭제

[221214 velog 정리](https://velog.io/@lhj9520/221214-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B84)<br/>
나의 여행 페이지 기능 구현
여행 뷰 페이지 기능 구현
