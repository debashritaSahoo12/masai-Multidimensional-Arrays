function circularTraversal(n,matrix) {
    let str=""
for(let i=n-1;i>=0;i--){
 str+=matrix[i][0]+" "
}
for(let j=1;j<n;j++){
    str+=matrix[0][j]+" "
}
for(let i=1;i<n;i++){
    str+=matrix[i][n-1]+" "
}
for(let j=n-2;j>0;j--){
    str+=matrix[n-1][j]+" "
}
console.log(str);
}
let matrix=[[1,2,3],[4,5,6],[7,8,9]],n=3
circularTraversal(n,matrix)