import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li = document.createElement("li");
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //buttonタグ(完了)の生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンを押したときに、liごと(divの親タグ)を削除する
    deleteFromIncompleteList(div.parentNode);
    //完了ボタンを押したときに、完了リストに追加する要素を指定
    const addTarget = completeButton.parentNode;
    //TODOの内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;
    //divより下層の要素を初期化
    addTarget.textContent = null;
    //liタグを生成
    const li = document.createElement("li");
    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;
    //戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    console.log(addTarget);
    //liタグの中にdivタグ以下を入れる
    li.appendChild(addTarget);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //buttonタグ(削除)の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンを押したときにliごと(divの親タグ)を削除する
    deleteFromIncompleteList(div.parentNode);
  });

  //liタグの中に各要素を設定設定
  li.appendChild(div);

  //divタグの中に各要素を設定設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
//未完了リストから指定した要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
