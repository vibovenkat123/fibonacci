function fibs(n) {
  let newArray = [0, 1];
  for (let i = 2; i < n; i++) {
    newArray.push(newArray[i - 1] + newArray[i - 2])
  }
  return newArray;
}
function fibsRec(n, array = [0, 1]) {
  if (array.length >= n) {
    return array;
  }

  array.push(array.at(-1) + array.at(-2));
  return fibsRec(n, array);
}