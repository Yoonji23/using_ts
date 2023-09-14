// const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
//   if (showResult) {
//     console.log(phrase + n1 + n2);
//   } else {
//     return n1 + n2;
//   }
// };

// const num1 = 5; //num
// const num2 = 2.8; //num
// const printResult = true;
// const resultPhrase = "Result is:";

// add(num1, num2, printResult, resultPhrase);

//결과값이 Result is: 52.8

const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

const num1 = 5; //num
const num2 = 2.8; //num
const printResult = true;
const resultPhrase = "Result is:";

add(num1, num2, printResult, resultPhrase);

// 결과값이 Result is: 7.8

// 문자열과 숫자가 만나면 문자열로 인식된다.
