function passwordValidator(password) {

    let isLengthEnough = length(password);
    let isOnlyLettersAndDigits = onlyLettersAndDigits(password);
    let isAtLeastTwoDigits = atLeastTwoDigits(password);

    if (!isLengthEnough) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isOnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }

    if (!isAtLeastTwoDigits) {
        console.log('Password must have at least 2 digits');
    }

    if (isLengthEnough && isOnlyLettersAndDigits && isAtLeastTwoDigits) {
        console.log('Password is valid');
    }

    function length(password) {
        let passwordLength = password.length;
        if (passwordLength < 6 || passwordLength > 10) {
            return false;
        }

        return true;
    }

    function onlyLettersAndDigits(password) {
        for (const char of password) {
            let charAsAsciiNum = char.charCodeAt();

            if (!((charAsAsciiNum >= 47 && charAsAsciiNum <= 58) || (charAsAsciiNum >= 65 && charAsAsciiNum <= 90) || (charAsAsciiNum >= 97 && charAsAsciiNum <= 122))) {
                return false;
            }
        }

        return true;
    }

    function atLeastTwoDigits(password) {
        let digitsCounter = 0;
        for (const char of password) {
            let digit = char.charCodeAt();

            if (digit >= 48 && digit <= 57) {
                digitsCounter++;
            }
        }

        return digitsCounter >= 2 ? true : false;
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');