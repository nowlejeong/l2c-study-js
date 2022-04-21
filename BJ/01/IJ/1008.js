// import { readFileSync } from "fs";
//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//첫째 줄에 A+B를 출력한다.

// const input = readFileSync("/dev/stdin").toString().split(" ").map(Number);
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let answer = input.reduce((a, b) => a / b);
let answer2 = 0;
input.forEach((element) => {
  answer2 += element;
  //   answer2 = answer2 + element;
});
// a++;
// a += b;
console.log(answer2);
