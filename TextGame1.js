var charname = prompt("캐릭터 이름을 설정해주세요.", "이름");
var job = prompt("직업을 선택해 주세요. (전사 or 마법사)");

var jobs = ["전사", "마법사"];
var weapons = ["칼", "도끼", "창", "나무막대", "플라스틱막대", "유리막대"];

if (jobs.includes(job)) {
    if (job == "전사") {
        var weapon = prompt("무기를 선택하세요. (칼, 도끼, 창)");
        if (weapons.includes(weapon)) {
            alert("멧돼지를 사냥하러 출발합니다.");
            var action = prompt("멧돼지를 만났습니다. (사냥 or 도망)");
            if (action == "사냥") {
                alert(`${weapon}(으)로 멧돼지를 공격하여 사냥했습니다.`);
                alert(`게임이 끝났습니다. 다음에 또 봐요, ${charname}님!`);
            } else if (action == "도망") {
                alert("멧돼지를 만나서 도망쳤습니다.");
                alert(`게임이 끝났습니다. 다음에 또 봐요, ${charname}님!`);
            } else {
                alert("유효한 선택이 아닙니다.");
            }
        } else {
            alert("유효한 무기가 아닙니다.");
        }
    } else if (job == "마법사") {
        var weapon = prompt("무기를 선택하세요. (나무막대, 플라스틱막대, 유리막대)");
        if (weapons.includes(weapon)) {
            alert("멧돼지를 사냥하러 출발합니다.");
            var action = prompt("멧돼지를 만났습니다. (사냥 or 도망)");
            if (action == "사냥") {
                alert(`${weapon}(으)로 멧돼지를 공격하여 사냥했습니다.`);
                alert(`게임이 끝났습니다. 다음에 또 봐요, ${charname}님!`);
            } else if (action == "도망") {
                alert("멧돼지를 만나서 도망쳤습니다.");
                alert(`게임이 끝났습니다. 다음에 또 봐요, ${charname}님!`);
            } else {
                alert("유효한 선택이 아닙니다.");
            }
        } else {
            alert("유효한 무기가 아닙니다.");
        }
    }
} else {
    alert("유효한 직업이 아닙니다.");
}

