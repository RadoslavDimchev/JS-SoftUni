function rageQuit(input = []) {
  const text = input.join('');
  const patternForDigits = /\d+/g;
  const patternForSymbols = /[^0-9]+/g;

  const digitsMatch = text.match(patternForDigits);

  const rageMessage = text
    .match(patternForSymbols)
    .map(symbol => symbol.toUpperCase().repeat(digitsMatch.shift()))
    .join('');

  const uniqueSymbols = new Set(rageMessage).size;

  console.log(`Unique symbols used: ${uniqueSymbols}`);
  console.log(rageMessage);
}

rageQuit(['a3']);
rageQuit(['aSd2&5s@1']);
rageQuit(["e-!btI17z=E:DMJ19U1Tvg VQ>11P'qCmo.-0YHYu~o%/%b.}a[=d15fz^'{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D'xi]-~17 *%p'%|N>zq@ %xBD18<Y(fHh`@gu#Z#p'Z<v13fI]':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15"]);