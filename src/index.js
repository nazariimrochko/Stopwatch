import components from "./components";
import { TIMEOUT } from "./constants";
import { setupTimer } from "./methods";
import state from "./state";

function updateTimer() {
  const { timerHtmlValue, newTime } = setupTimer(state.timeInMilliSecond);
  state.timeInMilliSecond = newTime;
  components.timer.innerHTML = timerHtmlValue;
}

const Timer = new (class {
  constructor() {
    this.interval = null;
  }

  start() {
    state.inProcess = true;
    this.interval = setInterval(updateTimer, TIMEOUT);
    components.btnAction.innerText = "Stop";
    components.btnAction2.innerText = "Lap";
  }

  stop() {
    clearInterval(this.interval);
    state.inProcess = false;
    components.btnAction.innerText = "Start";
    components.btnAction2.innerText = "Reset";
  }
})();

components.btnAction.addEventListener("click", () => {
  if (state.inProcess) {
    Timer.stop();
  } else {
    Timer.start();
  }
});

components.btnAction2.addEventListener("click", () => {
  if (state.inProcess === true) {
    const { timerHtmlValue } = setupTimer(state.timeInMilliSecond);
    const lap = document.createElement("li");
    lap.id = "lap";
    const index =
      document.querySelectorAll("#timer_loop_wrapper li").length + 1;
    lap.innerHTML = `Lap ${index}  - ${timerHtmlValue}`;
    components.loopWrapper.appendChild(lap);
    console.warn(lap);
  } else {
    components.timer.innerHTML = "00:00:00";
    state.timeInMilliSecond = 0;
    components.loopWrapper.innerHTML = "";
  }
});
/*
let cash = prompt("Ведіть будь-ласка вашу зарплату а полі нище.");
cash = Number(cash);
const premium = (cash / 100) * 15;
let allCash = premium + cash;
console.warn(`Премія 15 %. На руки  ${allCash}`);
const tax = (allCash / 100) * 10;
allCash = allCash - tax;
console.warn(`Налоги - 10%. На руки ${allCash}`);
console.warn(
  `Витрати в магазині  235 грн. Залишилось ${(allCash = allCash - 235)}`
);
const wife = (allCash / 100) * 50;
allCash = allCash - wife;
console.warn(`І жінці половину відщібнув .Залишилось  ${allCash}`);

const palindrom = str => {
  str = str.toLowerCase();
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
};

console.warn(palindrom("okko"));
*/
