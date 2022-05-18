function passwordValidator(password) {
    function length(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function consistLettersAndDigits(password) {
        for (let i = 0; i < password.length; i++) {
            let charAscii = password[i].charCodeAt();
            if (!(charAscii >= 47 && charAscii <= 58) && !(charAscii >= 65 && charAscii <= 90) && !(charAscii >= 97 && charAscii <= 122)) {
                return false;
            }
        }
        return true;
    }

    function haveLeastTwoDigits(password) {
        let digitsCounter = 0;
        for (let char of password) {
            let charAscii = char.charCodeAt();
            if (charAscii >= 47 && charAscii <= 58) {
                digitsCounter++;
            }
        }
        return digitsCounter >= 2 ? true : false;
    }

    let isLengthValid = length(password);
    let isconsistLettersAndDigits = consistLettersAndDigits(password);
    let isLengthEnough = haveLeastTwoDigits(password);

    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isconsistLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }

    if (!isLengthEnough) {
        console.log('Password must have at least 2 digits');
    }

    if (isLengthValid && isconsistLettersAndDigits && isLengthEnough) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');