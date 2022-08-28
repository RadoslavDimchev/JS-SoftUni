function fromJSONToHTMLTable(input) {
  const parsed = JSON.parse(input);
  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
  };
  const escapeHTML = (str) => ('' + str).replace(/[&<>"']/g, (s) => entityMap[s]);

  let entries = `  \n<tr>${Object.keys(parsed[0]).map(key => '<th>' + escapeHTML(key) + '</th>').join('')}</tr>\n`;

  for (const obj of parsed) {
    entries += `  <tr>${Object.values(obj).map(key => '<td>' + escapeHTML(key) + '</td>').join('')}</tr>\n`;
  }

  console.log(`<table>${entries}</table>`);
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);
fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`);