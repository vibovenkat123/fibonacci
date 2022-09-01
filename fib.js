function fibs(n) {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    if (newArray.length == 0) {
      newArray.push(0)
    }
    else {
      console.log(newArray[i - 1])
      let num = newArray[i - 1] + newArray[i - 2];
      if (newArray[i - 2] == undefined) {
        newArray.push(i)
      }
      else {
        newArray.push(num)
      }
    }
  }
  return newArray;
}