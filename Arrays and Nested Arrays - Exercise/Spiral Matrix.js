function solve(row, col) {
    let num = 1;
    let finalArr = [];
    for (let index = 0; index < row; index++) {
        let curArr = [];
        curArr.length = col;
        finalArr.push(curArr);
    }
    let startRowIndex = 0;
    let startColIndex = 0;
    while (startRowIndex < row && startColIndex < col) {
        for (let index = startColIndex; index < col; ++index) {
            finalArr[startRowIndex][index] = num++
        }
        startRowIndex++;
        for (let index = startRowIndex; index < row; ++index) {
            finalArr[index][col - 1] = num++;
        }
        col--;
        if (startRowIndex < row) {
            for (let index = col - 1; index >= startColIndex; --index) {
                finalArr[row - 1][index] = num++;

            }
            row--;
        }
        if (startRowIndex < col) {
            for (let index = row - 1; index >= startRowIndex; --index) {
                finalArr[index][startColIndex] = num++;


            }
            startColIndex++;
        }
    }
   finalArr.forEach(row => console.log(row.join(" ")));
}