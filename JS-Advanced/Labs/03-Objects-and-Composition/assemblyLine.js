function createAssemblyLine() {
  return {
    hasClima(car) {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = () => {
        if (car.temp < car.tempSettings) {
          car.temp++;
        } else if (car.temp > car.tempSettings) {
          car.temp--;
        }
      };
    },
    hasAudio(car) {
      car.currentTrack = null;
      car.nowPlaying = () => {
        console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
      };
    },
    hasParktronic(car) {
      car.checkDistance = (distance) => {
        let signal = '';
        if (distance < 0.1) {
          signal = 'Beep! Beep! Beep!';
        } else if (distance >= 0.1 && distance < 0.25) {
          signal = 'Beep! Beep!';
        } else if (distance >= 0.25 && distance < 0.5) {
          signal = 'Beep!';
        }
        console.log(signal);
      };
    }
  };
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: 'Toyota',
  model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: 'Never Gonna Give You Up',
  artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);