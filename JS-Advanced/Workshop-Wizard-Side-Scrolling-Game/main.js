const gameStart = document.querySelector('.game-start');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gameScore = document.querySelector('.game-score');
const gamePoints = gameScore.querySelector('.points');

gameStart.addEventListener('click', onGameStart);

// global key listeners
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

const keys = {};
const player = {
  x: 150,
  y: 100,
  width: 0,
  height: 0,
  lastTimeFiredFireball: 0
};
const game = {
  speed: 2,
  movingMultiplier: 4,
  fireBallMultiplier: 5,
  fireInterval: 1000,
  cloudSpawnInterval: 3000,
  bugSpawnInterval: 1000,
  bugKillBonus: 2000
};
const scene = {
  score: 0,
  lastCloudSpawn: 0,
  lastBugSpawn: 0,
  isActiveGame: true
};

function onGameStart() {
  gameStart.classList.add('hide');

  const wizard = document.createElement('div');
  wizard.classList.add('wizard');
  wizard.style.top = player.y + 'px';
  wizard.style.left = player.x + 'px';
  gameArea.appendChild(wizard);

  player.width = wizard.offsetWidth;
  player.height = wizard.offsetHeight;

  // game infinite loop
  window.requestAnimationFrame(gameAction);
}

function onKeyDown(e) {
  keys[e.code] = true;
}

function onKeyUp(e) {
  keys[e.code] = false;
}

function gameAction(timestamp) {
  const wizard = document.querySelector('.wizard');

  // Increment score count
  scene.score++;

  // Add bugs
  if (timestamp - scene.lastBugSpawn > game.bugSpawnInterval + 5000 * Math.random()) {
    const bug = document.createElement('div');
    bug.classList.add('bug');
    bug.x = gameArea.offsetWidth - 60;
    bug.style.left = bug.x + 'px';
    bug.style.top = (gameArea.offsetHeight - 60) * Math.random() + 'px';
    gameArea.appendChild(bug);
    scene.lastBugSpawn = timestamp;
  }

  // Add clouds
  if (timestamp - scene.lastCloudSpawn > game.cloudSpawnInterval + 20000 * Math.random()) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.x = gameArea.offsetWidth;
    cloud.style.left = cloud.x + 'px';
    cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
    gameArea.appendChild(cloud);
    scene.lastCloudSpawn = timestamp;
  }

  // Modify bug positions
  const bugs = document.querySelectorAll('.bug');
  bugs.forEach(b => {
    b.x -= game.speed * 3;
    b.style.left = b.x + 'px';
    if (b.x + bugs.offsetWidth <= 0) {
      b.remove();
    }
  });

  // Modify cloud position
  const clouds = document.querySelectorAll('.cloud')
    .forEach(c => {
      c.x -= game.speed;
      c.style.left = c.x + 'px';

      if (c.x + c.offsetWidth <= 0) {
        c.remove();
      }
    });

  // Apply gravitation
  const isInAir = (player.y + player.height) <= gameArea.offsetHeight;
  if (isInAir) {
    player.y += game.speed;
  }
  if (keys.ArrowDown && isInAir) {
    player.y += game.speed * game.movingMultiplier;
  }

  // Modify fireballs positions
  const fireballs = document.querySelectorAll('.fire-ball');
  fireballs.forEach(f => {
    f.x += game.speed * game.fireBallMultiplier;
    f.style.left = f.x + 'px';

    if (f.x + f.offsetWidth > gameArea.offsetWidth) {
      f.remove();
    }
  });

  // register user input
  if (keys.ArrowUp && player.y > 0) {
    player.y -= game.speed * game.movingMultiplier;
  }

  if (keys.ArrowDown && player.y + player.height < gameArea.offsetHeight) {
    player.y += game.speed * game.movingMultiplier;
  }

  if (keys.ArrowLeft && player.x > 0) {
    player.x -= game.speed * game.movingMultiplier;
  }

  if (keys.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
    player.x += game.speed * game.movingMultiplier;
  }

  if (keys.Space && timestamp - player.lastTimeFiredFireball > game.fireInterval) {
    wizard.classList.add('wizard-fire');
    addFireBall(player);
    player.lastTimeFiredFireball = timestamp;
  } else {
    wizard.classList.remove('wizard-fire');
  }

  // Apply movement
  wizard.style.top = player.y + 'px';
  wizard.style.left = player.x + 'px';

  // Collision detection
  bugs.forEach(b => {
    if (isCollision(wizard, b)) {
      gameOverAction();
    }

    fireballs.forEach(fireball => {
      if (isCollision(fireball, b)) {
        scene.score += game.bugKillBonus;
        b.remove();
        fireball.remove();
      }
    });
  });

  // Apply score
  gamePoints.textContent = scene.score;

  if (scene.isActiveGame) {
    window.requestAnimationFrame(gameAction);
  }
}

function addFireBall() {
  const fireball = document.createElement('div');
  fireball.classList.add('fire-ball');
  fireball.style.top = (player.y + player.height / 3 - 5) + 'px';
  fireball.x = player.x + player.width;
  fireball.style.left = fireball.x + 'px';
  gameArea.appendChild(fireball);
}

function isCollision(firstElement, secondElement) {
  const firstRect = firstElement.getBoundingClientRect();
  const secondRect = secondElement.getBoundingClientRect();

  return !(firstRect.top > secondRect.bottom ||
    firstRect.bottom < secondRect.top ||
    firstRect.right < secondRect.left ||
    firstRect.left > secondRect.right);
}

function gameOverAction() {
  scene.isActiveGame = false;
  gameOver.classList.remove('hide');
}