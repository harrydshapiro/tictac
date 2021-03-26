function getTicTacToeWinner (board) {
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const row = board[rowIndex]

    for (let columnIndex = 0; columnIndex < row.length - 1; columnIndex++) {
      const cell = row[columnIndex]
      const nextCell = row[columnIndex + 1]
      if (cell !== nextCell) break
      if (columnIndex === row.length - 2) return cell
    }
  }

  for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
    const column = board.reduce((acc, currentRow) => {
      acc.push(currentRow[columnIndex])
      return acc
    }, [])

    for (let rowIndex = 0; rowIndex < column.length - 1; rowIndex++) {
      const cell = column[rowIndex]
      const nextCell = column[rowIndex + 1]
      if (cell !== nextCell) break
      if (columnIndex === row.length - 2) return cell
    }
  }

  const topLeftToBottomRightDiagonal = board.reduce((acc, currentRow, rowIndex) => {
    acc.push(currentRow[rowIndex])
    return acc
  }, [])

  for (let diagonalIndex = 0; diagonalIndex < topLeftToBottomRightDiagonal.length - 1; diagonalIndex++) {
    const cell = topLeftToBottomRightDiagonal[diagonalIndex]
    const nextCell = topLeftToBottomRightDiagonal[diagonalIndex + 1]
    if (cell !== nextCell) break
    if (columnIndex === topLeftToBottomRightDiagonal.length - 2) return cell
  }

  const topRightToBottomLeftDiagonal = board.reduce((acc, currentRow, rowIndex) => {
    const columnIndex = currentRow.length - 1 - rowIndex
    acc.push(currentRow[columnIndex])
    return acc
  }, [])

  for (let diagonalIndex = 0; diagonalIndex < topRightToBottomLeftDiagonal.length - 1; diagonalIndex++) {
    const cell = topRightToBottomLeftDiagonal[diagonalIndex]
    const nextCell = topRightToBottomLeftDiagonal[diagonalIndex + 1]
    if (cell !== nextCell) break
    if (columnIndex === topRightToBottomLeftDiagonal.length - 2) return cell
  }
}