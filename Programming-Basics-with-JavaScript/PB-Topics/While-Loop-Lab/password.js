function password(input) {

    let index = 0;

    let username = input[index];
    index++;
    let correctPassword = input[index];
    index++;
    let writedPassword = input[index];
    index++;

    while (writedPassword !== correctPassword) {
        writedPassword = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);

}
password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);
