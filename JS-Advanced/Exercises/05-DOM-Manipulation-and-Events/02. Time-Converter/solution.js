function attachEventsListeners() {
  const units = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400
  };

  Array.from(document.querySelectorAll('input[type="button"]'))
    .forEach(button => button.addEventListener('click', onClick));

  function onClick(e) {
    const input = e.target.parentNode.querySelector('input[type="text"]');
    const time = convert(Number(input.value), input.id);

    document.getElementById('days').value = time.days;
    document.getElementById('hours').value = time.hours;
    document.getElementById('minutes').value = time.minutes;
    document.getElementById('seconds').value = time.seconds;
  }

  function convert(value, unit) {
    const days = value / units[unit];

    return {
      days: days,
      hours: days * units.hours,
      minutes: days * units.minutes,
      seconds: days * units.seconds,
    };
  }
}