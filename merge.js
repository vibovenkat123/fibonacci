function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let leftSide = mergeSort(arr.slice(0, middle));
  let rightSide = mergeSort(arr.slice(middle))
  return merge(leftSide, rightSide)
}
function merge(l, r) {
  let mergedArray = [];
  while (l.length > 0 && r.length > 0) {
    let smallerFirst = l[0] > r[0] ? r : l;
    let mergeElem = smallerFirst.shift()
    mergedArray.push(mergeElem)
  }
  return [...mergedArray, ...l, ...r]
}
console.log(mergeSort([91, 30, 28, 7, 17, 5, 38]))
/* should be [
  5,  7, 17, 28,
 30, 38, 91
] */