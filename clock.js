const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"),
  clockAnalog = clockContainer.querySelector(".analog"),
  hour = clockAnalog.querySelector(".hour"),
  minute = clockAnalog.querySelector(".minute"),
  second = clockAnalog.querySelector(".second");

function getTime() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;

  const secondsDegrees = (seconds / 60) * 360 + 90;
  second.style.transform = `rotate(${secondsDegrees}deg)`;
  const minsDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minute.style.transform = `rotate(${minsDegrees}deg)`;
  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hour.style.transform = `rotate(${hourDegrees}deg)`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  setInterval(setDate, 1000);
  setDate();
}
