class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }

  addGoal(peak, altitude) {
    if (this.goals[peak]) {
      return `${peak} has already been added to your goals`;
    }

    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals[peak]) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.resources <= 0) {
      throw new Error('You don\'t have enough resources to start the hike');
    }
    if (this.resources - time * 10 <= 0) {
      return 'You don\'t have enough resources to complete the hike';
    }

    this.resources -= time * 10;
    this.listOfHikes.push({ peak, time, difficultyLevel });
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    this.resources += time * 10;

    if (this.resources >= 100) {
      this.resources = 100;
      return 'Your resources are fully recharged. Time for hiking!';
    }

    return `You have rested for ${time} hours and gained ${time * 10}% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria === 'all') {
      return 'All hiking records:\n' +
        this.listOfHikes.map(h => `${this.username} hiked ${h.peak} for ${h.time} hours`).join('\n');
    }

    const bestHike = this.listOfHikes
      .filter(h => h.difficultyLevel === criteria)
      .sort((a, b) => a.time - b.time)[0];

    return bestHike
      ? `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
      : `${this.username} has not done any ${criteria} hiking yet`;
  }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours