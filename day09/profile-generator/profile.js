
// 이름 : 코링
// 나이 : 333
// 직업 : 학생
// 취미 : 게임, 독서, 코딩
// 특이사항 : 
// 1. 새로운 것 좋아함
// 2. 오즈코딩스쿨 학생
// 3. 재택수업


//let templateString = `나의 이름은 ${NAME}입니다.`;

//console.log(NAME);
//console.log(templateString);


//const NAME = 'taem';
//let name = 'coring'

let firstName = "2yo";
let lastName = "coring"
let fullName = lastName + firstName;
const nameTemplate = `이름 : ${fullName}`;
console.log(nameTemplate);


//const age = 33;

let age = 333;
const ageTemplate = `나이 : ${age}`;
console.log(ageTemplate);


let jobs = ["학생", "무직", "개발꿈나무"];
let job = jobs[3];
const jobTemplate = `직업 : ${job}`;
console.log(jobTemplate);
//console.log("직업 : ", job)


let hobbies = ["reading", "gaming", "coding"];
//let hobbiesString = hobbies [0] + ", " + hobbies [1] + ", " + hobbies [2] + ", " 
let hobbiesString = `${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}`;
const hobbiesTemplate = `취미 : ${hobbiesString}`;
console.log(hobbiesTemplate);


let isStudent = false;
console.log("학생여부 : ", isStudent);

const notes = {
    like : "새로운 것, 좋아함",
    ongoing : "오즈코딩스쿨 학생",
    isHome : "재택수업"
};
const notesTemplate = `\n\t특이사항 : 
 1. ${notes.like}
 2. ${notes.ongoing}
 3. ${notes.isHome}
`;
console.log(notesTemplate);

 //index1: 새로운 것 좋아함
 //index2: 오즈코딩스쿨 학생
 //index3: 재택수업

 const myStudy = {
    html: "Basic",
    css: "Basic",
    JS: "Basic",
 };

 console.log("name", typeof name);
 console.log("hobbies",typeof hobbies);
 console.log("age",typeof age);
 console.log("isStudent",typeof isStudent);
 console.log("notesTemplate",typeof notesTemplate);
 console.log("myStudy.name",typeof myStudy.name)

 ////////////
 console.log("////////////////");

 var varNull = null;
 var varUndefined = undefined;
 console.log("Null == undefined", varNull == varUndefined);
 console.log("Null === undefined", varNull === varUndefined);

 console.log("typeof null", typeof null);
 console.log("typeof undefined", typeof undefined);


 const myStudy2 = {
    html: "Basic",
    css: "Basic",
    JS: "Basic",
    likes: null,
 };
 console.og("myStudy2.likes", myStudy2.likes);

 let nullArray = [null, 0, undefined];
 console.log(nullArray);
 console.log(nullArray[0]);
 console.log(nullArray[1]);
 console.log(nullArray[2]);
