// target: es5 //es5로 컴파일로 한다.
import { isEqual } from 'lodash';

const v1: number| string = 123;
const v2 = () => console.log(123);

const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? '크다' : '작다';

// 배열 타입설정
const values: number[] = [1,2,3,4];
const values2: Array<number> = [1,2,3,4,5];

// values.push('a')// 문자열 푸쉬하면 에러발생
values.push(5)

// 튜플선언 타입을 정해놓음 (배열에)

const data: [string, number] = [msg, size];
data[0].substr(1)
// data[1].substr(1) // 숫자타입의 경우 substr 메소드가 없어서 에러발생

// any 타입은 모든 값을 포함하는 타입
// 실제로 타입을 알수 없는경우나 외부 패키지를 사용할때 사용하기 좋음
// 너무남발하면 x

// void 함수의 반환타입으로 사용할 수 잇음 아무값도 반환하지 않을경우
// never 거의 사용하지 않음 무한루프 등등

// 객체의 타입은 object로 사용하면 됨

// 유니온 타입 (|) 인터섹션타입(&)

// type

//ex)
type Width = number | string

let test: Width;
test = '1';
test = 1;

enum Fruit {
  Apple,
  Banana = 5,
  Orange,
}

console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange)

// enum은 양뱡향 맵핑이 가능하다.
// const enum을 사용하자

// 함수일 경우

function getText(name: string, age: number): string {
  const nameText = name.substr(0,10);
  const ageText = age >= 35 ? 'senior' : 'junior';
  return '';
}

const getText2: (name: string, age: number) => string = function (name, age) {
  return '';
}


// 화살표함수의 this는 생성될때 당시의 this로 정적임
// 일반함수의 this는 호출될때 당시 this가 선언됨

function add(x: number, y: number) : number;
function add(x: string, y: string) : string;

function add(x: string | number, y: string | number) : string | number {
  if(typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else {
    const result = Number(x) + Number(y);
    return result.toString();
  }
}

const v3: number = add(1,2)


////////////////////////////////////////////////////////////////////

interface Person {
  name: string,
  age?: number,
}

const p1: Person = {name: 'rla', age: 12}

interface Person2 {
  readonly name: string,
  age? : number,
}

const p2: Person2 = {
  name: '김씨',
  age: 22,
}

p2.age = 3;
p2.name = 'rlaguswls' // error readonly 속성을 가지고 있기때문에 에러발생

interface Example {
  name: string,
  age?: number,
  [key: string]: number | string | undefined
}

interface GteText {
  (name: string, age: number): string;
}

type GetText4 = {
  (name: string, age: number): string 
}

const getText6: GetText4 = function () {
  return ''
}

// class 

interface Person3 {
  name: string,
  age: number,
  isYoungerThan(age: number): boolean,
}

class SomePerson implements Person3 {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name,
    this.age = age
  }
  isYoungerThan(age:number) {
    return this.age < age
  }
}

// interface 확장

interface Example2 {
  name: string,
}

interface Example3 extends Example2 {
  age: number,
}

function func1 (a: number, b: number | string) {
  const v1: number | string = b;
  const v2: string = b;
}

function func2 (a: 1 | 2) {
  const v2: 1 | 3 = a;
  const v3: 1 | 2 | 3 = a;
}

interface Person5 {
  name: string,
  age: number,
}

interface Product {
  name: string,
  age: number | string
}

const person1: Person5 = {name: 'mark', age:33}
const product: Product = person1;

// 제네릭

