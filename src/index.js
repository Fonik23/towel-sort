
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === '' || matrix === undefined) return [];

  let result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 1) {
      result = result.concat(matrix[i].reverse())
    } else (
      result = result.concat(matrix[i])
    )
  }
  return result;
}