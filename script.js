const nothing = new Audio("/assets/audio/nothing.mp3");

const robot1 = new Audio("/assets/audio/robot/1.mp3");
const robot2 = new Audio("/assets/audio/robot/2.mp3");

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
const silence = new Audio("/assets/audio/nothing.mp3");

const page0 = document.getElementById("page0");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

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
  playSequentially([robot1, silence, german1, silence, french1]);
}

function turnHome() {
  page0.style.display = "flex";
  page1.style.display = "none";
  page2.style.display = "none";
}

function turn2() {
  page1.style.display = "none";
  page2.style.display = "flex";
  playSequentially([robot2, silence, french2, silence, german2]);
}
