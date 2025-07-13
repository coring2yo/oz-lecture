const MAX_SCORE = 105;
const BONUS_SCORE = 5;

let score;
var grade;
// let count;

// 사용자 입력
  let inputStr = prompt("점수를 입력하세요.");
  //console.log(inputStr);
  // let input = parseInt(imputStr);
  let input = Number(inputStr);
  //console.log("input:",input);

  // 최종 점수 계산 (5점 추가)
  const finalScore = input + BONUS_SCORE;

  // 등급 결정 (if문)
if (finalScore >= 100) grade = "S";
else if (finalScore >= 90) grade = "A"
else if (finalScore >= 80) grade = "B"
else if (finalScore >= 70) grade = "C"
else if (finalScore >= 60) grade = "D"
else grade = "F"

//   if(finalScore >= 100) {
//     grade = "S"
//   } else if (finalScore >= 90 && finalScore < 100) {
//     grade = "A";
//   } else if (finalScore >= 80 && finalScore < 90) {
//     grade = "B";
//   } else if (finalScore >= 70 && finalScore < 80) {
//     grade = "C";
//   } else if (finalScore >= 60 && finalScore < 70) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }

  // 합격/불합격 여부 결정 (삼항연산자)
  const isPass = finalScore >= 60 ? "PASS" : "FAIL";

  // 등급에 따른 console.log() 출력 (switch문)
  let message = "";
  switch (grade) {
    case "S":
         console.log("Super!!");
         break;
    case "A":
         console.log("Excellent work!");
         break;
    case "B":
         console.log("Good job!");
         break;
    case "C":
         console.log("Satisfactoru performance.");
         break;
    case "D":
         console.log("Needs improvement.");
         break;
    case "F":
         console.log("Please try harder!");
         break;
         default:
         break;
  }
  // const consoleTemplate = `#########
  // Final Score: ${finalScore}
  // Grade: ${grade}
  // Status: ${passStatus}
  // Message: ${message}
  // #########
  // `;
console.log(`#########
Final Score: ${finalScore}
Grade: ${grade}
Status: ${passStatus}
Message: ${message}
#########
 `);