// button 플레이어1 굴리기 -> 플레이어2 굴리기 -> 다시하기 (reset)
// result 플레이어1 승 / 플레이어2 승 / 무승부


var button = document.getElementsByTagName("button")[0];

var num = 0;
var p1num, p2num;

window.onload = function() {
    button.reset();
}      

function roll() {
    if (num === 2) {
        num = 0;
        location.reload();
    }

    var randomNumber = Math.floor(Math.random() * 6 + 1);
    var randomImage = "./images/" + randomNumber + ".png";
    
    var img = document.querySelectorAll("img"); 
    img[num].setAttribute("src", randomImage);

    if (num === 0) {
        p1num = randomNumber;
        button.textContent = "플레이어 2 굴리기";
        num++;
        console.log(num)
    } else if (num === 1) {
        p2num = randomNumber;
        showResult();
        button.textContent = "다시하기";
        num++;
    }
};


function showResult() {
    var result = document.getElementById("result");

    if (p1num > p2num) {
        result.innerHTML = "플레이어 1 승!";
    } else if (p1num < p2num) {
        result.innerHTML = "플레이어 2 승!";
    } else if (p1num === p2num) {
        result.innerHTML = "무승부!";
    }
}

button.addEventListener("click", function() {
    roll();
});
