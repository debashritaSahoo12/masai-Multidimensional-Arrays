let matrix=[[1,2,3,4,5],[6,7,8,9,1],[3,2,5,4,6],[7,8,9,1,2]];
let str="";
for(let i=0;i<matrix.length;i++){
            if (i % 2 == 0) {
                 for (let j = matrix[i].length - 1; j >= 0; j--) {
                   str += matrix[i][j] + " ";
                 }
            }else{
                for (let j = 0; j < matrix[i].length; j++) {
                    str += matrix[i][j] + " ";
                  }
            }
}
    console.log(str);
