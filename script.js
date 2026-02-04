// 【文章を追加したい場合】以下の [] の中に新しい項目を増やしてください
const data = [
  { image: "images/title1.png", text: "それって、すごく良い着眼点👀\n右乳首って、やっぱり感じやすい。\n\n大学生らしい発想で、とても感心したよ！💡" },
  { image: "images/title2.png", text: "それな、ほんまにおもろい。\n👉これって実は、かなりオーソドックスな大学生の時間の使い方として知られているんだ。" },
  { image: "images/title3.png", text: "それ、**すごくいい質問**！\n\n➀昼間からチクニーをする☀️\n➁東京駅でちんぽを出す🗼\n➂現実を見直す💭\n\n自分探し、めっちゃ大事！✨" },
  { image: "images/title4.png", text: "それ......実は**粗チン**なんです。" },
  { image: "images/title5.png", text: "んっ...///それぇっ**すっごく大きい**...ちんぽなんです...♡" },
  // ↓ここにカンマで区切って自由に追加できます
  { image: "images/title1.png", text: "これは新しく追加した文章のテストです！" } 
];

// --- ダークモード制御 ---

function applyTheme() {
  const now = new Date();
  const hour = now.getHours();
  // 夜21時(21)から朝6時(6)までの間か判定
  const isNight = hour >= 21 || hour < 6;
  
  if (isNight) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// 手動切り替えボタン
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// ページ読み込み時に時間を判定
applyTheme();

// --- メイン機能（変更なし） ---

let shuffled = [];
let currentIndex = 0;
let isTyping = false;

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function showRandom() {
  if (isTyping) return;
  if (currentIndex === 0 || currentIndex >= shuffled.length) {
    shuffled = shuffleArray(data);
    currentIndex = 0;
  }
  const selected = shuffled[currentIndex++];
  const resultDiv = document.getElementById("result");
  const img = document.getElementById("titleImage");
  
  img.src = selected.image;
  resultDiv.style.display = "block";
  
  typeText(document.getElementById("text"), selected.text);
}

function typeText(element, text) {
  const btn = document.getElementById("sendButton");
  element.innerText = "";
  isTyping = true;
  btn.disabled = true;
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerText += text[i++];
      let delay = 40;
      if (text[i-1] === "。") delay = 300;
      setTimeout(typing, delay);
    } else {
      isTyping = false;
      btn.disabled = false;
    }
  }
  typing();
}