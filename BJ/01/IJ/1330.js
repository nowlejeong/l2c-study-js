// import { readFileSync } from "fs";
//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//첫째 줄에 A+B를 출력한다.

// const input = readFileSync("/dev/stdin").toString().split(" ").map(Number);
const input = [1, 5, 2];
let answer = input.reduce((a, b) => {
  if (a > b) {
    return ">";
  } else if (a < b) {
    return "<";
  } else {
    return "==";
  }
});

console.log(answer);
