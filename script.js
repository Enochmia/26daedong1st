// === 데이터 영역 ===
const stage1_questions = [
  { prefix: "익스펙토", suffix: "패트로눔" },
  { prefix: "윙가르디움", suffix: "레비오우사" },
  { prefix: "알로호", suffix: "모라" },
  { prefix: "아바다", suffix: "케다브라" },
  { prefix: "엑스펠리", suffix: "아르무스" },
  { prefix: "리디", suffix: "큘러스" },
  { prefix: "스튜페", suffix: "파이" },
  { prefix: "섹툼", suffix: "셈프라" },
  { prefix: "루모스", suffix: "맥시마" },
  { prefix: "크루시", suffix: "오" },
  { prefix: "그리핀", suffix: "도르" },
  { prefix: "슬리데", suffix: "린" },
  { prefix: "후플", suffix: "푸프" },
  { prefix: "레번", suffix: "클로" },
  { prefix: "호그", suffix: "와트" },
  { prefix: "다이애건", suffix: "앨리" },
  { prefix: "골든", suffix: "스니치" },
  { prefix: "비밀의", suffix: "방" },
  { prefix: "아즈카반의", suffix: "죄수" },
  { prefix: "불의", suffix: "잔" },
  { prefix: "죽음의", suffix: "성물" },
  { prefix: "덤블", suffix: "도어" },
  { prefix: "알버스", suffix: "덤블도어" },
  { prefix: "시리우스", suffix: "블랙" },
  { prefix: "볼드", suffix: "모트" },
  { prefix: "버터", suffix: "맥주" },
  { prefix: "퀴디", suffix: "치" },
  { prefix: "스네", suffix: "이프" },
  { prefix: "해리", suffix: "포터" },
  { prefix: "론", suffix: "위즐리" },
  { prefix: "헤르미", suffix: "온느" },
  { prefix: "헤르미온느", suffix: "그레인저" },
  { prefix: "말포", suffix: "이" },
  { prefix: "드레이코", suffix: "말포이" },
  { prefix: "디멘", suffix: "터" },
  { prefix: "아즈카", suffix: "반" }
];

const stage2_questions = [
  { text: "해리는 왼손 올려!", isActionRequired: true },
  { text: "론은 오른손 내려!", isActionRequired: true },
  { text: "헤르미온느는 양손 다 올려!", isActionRequired: true },
  { text: "해리는 왼손 내리지 마!", isActionRequired: true },
  { text: "론은 오른손 올리지 마!", isActionRequired: true },
  { text: "헤르미온느는 양손 다 내려!", isActionRequired: true },
  { text: "해리는 오른손 올려!", isActionRequired: true },
  { text: "론은 왼손 내려!", isActionRequired: true },
  { text: "해리는 왼손 올리고 오른손 내려!", isActionRequired: true },
  { text: "론은 왼손 내리고 오른손 올려!", isActionRequired: true },
  { text: "헤르미온느는 양손 다 올리고 왼손만 내려!", isActionRequired: true },
  { text: "해리는 오른손 올리고 왼손도 올려!", isActionRequired: true },
  { text: "론은 왼손 올리지 말고 오른손만 올려!", isActionRequired: true },
  { text: "헤르미온느는 오른손 내리지 말고 왼손 내려!", isActionRequired: true },
  { text: "해리는 양손 다 내리고 오른손만 올려!", isActionRequired: true },
  { text: "론은 왼손 내리지 말고 오른손도 내리지 마!", isActionRequired: true },
  { text: "헤르미온느는 오른손 올리고 왼손 내리지 마!", isActionRequired: true },
  { text: "해리는 양손 다 올리지 말고 그대로 있어!", isActionRequired: true },
  { text: "론은 왼손 올리고 오른손 올리지 마!", isActionRequired: true },
  { text: "헤르미온느는 양손 다 내리지 말고 그대로 있어!", isActionRequired: true },
  { text: "왼손 올려!", isActionRequired: false },
  { text: "오른손 내리지 마!", isActionRequired: false },
  { text: "양손 다 올려!", isActionRequired: false },
  { text: "왼손 내리고 오른손 올려!", isActionRequired: false },
  { text: "오른손 올리지 말고 왼손 내려!", isActionRequired: false },
  { text: "양손 다 내리지 말고 그대로 있어!", isActionRequired: false },
  { text: "양손 다 내려!", isActionRequired: false },
  { text: "왼손 올리지 말고 오른손도 올리지 마!", isActionRequired: false },
  { text: "말포이는 왼손 올려!", isActionRequired: false },
  { text: "볼드모트는 오른손 내려!", isActionRequired: false },
  { text: "스네이프는 양손 다 올려!", isActionRequired: false },
  { text: "덤블도어는 왼손 내리지 마!", isActionRequired: false },
  { text: "맥고나걸은 양손 다 내려!", isActionRequired: false },
  { text: "네빌은 왼손 올리고 오른손 내려!", isActionRequired: false },
  { text: "도비는 양손 다 내리지 마!", isActionRequired: false },
  { text: "해그리드는 오른손 올리고 왼손 올려!", isActionRequired: false },
  { text: "시리우스는 왼손 내리고 오른손 올리지 마!", isActionRequired: false },
  { text: "루핀은 양손 다 내리고 오른손만 올려!", isActionRequired: false },
  { text: "벨라트릭스는 왼손 올리지 마!", isActionRequired: false },
  { text: "참가자님 오른손 올려요!", isActionRequired: false }
];

// === 상태 변수 ===
let currentStage = 1;
let passCount = 0;
let timeLeft = 100;
let timerInterval = null;
let isGameOver = false;

// === DOM 요소 ===
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const stageTitle = document.getElementById('stage-title');
const timerDisplay = document.getElementById('timer');
const progressText = document.getElementById('progress-text');

const st1Prefix = document.getElementById('st1-prefix');
const st1Suffix = document.getElementById('st1-suffix');
const st2Text = document.getElementById('st2-text');
const finText = document.getElementById('fin-text');
const overText = document.getElementById('over-text');

const btnFail = document.getElementById('btn-fail');
const btnPass = document.getElementById('btn-pass');

// === 게임 로직 ===
function startGame() {
  startScreen.style.display = 'none';
  gameScreen.style.display = 'flex';
  
  currentStage = 1;
  passCount = 0;
  timeLeft = 100;
  isGameOver = false;
  
  btnFail.disabled = false;
  btnPass.disabled = false;
  finText.style.display = 'none';
  overText.style.display = 'none';
  
  updateUI();
  loadQuestion();
  
  if(timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function resetGame() {
  if(timerInterval) clearInterval(timerInterval);
  startScreen.style.display = 'flex';
  gameScreen.style.display = 'none';
}

function updateTimer() {
  if(isGameOver) return;
  
  timeLeft--;
  
  let m = Math.floor(timeLeft / 60);
  let s = timeLeft % 60;
  timerDisplay.innerText = `0${m}:${s < 10 ? '0'+s : s}`;
  
  if(timeLeft <= 0) {
    clearInterval(timerInterval);
    isGameOver = true;
    hideAllQuestions();
    overText.style.display = 'block';
    btnFail.disabled = true;
    btnPass.disabled = true;
    progressText.innerText = "시간 초과!";
  }
}

function loadQuestion() {
  hideAllQuestions();
  
  if (currentStage === 1) {
    st1Prefix.style.display = 'block';
    st1Suffix.style.display = 'block';
    let q = stage1_questions[Math.floor(Math.random() * stage1_questions.length)];
    st1Prefix.innerText = q.prefix;
    st1Suffix.innerText = q.suffix;
  } else if (currentStage === 2) {
    st2Text.style.display = 'block';
    let q = stage2_questions[Math.floor(Math.random() * stage2_questions.length)];
    st2Text.innerText = q.text;
  }
}

function hideAllQuestions() {
  st1Prefix.style.display = 'none';
  st1Suffix.style.display = 'none';
  st2Text.style.display = 'none';
  finText.style.display = 'none';
  overText.style.display = 'none';
}

function updateUI() {
  if (currentStage === 1) {
    stageTitle.innerText = "1단계";
    progressText.innerText = `성공: ${passCount} / 5`;
  } else {
    stageTitle.innerText = "2단계";
    progressText.innerText = `성공: ${passCount} / 7`;
  }
}

function handlePass() {
  if(isGameOver) return;
  
  passCount++;
  
  if (currentStage === 1 && passCount === 5) {
    currentStage = 2;
    passCount = 0;
    updateUI();
    loadQuestion();
  } else if (currentStage === 2 && passCount === 7) {
    isGameOver = true;
    clearInterval(timerInterval);
    hideAllQuestions();
    finText.style.display = 'block';
    progressText.innerText = "테스트 통과!";
    btnFail.disabled = true;
    btnPass.disabled = true;
  } else {
    updateUI();
    loadQuestion();
  }
}

function handleFail() {
  if(isGameOver) return;
  passCount = 0;
  updateUI();
  loadQuestion();
}
