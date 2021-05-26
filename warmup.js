var a = 10;
var b = 20;
console.log(a+b);
console.log("a+b");

var name = "빙봉";
var num = 39;
console.log(name);
console.log(num);

var samsung = 80000;
var kakao = 300000;
var hong = (100 * samsung) + (80 * kakao);
console.log(hong);

var samsung = samsung * 1.2;
var kakao = kakao * 0.9;
var hong = (100 * samsung) + (80 * kakao);
console.log(hong);


var score = prompt("당신의 점수는?");
if (score >= 90) {
    alert("A등급입니다.");
} else if (score >= 80) {
    alert("B등급입니다.");
} else if (score >= 60) {
    alert("C등급입니다.");
} else {
    alert("F등급입니다.");
}

var a = prompt("첫번째 정수 입력: ");
var b = prompt("두번째 정수 입력: "); 
var c = prompt("세번째 정수 입력: ");

var numlist = [a, b, c];
var sortedlist = numlist.sort(function(a, b){return a - b});
console.log(sortedlist[1]);

// 내림차순은 {return b - a}