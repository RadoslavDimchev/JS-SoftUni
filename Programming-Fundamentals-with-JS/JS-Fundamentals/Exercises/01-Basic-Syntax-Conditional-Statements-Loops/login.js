function login(array) {
    let username = array.shift();
    let correctPassword = username.split('').reverse().join('');
    let counter = 0;

    for (let currentPassword of array) {
        if (currentPassword !== correctPassword) {
            counter++;
            if (counter === 4) {
                return `User ${username} blocked!`;
            }

            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);