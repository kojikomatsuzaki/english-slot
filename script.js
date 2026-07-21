// 主語を取得
const subject = document.getElementById("subject");

// 動詞を取得
const verb = document.getElementById("verb");

// 目的語を取得
const object = document.getElementById("object");

// 英文を取得
const sentence = document.getElementById("sentence");

// ボタンを取得
const button = document.getElementById("spin-button");

button.addEventListener("click", function () {

    subject.textContent = "The cat";

    verb.textContent = "plays";

    object.textContent = "soccer";

    sentence.textContent = "The cat plays soccer.";

});
