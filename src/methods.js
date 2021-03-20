import { TIMEOUT } from "./constants";

export function normalizeTimeValue(val) {
  return val < 10 ? `0${val}` : val === 0 ? "00" : val;
}
export function getTime(time) {
  const minutes = Math.floor(time / 1000 / 60);
  const seconds = Math.floor((time - minutes * 1000 * 60) / 1000);
  const milliSeconds = time - minutes * 1000 * 60 - seconds * 1000;
  return {
    minutes,
    seconds,
    milliSeconds
  };
}

export function setupTimer(time) {
  // Update time
  const newTime = time + TIMEOUT;
  // Get normalized values
  const timeVal = getTime(newTime);
  const minutes = normalizeTimeValue(timeVal.minutes);
  const seconds = normalizeTimeValue(timeVal.seconds);
  const milliSeconds = normalizeTimeValue(timeVal.milliSeconds)
    .toString()
    .substr(0, 2);
  // Return new value
  return {
    newTime,
    timerHtmlValue: `${minutes}:${seconds}:${milliSeconds}`
  };
}
