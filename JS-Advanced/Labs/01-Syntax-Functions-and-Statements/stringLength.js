function stringLength(arg1, arg2, arg3) {
  const totalLength = arg1.length + arg2.length + arg3.length;
  const averageLength = Math.floor(totalLength / 3);

  console.log(totalLength);
  console.log(averageLength);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');