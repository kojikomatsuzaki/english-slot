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

let index = 2;

button.addEventListener("click", function () {
   // 固定値を直接代入していた以前の書き方
   // subject.textContent = "The cat";
   // verb.textContent = "plays";
   // object.textContent = "soccer";
   // sentence.textContent = "The cat plays soccer.";

    subject.textContent = subjects[index];
    verb.textContent = verbs[index];
    object.textContent = objects[index];

    sentence.textContent =
        subjects[index] + " " +
        verbs[index] + " " +
        objects[index] + ".";

});
