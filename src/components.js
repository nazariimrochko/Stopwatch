import {
  timerStyle,
  timerWrapperStyle,
  titleStopwatchStyle,
  button,
  timerButtonsStyle
} from "./style";

const timer = document.getElementById("timer_time");
const btnAction = document.getElementById("timer_action");
const btnAction2 = document.getElementById("timer_action2");
const loopWrapper = document.getElementById("timer_loop_wrapper");
const timerWrapper = document.getElementById("timer_wrapper");
const titleStopwatch = document.getElementById("title_stopwatch");
const timerButtons = document.getElementById("timer_buttons");

timerWrapper.style = timerWrapperStyle;
titleStopwatch.style = titleStopwatchStyle;
btnAction.style = button;
btnAction2.style = button;
timer.style = timerStyle;
timerButtons.style = timerButtonsStyle;

export default {
  timer,
  btnAction,
  btnAction2,
  loopWrapper,
  timerWrapper,
  titleStopwatch,
  timerButtons
};
