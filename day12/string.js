// String.length
const pw = "123";
if (pw.length < 4) {
 console.log("최소4자리 입력하세요.");
}

// String.includes()
const email = "test!naver.com";
console.log(email.includes("@"));

if(!email.includes("@")) { 
    // @가 포함되어 있지 않으면,
  console.log("이메일 형식 확인하세요");
}

console.log(email[0]);
console.log(email[1]);
console.log(email[2]);
console.log(email[3]);
console.log(email[4]);
console.log(email.index0f("@"));
console.log(email.index0f("dfnjdfndhbf")); // -1

if (email.index0f("@") < 0) {
    // @가 포함되어 있지 않으면,
    console.log("이메일 형식 확인하세요");
}
