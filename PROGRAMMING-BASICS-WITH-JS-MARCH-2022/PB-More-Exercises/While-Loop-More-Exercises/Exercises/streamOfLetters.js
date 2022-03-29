function streamOfLetters(input) {

    let index = 0;
    let command = input[index];

    let viewedC = 0;
    let viewedO = 0;
    let viewedN = 0;

    let text = "";
    let correctText = "";

    while (command !== "End") {
        let letters = (command);

        if (/^[a-zA-Z]/.test(letters)) {

            if (letters === "c") {
                viewedC++;

                if (viewedC >= 2) {
                    text += letters;
                }
                letters = "";
            }

            if (letters === "o") {
                viewedO++;

                if (viewedO >= 2) {
                    text += letters;
                }
                letters = "";
            }

            if (letters === "n") {
                viewedN++;

                if (viewedN >= 2) {
                    text += letters;
                }
                letters = "";
            }

            text += letters;

            if (viewedC >= 1 && viewedO >= 1 && viewedN >= 1) {

                viewedC = 0;
                viewedO = 0;
                viewedN = 0;

                text += " ";
                correctText = text;
            }

        }
        index++;
        command = input[index];
    }

    if (command === "End") {
        console.log(correctText);
    }

}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "A", "D", "End"]);
streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"]);
