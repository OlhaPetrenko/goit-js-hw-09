import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const inputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let futuretime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < options.defaultDate) {
      Notify.failure('Please choose a date in the future');
    } else {
      btnStartEl.removeAttribute('disabled');
    }
    return (futuretime = selectedDates[0]);
  },
};

const fp = flatpickr(inputEl, options);

const timer = {
  intervalID: 0,

  start() {
    this.intervalID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = futuretime - currentTime;

      if (deltaTime <= 0) {
        this.stop();
        Report.info('TIME IS OVER');
        // btnStartEl.removeAttribute('disabled');
        return;
      }
      const time = this.convertMs(deltaTime);
      this.updateTimerFase(time);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalID);
  },

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = this.addLeadingZero(
      Math.floor(((ms % day) % hour) / minute)
    );
    // Remaining seconds
    const seconds = this.addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },
  updateTimerFase({ days, hours, minutes, seconds } = {}) {
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  },
};

btnStartEl.addEventListener('click', event => {
  timer.start();
  event.target.setAttribute('disabled', true);
});
