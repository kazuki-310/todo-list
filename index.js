// 指定したセレクターの element を返す
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

// JavaScript からさまざまなイベント処理を実行することができるメソッド
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // 入力した値を取得
  const text = input.value;

  // テキストが空白の場合は追加できないようにする
  if (text !== "") {
    // 新しい Element を作成
    const li = document.createElement("li");
    const p = document.createElement("p");
    // 生成した p タグ内のテキストを取得して表示
    p.textContent = text;

    // 要素を追加
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(addDeleteBtn());

    // 入力後空白にする
    input.value = "";
    // 追加された際に非表示にする
    empty.style.display = "none";
  }
});

// 削除ボタン追加
function addDeleteBtn() {
  // button Element を作成
  const deleteBtn = document.createElement("button");

  // クラス名を追加
  deleteBtn.className = "btn-delete";
  // 生成した button タグを X として表示
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", (e) => {
    // 指定した DOM ノードの親にあたる要素を取得することができます。
    const item = e.target.parentElement;
    // ノードを削除します
    ul.removeChild(item);

    const items = document.querySelectorAll("li");
    // li タグが一つでもあれば表示する。
    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}
