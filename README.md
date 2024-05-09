# SPAM-Web-Basic

첫 번째 커밋이다~!

# Markdown 기본문법

## h2

### h3

#### h4

##### h5

###### h6

p태그

-1번
-2번
-3번

```javascript
console.log("Hello, World");
```

# javScript 공부

## 실행하는 방법

#### - js는 어떤 환경에서도 사용이 되어야 되기 때문에 웹브라우저에서 쓰인다. js가 사용되려면 live sever를 사용하여야 한다.

#### - app.js 파일에서 console.log("Hello Wolrd");를 치고,index.html파일에서 body태그와 html태그 사이에 srcript:src태그를 사용하고 /js 엔터를 하고, live sever에서 F12를 눌러 console에 들어가면, Hello World가 출력 된다.

#### - index.html파일에서 script태그 console.log("Hello Wolrd");등 js문법을 사용해도, live sever에 출력이 된다.

#### - js는 터미널을 통해서도 출력이 가능하다.

#### - 경로 :

#### 1. js(script태그 사용하면 생략가능)-> html-> live sever-> console

#### 2. js-> 터미널 or Run Code

#### 변수 하나의 값을 저장하기 위해 확보한 메모리 공간 자체또는 그 메모리 공간을 식별하기 위해 붙인 이름

즉, 값을 저장하고 참조하는 메커니즘으로, 값의 위치를 나타내는 장치의 이름

- camel표기법, 숫자, $, \_만 가능
- 첫글자는 숫자 불가
- 예약어 불가
- 협업시 잘 이해될 수 있도록 규칙에 맞춰서 작성하기
- 명사라면 data, 동사라면 true/false 등
- const변수는 보통 고정값을 넣음

#### var : 재선언 가능, 재할당 가능, 호이스팅, 전역변수

호이스팅 : 밑에서 선언한 변수를 위에서도 쓴다.

let : 재선언 불가능, 재할당 가능, 블록범위 변수, 많이 사용

const : 재선언 불가능, 재할당 불가능, 상수

자바스크립트 자료형

1. 숫자 : 정수 및 부동소수점
2. 문자열 : 텍스트
3. 불리언 : true 또는 false
4. null : 값이 존재하지 않음
5. undefined : 변수가 초기화되지 않았거나 값이 할당되지 않았음
6. 심벌(Symbol) 고유하고 변경 불가능한 데이터 유형, 잘 안씀
7. 객체(Object) : 복합데이터 유형으로 여러 속성과 메서드를 포함
8. 배열(Array) : 여러값을 순서대로 저장하는 데이터 유형
9. 함수(Function) : 코드블록을 정의하고 실행할 수 있는 데이터 유형

let 변수 = 변수값

console.log("내용",변수값,"내용");

### **내용과 내용을 이어줄 수 있게 변수값 앞뒤에 , 붙이기**
let num2 = 10;
num += 1;
// num = num + 1

num++;
//실행이 된 후 증감
++num;
//증가 후 실행

num ** 2;
//제곰

num + 1;
num - 1;
num * 1;
num / 1;
num % 1;

if 문
1. let a = 'n'
2; if(a<0)
    {
        console.log("");
    }
3. else if{}
    else{
        if{}
        else{}
    }
#### *둘다 똑같이 사용할수 있지만 else if가 메모리 효율이 좋음.

switch문
1. let a = 'n'
2. switch(a){
    case 1 :
     console.log(");
     break;
}

break; 반복을 멈주게함
continue; 반복을 계속하게함