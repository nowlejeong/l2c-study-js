// import { readFileSync } from "fs";
//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//첫째 줄에 A+B를 출력한다.

// const input = readFileSync("/dev/stdin").toString().split(" ").map(Number);
const input = [1, 2];

const a = input[0];
const b = input[1];
console.log("solution 01 : ", a + b);

let answer = input.reduce((a, b) => a + b);
console.log("solution 02 : ", answer);
