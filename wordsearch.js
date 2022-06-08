const transpose = function(matrix) {
    const newMatrix = [];
    for (const col of matrix) {
      for (const row in col) {
        if (newMatrix[row]) {
          newMatrix[row].push(col[row]);
        } else {
          newMatrix.push([col[row]]);
        }
      }
    }
    return newMatrix;
  };

const wordSearch = (letters, word) => { 
  
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    let newLetters = transpose(letters);

    const verticleJoin = newLetters.map(ls => ls.join(''));
    for (let l of verticleJoin) {
        if (l.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch

