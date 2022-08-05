function passwordReset(input = []) {
  let password = input.shift();

  const commands = {
    TakeOdd: (password) => {
      /* Takes only the characters at odd indices and concatenates them to obtain the new raw password */
      password = password
        .split('')
        .filter((char, index) => index % 2 !== 0)
        .join('');

      return password;
    },
    Cut: (password, index, length) => {
      /* Gets the substring with the given length starting from the given index and removes its first occurrence */
      index = Number(index);
      length = Number(length);

      let substring = password.substring(index, index + length);
      password = password.replace(substring, '');

      return password;
    },
    Substitute: (password, substring, substitute) => {
      /* If the raw password contains the given substring, replaces all of its occurrences */
      if (password.includes(substring)) {
        password = password.replace(new RegExp(substring, 'g'), substitute);
      } else {
        console.log('Nothing to replace!');
      }

      return password;
    }
  };

  while (input[0] !== 'Done') {
    const [command, ...tokens] = input.shift().split(' ');
    const oldPassword = password;

    password = commands[command](password, ...tokens);

    if (password !== oldPassword) {
      console.log(password);
    }
  }

  console.log(`Your password is: ${password}`);
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done"]);
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
  "TakeOdd",
  "Cut 18 2",
  "Substitute ! ***",
  "Substitute ? .!.",
  "Done"]);