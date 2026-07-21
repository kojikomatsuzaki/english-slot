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
   // 固定値を直接代入していた以前の書き方

   //let index = 2;
    let index = Math.floor(Math.random() * subjects.length);
    let subjectIndex = Math.floor(Math.random() * subjects.length)
    let verbIndex = Math.floor(Math.random() * verbs.length)
    let objectIndex = Math.floor(Math.random() * objects.length)

    subject.textContent = subjects[subjectIndex];
        verb.textContent = verbs[verbIndex];
        object.textContent = objects[objectIndex];

        sentence.textContent =
            subjects[subjectIndex] + " " +
            verbs[verbIndex] + " " +
            objects[objectIndex] + ".";

***

こんな感じ？
});
