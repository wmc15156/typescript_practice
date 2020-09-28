/*
value값이 상수값이 아닐경우에는 키값에다가 readonly를 적어주면 좋음.
interface는 서로간의 상속이 가능함
같은이름의 interface를 여러개 만들수가 있음 따로따로 분리해도 하나로 합쳐진다.
인터페이스는 주로 객체에 쓰임
type alias 서로간의 분리를 할 수 없음 무조건 하나에 다 적어야함
type은 좀 더 넓은 범위

튜플 타입을 이용해 원소의 수와 각 원소의 타입이 정확히 지정된 배열의 타입을 정의할 수 있다.
let a:[string, number] = ['김현진', 22];
a[2] = 3 // error 발생
a.push(3) //error 발생

제네릭에서 extends 제한을 의미함

interface obj<T extends string> {
  add(a: T, b: T)

}

*/
interface Example {
  a:3,
  b:7,
  [key: string]: number,
}

const example:Example = {
  a:3,
  b:7,
}

interface RSP {
  readonly ROCK: '0',
  readonly SCISSORS: '-142px',
  readonly PAPER: string,
}

const rsp: RSP = {
  ROCK: '0',
  SCISSORS: '-142px',
  PAPER: '-284px',
} 


function computerChoice(imgCoords: RSP[keyof RSP]):keyof RSP {
  return (Object.keys(rsp) as ['ROCK','SCISSORS', 'PAPER']).find((k) => {rsp[k] === imgCoords})
}

