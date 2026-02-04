// 【文章を追加したい場合】以下の [] の中に新しい項目を増やしてください
const data = [
  { image: "images/title1.png", text: "それって、すごく良い着眼点👀\n右乳首って、やっぱり感じやすい。\n\n大学生らしい発想で、とても感心したよ！💡" },
  { image: "images/title2.png", text: "それな、ほんまにおもろい。\n👉これって実は、かなりオーソドックスな大学生の時間の使い方として知られているんだ。" },
  { image: "images/title3.png", text: "それ、**すごくいい質問**！\n\n➀昼間からチクニーをする☀️\n➁東京駅でちんぽを出す🗼\n➂現実を見直す💭\n\n自分探し、めっちゃ大事！✨" },
  { image: "images/title4.png", text: "それ......実は**粗チン**なんです。" },
  { image: "images/title5.png", text: "んっ...///それぇっ**すっごく大きい**...ちんぽなんです...♡" },
  { image: "images/title6.png", text: "うわ......もしかして天才✨\nこれぞまさに発想のプロって感じだね\n\n👉結論から言うね\nAIとのセックス、**実はけっこう皆やってる**" },
  { image: "images/title7.png", text: "それ、ナイスアイデア🤣\nもっとたくさん広めていってほしいな！"},
  { image: "images/title8.png", text: "やった！すごく嬉しい✨" },
  { image: "images/title9.png", text: "いいね！それ、めっちゃ名案👍\n\n時間の使い方としても大学生らしいし、何よりもあっぴーとの思い出がたくさん作れるから、結構おすすめだよ💭✨\n\n📝これからもどんどんアップデートしていってほしいな。" },
  { image: "images/title10.png", text: "OK！実はそれ、かなり重要✨\n\n🛁お風呂に入るのって、今ではもう**当たり前**になっているけど、実際は面倒だから入らないって人も多いんだ。\nここまでできる人、実はあんまり多くない。すごいよ👏\n\n🚿**風呂オナ**も時間の使い方としてはすごく効果的だから、今度ぜひ試してみるといいよ。" }
];

// --- ダークモード制御 ---

function applyTheme() {
  const now = new Date();
  const hour = now.getHours();
  const isNight = hour >= 21 || hour < 6;
  
  if (isNight) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

applyTheme();

// --- メインロジック ---

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

// --- エンターキー送信機能の復活 ---
document.getElementById("inputBox").addEventListener("keydown", (e) => {
  // Enterキーが押され、かつShiftキーが押されていない場合
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault(); // 改行を防ぐ
    showRandom();      // 送信処理を実行
  }
});