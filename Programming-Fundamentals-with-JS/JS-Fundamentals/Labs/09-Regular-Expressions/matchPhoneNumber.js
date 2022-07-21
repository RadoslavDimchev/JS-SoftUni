function matchPhoneNumber(input = []) {
  const phoneNumbers = input[0];
  const pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
  const match = phoneNumbers.match(pattern);

  if (match) {
    console.log(match.join(', '));
  }
}


// second solution using exec()

/* function matchPhoneNumber(input = []) {
  const phoneNumbers = input[0];
  const validPhoneNumbers = [];
  const pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
  let match = pattern.exec(phoneNumbers);

  while (match) {
    validPhoneNumbers.push(match[0]);

    match = pattern.exec(phoneNumbers);
  }

  console.log(validPhoneNumbers.join(', '));
} */

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
matchPhoneNumber(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']);