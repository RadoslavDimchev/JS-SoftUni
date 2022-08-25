function timeToWalk(steps, stepInM, speedKmH) {
  const meters = steps * stepInM;
  const speedMS = speedKmH / 3.6;
  const rest = Math.floor(meters / 500) * 60;
  const time = meters / speedMS + rest;

  const hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, 0);

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, 0);

  const seconds = Math.round(time - minutes * 60)
    .toString()
    .padStart(2, 0);

  console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);