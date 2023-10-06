// matrix

// [ [1,2,3] , [4,5,6] ]
/*
    1 2 3
    4 5 6
*/

// create matrix
function createMatrix(row, col) {
  let matrix = [];
  for (let i = 0; i < row; i++) {
    let rows = [];
    for (let j = 0; j < col; j++) {
      rows.push(0);
    }
    matrix.push(rows);
  }
  return matrix;
}

console.log(createMatrix(5, 5));

// matrix with numbering
function matrixNumbering(row, col) {
  let matrix = [];
  let counter = 1;
  for (let i = 0; i < row; i++) {
    let rows = [];
    for (let j = 0; j < col; j++) {
      rows.push(counter);
      counter++;
    }
    matrix.push(rows);
  }
  return matrix;
}

console.log(matrixNumbering(2, 3));

// matrix with custom values
function customMatrix(row, col, values) {
  const size = row * col;
  if (values.length !== size) return "invalid values";
  let matrix = createMatrix(row, col);
  let counter = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix[i][j] = values[counter++];
    }
  }
  return matrix;
}

console.log(customMatrix(2, 2, [1, 2, 3, 4]));

// matrix addition
function matrixAddition(matrix1, matrix2) {
  if (matrix1.length !== matrix2.length) "Matrices must be the same size";

  const sum = [];
  for (let i = 0; i < matrix1.length; i++) {
    sum[i] = [];
    for (let j = 0; j < matrix1[i].length; j++) {
      sum[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return sum;
}

console.log(
  matrixAddition(
    [
      [1, 3],
      [3, 1],
    ],
    [
      [1, 2],
      [2, 1],
    ]
  )
);
