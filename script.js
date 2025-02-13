const nothing = new Audio("/assets/audio/nothing.mp3");

const robot0 = new Audio("/assets/audio/robot/0.mp3");
const robot1 = new Audio("/assets/audio/robot/1.mp3");
const robot2 = new Audio("/assets/audio/robot/2.mp3");
const robot3 = new Audio("/assets/audio/robot/3.mp3");
const robot4 = new Audio("/assets/audio/robot/4.mp3");
const robot5 = new Audio("/assets/audio/robot/5.mp3");

const french1 = new Audio("/assets/audio/french/1.mp3");
const french2 = new Audio("/assets/audio/french/2.mp3");
const french3 = new Audio("/assets/audio/french/3.mp3");
const french4 = new Audio("/assets/audio/french/4.mp3");
const french5 = new Audio("/assets/audio/french/5.mp3");
const french6 = new Audio("/assets/audio/french/6.mp3");
const french7 = new Audio("/assets/audio/french/7.mp3");
const french8 = new Audio("/assets/audio/french/8.mp3");
const french9 = new Audio("/assets/audio/french/9.mp3");
const french10 = new Audio("/assets/audio/french/10.mp3");
const french11 = new Audio("/assets/audio/french/11.mp3");

const german1 = new Audio("/assets/audio/german/1.mp3");
const german2 = new Audio("/assets/audio/german/2.mp3");
const german3 = new Audio("/assets/audio/german/3.mp3");
const german4 = new Audio("/assets/audio/german/4.mp3");
const german5 = new Audio("/assets/audio/german/5.mp3");
const german6 = new Audio("/assets/audio/german/6.mp3");
const german7 = new Audio("/assets/audio/german/7.mp3");
const german8 = new Audio("/assets/audio/german/8.mp3");
const german9 = new Audio("/assets/audio/german/9.mp3");
const german10 = new Audio("/assets/audio/german/10.mp3");
const german11 = new Audio("/assets/audio/german/11.mp3");

const end = new Audio("/assets/audio/end.mp3");
const confetti = new Audio("/assets/audio/confetti.mp3");
const silence = new Audio("/assets/audio/nothing.mp3");

const page0 = document.getElementById("page0");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");
const page5 = document.getElementById("page5");
const page6 = document.getElementById("page6");
const page7 = document.getElementById("page7");
const page8 = document.getElementById("page8");
const page9 = document.getElementById("page9");
const page10 = document.getElementById("page10");
const page11 = document.getElementById("page11");
const page12 = document.getElementById("page12");

const canvas = document.getElementById("can");
const jsConfetti = new JSConfetti({ canvas });

function playSequentially(audios) {
  if (audios.length === 0) return;
  let index = 0;
  function playNext() {
    if (index < audios.length) {
      audios[index].play();
      audios[index].onended = () => {
        index++;
        playNext();
      };
    }
  }
  playNext();
}

function turn1() {
  page0.style.display = "none";
  page1.style.display = "flex";
  playSequentially([
    robot1,
    silence,
    german1,
    silence,
    french1,
    silence,
    robot0,
  ]);
}

function turnHome() {
  page0.style.display = "flex";
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
  page5.style.display = "none";
  page6.style.display = "none";
  page7.style.display = "none";
  page8.style.display = "none";
  page9.style.display = "none";
  page10.style.display = "none";
  page11.style.display = "none";
  page12.style.display = "none";
}

function turn2() {
  page1.style.display = "none";
  page2.style.display = "flex";
  playSequentially([
    robot2,
    silence,
    german2,
    silence,
    french2,
    silence,
    robot0,
  ]);
}

function turn3() {
  page2.style.display = "none";
  page3.style.display = "flex";
  playSequentially([german3, silence, french3, silence, robot0]);
}

function turn4() {
  page3.style.display = "none";
  page4.style.display = "flex";
  playSequentially([german4, silence, french4, silence, robot0]);
}

function turn5() {
  page4.style.display = "none";
  page5.style.display = "flex";
  playSequentially([german5, silence, french5, silence, robot0]);
}

function turn6() {
  page5.style.display = "none";
  page6.style.display = "flex";
  playSequentially([german6, silence, french6, silence, robot0]);
}

function turn7() {
  page6.style.display = "none";
  page7.style.display = "flex";
  playSequentially([
    robot3,
    silence,
    german7,
    silence,
    french7,
    silence,
    robot0,
  ]);
}

function turn8() {
  page7.style.display = "none";
  page8.style.display = "flex";
  playSequentially([german8, silence, french8, silence, robot0]);
}

function turn9() {
  page8.style.display = "none";
  page9.style.display = "flex";
  playSequentially([german9, silence, french9, silence, robot0]);
}

function turn10() {
  page9.style.display = "none";
  page10.style.display = "flex";
  playSequentially([
    robot4,
    silence,
    german10,
    silence,
    french10,
    silence,
    robot0,
  ]);
}

function turn11() {
  page10.style.display = "none";
  page11.style.display = "flex";
  playSequentially([
    robot5,
    silence,
    german11,
    silence,
    french11,
    silence,
    robot0,
  ]);
}

function turn12() {
  page11.style.display = "none";
  page12.style.display = "flex";
  confetti.play();
  jsConfetti.addConfetti({
    emojis: ["🇫🇷", "🥖", "🇫🇷"],
    emojiSize: 100,
    confettiNumber: 100,
    confettiRadius: 10,
  });

  setTimeout(() => {
    turnHome();
  }, 10000);
}
