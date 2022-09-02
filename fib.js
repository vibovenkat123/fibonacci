function fibs(n) {
  let newArray = [0, 1];
  for (let i = 2; i < n; i++) {
    if (newArray.length == 0) {
      newArray.push(0)
    }
    else {
      let num = newArray[i - 1] + newArray[i - 2];
      newArray.push(num)
    }
  }
  return newArray;
}
console.log(fibs(8))