// ============================
// 📌 변수 선언 및 데이터 타입
// ============================

// var로 number 타입 선언
var myAge = 22;

// let으로 string 타입 선언
let myName = "Coring";

// const로 boolean 타입 선언
const isStudent = true;

// null 타입 변수
let currentJob = null;

// undefined 타입 변수
let futureGoal;

// Symbol 타입
let userId = Symbol("user");

// BigInt 타입
let hugeNumber = 987654321012345678901234567890n;

// ============================
// 📌 typeof 연산자 사용
// ============================
console.log("Type of myAge:", typeof myAge);          // number
console.log("Type of myName:", typeof myName);        // string
console.log("Type of isStudent:", typeof isStudent);  // boolean
console.log("Type of userId:", typeof userId);        // symbol
console.log("Type of hugeNumber:", typeof hugeNumber); // bigint

// ============================
// 📌 문자열 처리
// ============================

// 이스케이프 문자와 문자열 연결 사용
let intro = "Hello!\n\tMy name is " + myName + " and I am " + myAge + " years old.";
console.log(intro);

// ============================
// 📌 배열 리터럴
// ============================

let hobbies = ["reading", "gaming", "coding"];
console.log("My hobbies: " + hobbies.join(", "));

// ============================
// 📌 객체 리터럴
// ============================

let profile = {
  name: myName,
  age: myAge,
  isStudent: isStudent
};

console.log("Profile Info: " + profile.name + " is " + profile.age + " years old.");

// typeof 배열과 객체
console.log("Type of hobbies:", typeof hobbies);   // object
console.log("Type of profile:", typeof profile);   // object

// ============================
// 🌟 도전 과제
// ============================

// null과 undefined 비교 및 typeof
console.log("Type of currentJob:", typeof currentJob);     // object
console.log("Type of futureGoal:", typeof futureGoal);     // undefined
console.log("null === undefined ?", currentJob === futureGoal); // false

// 템플릿 문자열
let profileText = `\n[Profile Summary]
Name: ${myName}
Age: ${myAge}
Student: ${isStudent}
`;
console.log(profileText);

// 배열에 null, undefined 포함 후 타입 확인
let mixed = ["traveling", null, undefined];
console.log("mixed[0] type:", typeof mixed[0]); // string
console.log("mixed[1] type:", typeof mixed[1]); // object
console.log("mixed[2] type:", typeof mixed[2]); // undefined

// 객체에 속성 추가 및 null 확인
profile.email = null;

if (profile.email === null) {
  console.log("The email field is currently null.");
}
