const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      countdown(selectedDate);
    }
  },
};

const dateTimePicker = flatpickr('#datetime-picker', options);
const startButton = document.querySelector('[data-start]');

function countdown(date) {
  const daysEl = document.querySelector('[data-days]');
  const hoursEl = document.querySelector('[data-hours]');
  const minutesEl = document.querySelector('[data-minutes]');
  const secondsEl = document.querySelector('[data-seconds]');

  function update() {
    const time = date - new Date();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    daysEl.textContent = formatTime(days);
    hoursEl.textContent = formatTime(hours);
    minutesEl.textContent = formatTime(minutes);
    secondsEl.textContent = formatTime(seconds);

    if (time <= 0) {
      clearInterval(intervalId);
      setTimeout(() => {
        document.querySelector('#explosion').style.display = 'block';
        console.log('Obrazek wybuchu powinien teraz być widoczny');
      }, 500);
    }
  }

  const intervalId = setInterval(update, 1000);
}

function formatTime(time) {
  if (time < 0) {
    return '00';
  } else if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

startButton.addEventListener('click', () => {
  const selectedDate = dateTimePicker.selectedDates[0];
  countdown(selectedDate);
  startButton.disabled = true;
});
