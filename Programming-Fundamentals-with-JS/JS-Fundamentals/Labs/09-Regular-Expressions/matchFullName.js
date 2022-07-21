function matchFullName(input = '') {
  const pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}\b/g;
  const match = input.match(pattern);

  if (match) {
    console.log(match.join(' '));
  }
}


// second solution using exec()

/* function matchFullName(input = '') {
  const pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}\b/g;
  const valids = [];
  let valid;

  while ((valid = pattern.exec(input)) !== null) {
    valids.push(valid[0]);
  }

  console.log(valids.join(' '));
} */

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");