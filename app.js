const quiz = [
    {
      question: 'RIZIN33のメインで、朝倉 海と試合した選手は？',  
      answers: [
        '元谷 友貴', 
        'シバター', 
        '扇久保 博正' , 
        '井上 直樹'
      ],
      correct: '扇久保 博正'
    },{
        question: 'RIZIN14で那須川 天心と試合した選手は?',  
        answers: [
          'メイウェザー', 
          '江幡 塁', 
          'ロッタン' , 
          '皇治'
        ],
        correct: 'メイウェザー'
      },{
        question: '堀口 恭司が朝倉海に勝った試合は、いつのRIZIN?',  
        answers: [
          'RIZIN25', 
          'RIZIN26', 
          'RIZIN27' , 
          'RIZIN28'
        ],
        correct: 'RIZIN26'
      },{
        question: 'RIZINの現在のCEOは？',  
        answers: [
          '榊原 惟行', 
          '榊原 信行', 
          '榊田 信之' , 
          '榊田 信久'
        ],
        correct: '榊原 信行'
      },{
        question: '第2代 女子スーパーアトム級王者は？',
        answers: [
          '浜崎 朱加',
          '浅倉 カンナ', 
          'ハム・ソヒ' , 
          '山本 美憂'
        ],
        correct: '浜崎 朱加'
      }

];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
// ランダムにしたい。

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question ;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
       $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
       buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解!');
        score++;
    } else {
        window.alert('不正解!');
    }

    quizIndex++;

    if(quizIndex < quizLength){
// 問題数がまだあればこちらを実行
    setupQuiz();
    } else {
// 問題数がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
    }

};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
