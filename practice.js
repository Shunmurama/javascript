let hand = prompt('ジャンケンの手を選んで');

while ((hand != 'グー') && (hand != 'チョキ') && (hand != 'パー') && (hand != null)){
  alert('正しく入力してください');
  hand = prompt('ジャンケンの手を選んで')
}

let js_hand = getJS();
let judge = winLose(hand, js_hand)

if (hand != null){
  alert('結果は' + judge + 'です');
}else{
  alert('また遊んでね');
}

function getJS(){
  let js = Math.floor(Math.random()*3);
  let hand;
  if (js == 0){
    hand = 'グー';
  }else if(js == 1){
    hand = 'チョキ';
  }else if (js == 2){
    hand = "パー"
  }
  return hand;
}

function winLose(user, js){
  let winLoseStr;
  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    } else if (js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    } else if (js == "チョキ"){
      winLoseStr = "負け";
    } else if (js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}