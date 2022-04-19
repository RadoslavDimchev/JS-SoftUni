function login(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let correctPass = userName.split('').reverse().join('');

    let currentPassword = input[index];
    index++;
    let incorrectPass = 0;

    while (currentPassword !== correctPass && incorrectPass < 3) {
        incorrectPass++;
        console.log('Incorrect password. Try again.');
        currentPassword = input[index];
        index++;
    }

    if (currentPassword === correctPass) {
        console.log(`User ${userName} logged in.`);
    } else if (incorrectPass >= 3) {
        console.log(`User ${userName} blocked!`);
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);