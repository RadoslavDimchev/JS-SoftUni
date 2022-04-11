function theMostPowerfulWord(input) {
    let index = 0;
    let command = input[index];
    let maxPowerWord = Number.MIN_SAFE_INTEGER;
    let powerfulWord = "";
    let isFirstLetter = false;

    while (command !== "End of words") {
        let word = command;
        let wordLength = word.length;
        let powerWord = 0;

        for (let i = 0; i < wordLength; i++) {
            let asciiCode = word.charCodeAt(i);

            if (i < 1) {
                powerWord += asciiCode;

                if (asciiCode === 97 || asciiCode === 101 || asciiCode === 105 ||
                    asciiCode === 111 || asciiCode === 117 || asciiCode === 121 ||
                    asciiCode === 65 || asciiCode === 69 || asciiCode === 73 ||
                    asciiCode === 79 || asciiCode === 85 || asciiCode === 89) {
                    isFirstLetter = true;
                }
            } else {
                powerWord += asciiCode;
            }

        }
        if (isFirstLetter) {
            powerWord *= wordLength;
        } else {
            powerWord = Math.floor(powerWord / wordLength);
        }

        if (powerWord > maxPowerWord) {
            maxPowerWord = powerWord;
            powerfulWord = word;
        }
        isFirstLetter = false;

        command = input[index];
        index++;
    }
    console.log(`The most powerful word is ${powerfulWord} - ${maxPowerWord}`);

}
theMostPowerfulWord(["The", "Most", "Powerful", "Word", "Is", "Experience", "End of words"]);
theMostPowerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"]);
