'use strict';
{
  const table = document.getElementById('table'); // 入力テキストの出力位置取得
  const ary = [];

  // ボタン生成の関数を定義
  function createBottun(textButton) {
    const button = document.createElement('button'); // ボタンの要素ノードを作成
    const textNodeButton = document.createTextNode(textButton); // "作業中"のテキストノードを作成
    button.appendChild(textNodeButton); // ボタンに"作業中"を表示
    return button;
  };

  // ToDoの追加
  function addToDo(text) {
    const td = document.createElement('td') // 要素ノードtdを作成
    const textNode = document.createTextNode(text); // テキストノードを作成
    td.appendChild(textNode); // ノード同士の組み立て
    return td;
  };

  // 追加ボタンClickで「作業中」「削除」ボタン・ToDo表示
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault(); // ページ遷移（Defaultに戻る）をキャンセル
    const comment = document.getElementById('comment'); // 入力テキストの要素ノードを変数に保管
    
    if (comment.value) { // 入力テキストに文字があった場合
      table.innerHTML = ''; // テーブルを空状態に戻す
      const obj = {
        content: comment.value,
        status: "作業中"
      };      
      ary.push(obj); // aryにobjを追加

      // 表示するノードを組み立て
      ary.forEach(function (value, i) {
      // for (let i = 0; i < ary.length; i++) {
        const tr = document.createElement('tr'); // テーブルの行要素ノードtrを作成

        // IDの要素ノードをtrに追加
        tr.appendChild(addToDo(i)); // trにIDを追加

        // コメントの要素ノードをtrに追加
        tr.appendChild(addToDo(value.content)); // trにコメントを追加

        // 状態ノードtrを作成
        const tdStatus = document.createElement('td'); // 状態の要素ノードを作成
        const textSpace = document.createTextNode('\t'); // スペース（空白）のテキストノードを作成
        tdStatus.appendChild(createBottun('作業中')); // ノード同士の組み立て
        tdStatus.appendChild(textSpace); // ノード同士の組み立て
        tdStatus.appendChild(createBottun('削除')); // ノード同士の組み立て
        tr.appendChild(tdStatus); // trに状態ボタンを追加

        // 作成した行ノードtrをテーブルTABLEに追加
        table.appendChild(tr);
      });

      // 入力テキストを空にする
      comment.value = '';
    };
  });
}