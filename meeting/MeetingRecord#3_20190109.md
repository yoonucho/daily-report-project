# 기록

## 몽고DB를 쓴 이유

- NoSQL이 뭔지 알고 있었음, firebase 사용하면서 알게 된 개념
- NoSQL 중에 MongoDB가 있음 => document
- Redis도 NoSQL => key-value
- NoSQL에서 특정 저장하는 방식에 대해서 구분하지 않고 적절하게 대응하는 DB가
  - AWS DynamoDB
  - Azure CosmosDB
- 왜? 이런 DB를 만들었을까요?
  - 이전부터 NoSQL + RDB 혼합한 형태로 DB를 구성하는 경우가 종종 있다보니 이런 서비스가 생김

## cors

- CRA(Create React App)로 만들었을 때, ???

## Node.js express server

- MongoDB Setup 내용 필요
  - 미리 MongoDB exe 실행, 프로세스 활성화
- /today/:date
  - date 가져오기: req.params.date
- DB가 응답이 없을 경우
  - 웹 서버에서 적절하게 예외 처리 => timeout

## Server API

- API 사용 문서가 반드시 필요
  - 예) [https://developers.kakao.com/docs/restapi/kakaopay-api](https://developers.kakao.com/docs/restapi/kakaopay-api)

## 문서 작업의 중요성

- 옷을 만드는 작업의 예
  - 설계 도면을 보고 옷을 자르고 만드는 작업을 하는게 상식
- 그런데 코딩은?
  - 일단 코딩부터 함, 뿌듯하지만 사실은 본인만 뿌듯한 것.
  - 설계 도면에 해당하는 문서가 필요.
- 포트폴리오 사이트도 그런 면에서 일맥상통하는 부분이 있음
  - 디자인 시안의 경우
- 코드는?
  - 문서가 필요하겠죠?

## TDD

- Test Driven Development
- TDD와 UnitTest는 다른 것
  - TDD: 어떤 기능 뿐만 아니라 동작에 관련된 테스트 코드를 미리 구현해 놓음, 그 후에 동작하는 코드를 짜 나가는 과정
  - UnitTest: 데이터가 달라지는 것에 따른 기능 검증을 위한 테스트 코드를 구현. 예외 처리, crash가 일어나는지 안정성 체크의 목적이 더 큼.
- Unit test를 해 보시고 저와 계속 피드백 받아서 진행해 보는 형태로.
- 이 내용의 관심 분야는 software testing의 한 분야로 software enginering의 한 축입니다.