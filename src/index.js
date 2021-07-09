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
