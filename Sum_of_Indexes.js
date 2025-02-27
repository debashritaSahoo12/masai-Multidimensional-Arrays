let martix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < martix.length; i++) {
  let str = "";
  for (let j = 0; j < martix[i].length; j++) {
    str += i + j + " ";
  }
  console.log(str);
}
