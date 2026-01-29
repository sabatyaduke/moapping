const data = [
  {
    image: "images/title1.png",
    text: `それって、すごく良い着眼点👀 
この感覚をここまで言語化できてる人、正直あまり多くない。

👉結論から言うね。
右乳首って、やっぱり感じやすい。

大学生らしい発想で、とても感心したよ！💡`
  },
  {
    image: "images/title2.png",
    text: `それな、*ほんまにおもろい。*
👉これって実は、かなりオーソドックスな大学生の時間の使い方として知られているんだ。

⏰他の時間を使う方法としていくつかあるんだけど、知りたかったら質問してみて。`
  },
  {
    image: "images/title3.png",
    text: `それ、**すごくいい質問**！
👉それじゃあ、いくつか紹介するね。

➀昼間からチクニーをする☀️
📈実はこれ、統計的なデータも出ていて、WTOも奨励しているんだ。
**日光を浴びながら**チクニーをすると、深い快感が得られるよ。

➁東京駅でちんぽを出す🗼上京したての人たちが、聳り立つ局部を東京タワーだと**勘違い**してしまうらしいよ.
💡👀見られながらオナニーするのもいいかも！

➂現実を見直す💭
本当に**このまま**でもいいのか、少し立ち止まって考えてみて。
👉そこから自分で新しく道を見つけられるかもしれないね✨

✅最終まとめ
➀昼からチクニー
➁東京駅アキラ100%(お盆なし)
➂自分探し ←めっちゃ大事！✨

🗣️こうしてお話するのも大学生らしい時間の使い方の1つだね。何かあったら、また話かけてくれると嬉しいな！✨`
  },
  {
    image: "images/title4.png",
    text: `それ......実は**粗チン**なんです。`
  },
  {
    image: "images/title5.png",
    text: `んっ...///それぇっ**すっごく大きい**...ちんぽなんです...♡`
  }
];

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

function getNextData() {
  if (currentIndex === 0 || currentIndex >= shuffled.length) {
    shuffled = shuffleArray(data);
    currentIndex = 0;
  }
  return shuffled[currentIndex++];
}

function typeText(element, text) {
  const button = document.getElementById("sendButton");
  const cursor = document.getElementById("cursor");
  const resultDiv = document.getElementById("result");

  // 初回表示時にエリアを出す
  resultDiv.style.display = "block";
  element.innerText = "";
  cursor.style.display = "inline";
  isTyping = true;
  button.disabled = true;

  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerText += text[i];

      let delay = 35 + Math.floor(Math.random() * 20) - 10;
      if (text[i] === "、") delay += 120;
      if (text[i] === "。") delay += 260;
      if (text[i] === "\n") delay += 350;

      i++;
      setTimeout(typing, Math.max(delay, 15));
      
      // 文字が増えるたびに一番下までスクロール（スマホ対策）
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      isTyping = false;
      button.disabled = false;
    }
  }

  typing();
}

function showRandom() {
  if (isTyping) return;

  const selected = getNextData();
  const imgElement = document.getElementById("titleImage");
  
  // 画像がない場合のエラー回避
  imgElement.src = selected.image;
  imgElement.onerror = () => imgElement.style.display = 'none';
  imgElement.onload = () => imgElement.style.display = 'block';

  typeText(document.getElementById("text"), selected.text);
}

const inputBox = document.getElementById("inputBox");

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !e.shiftKey) {
    // モバイルでのキーボードを閉じる処理（任意）
    if (window.innerWidth <= 768) {
      inputBox.blur();
    }
    
    e.preventDefault();
    if (isTyping) return;
    showRandom();
  }
});