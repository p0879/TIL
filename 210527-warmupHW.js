// 1. 반복문 (변수에 숫자 데이터가 담긴 배열을 저장하고 그 중 홀수만 출력하는 코드를 작성해주세요.)
// var arr = [2,4,5,6,7,9,12];

let arr = [2, 4, 5, 6, 7, 9, 12];
let i = 0;
let odd_num = [];

while (i < arr.length) {
  if (arr[i] % 2 === 1) {
    odd_num.push(arr[i]);
  }
  i++;
}

console.log(odd_num);

// 2. 반복문 제어
// - `1~9` 정수를 입력 받습니다.
// - 입력 받은 정수에 해당하는 구구단을 만들어 봅니다.
// - 입력값은 무조건 정수라고 가정합니다.
// - `1~9` 사이의 정수가 아니라면 다시 입력 받아야 합니다.

let dan = prompt("1 - 9 사이의 정수 입력");

for (let n = 1; n < 10; n++) {
  if (dan < 1 || dan > 10) {
    alert("1과 9 사이의 숫자를 입력해주세요.");
    break;
  } else {
    console.log(`${dan} x ${n} = ${dan * n}`);
  }
}

// 3. 함수
// - 함수명은 double로 지정합니다.
// - 파라미터는 숫자형 자료 1개를 받습니다.
// - 파라미터로 받은 숫자를 *2 연산을 한 뒤 리턴하는 함수를 작성합니다.

function double(number) {
  return number * 2;
}

let number = prompt("숫자를 입력해주세요.");
let result = double(number);
console.log(result);



// 4. 성적

var userId = "hello";
var userPwd = "world";
var dataSet = { 홍길동: 90, 홍길순: 88, 김철수: 60, 정보미: 100, 박민식: 90 };

var inputId = prompt("아이디를 입력하세요.");
var inputPwd = prompt("비밀번호를 입력하세요.");

var names = Object.keys(dataSet);

function convertGrade() {
  for (var x = 0; x < names.length; x++) {
    if (dataSet[names[x]] >= 90) {
      dataSet[names[x]] = "A";
    } else if (dataSet[names[x]] >= 80) {
      dataSet[names[x]] = "B";
    } else if (dataSet[names[x]] >= 70) {
      dataSet[names[x]] = "C";
    } else if (dataSet[names[x]] >= 60) {
      dataSet[names[x]] = "D";
    } else {
      dataSet[names[x]] = "F";
    }
  }
  return dataSet;
}

if (userId === inputId && userPwd === inputPwd) {
  var userCheck = confirm("성적 결산을 시작할까요?");
  if (userCheck === true) {
    convertGrade();
    var newSet = JSON.stringify(dataSet);
    alert("결산이 완료되었습니다.\n" + newSet);
  } else {
    alert("프로그램을 종료합니다.");
  }
} else {
    alert("로그인 정보를 확인하세요.")
}







