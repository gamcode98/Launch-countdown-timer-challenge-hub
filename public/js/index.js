const countdown = () => {
  const countDate = new Date("Apr 17, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = ("0" + Math.floor((gap % day) / hour)).slice(-2);
  const textMinute = ("0" + Math.floor((gap % hour) / minute)).slice(-2);
  const textSecond = ("0" + Math.floor((gap % minute) / second)).slice(-2);

  document.querySelector(".day").textContent = textDay;
  document.querySelector(".hour").textContent = textHour;
  document.querySelector(".minute").textContent = textMinute;
  document.querySelector(".second").textContent = textSecond;
};
setInterval(countdown, 1000);
