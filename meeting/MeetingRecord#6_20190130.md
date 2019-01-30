# 기록

## callback - 1

- 내가 제어권을 가지지 않는 함수를 짠다는 개념
- 내가 제어권을 가지는 함수란
  - [1,2,3].map();
- 내가 제어권을 가지지 않는 함수란
  - [1,2,3].map(?);
- 이제 callback을 검색하셔서 이게 뭔지를 잘 찾아보세요
  - 사람들이 이해하고 생각하는 수준이 다 제각각
  - 그래서 여러 사람들의 글을 보고 공통된 진리를 이해해 보세요

## callback - 2

- 언제 호출될지 모르는 함수, 사실은 asynchronous(비동기)
- callback이 호출이 되는 시차가 존재
- 그 callback들이 2중, 3중으로 겹쳐지고 그 안에서 동기 코드를 짜려고 하면 callback hell

## So, Promise

- callback을 써서 비동기 문맥이 난무하는 코드는
  - 가독성이 떨어지고
  - 코드를 수정하기도 만들기도 어려워요
- 그래서 그 비동기로 도는 callback들을 어떻게든 동기식으로 짤 수 있게 만들어 주는 패턴

## async, await

- 이제 Promise를 써서 비동기로 받았던 결과들 마저도 없애고 동기식 코드 쩌럼 짤 수 있게 만들어주는 키워드
- 도전과제

## Blog에 warning에 대한 문제

- setState가 비동기 코드 안에 있어서 발생한 문제
- axios를 async await 코드로 바꿔보고 테스트 해 보세요.
- return 결과가 promise인지 확인

``` javascript
try {
    const response = await axios.get("http://localhost:4000/todos/")
    this.setState({ todos: response.data });
}
catch (error) {
    console.log(error);
}
```