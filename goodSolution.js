function allValuesSame (arrayOfValues) {
  for (let i = 0; i < arrayOfValues.length - 1; i++) {
    if (arrayOfValues[i] !== arrayOfValues[i + 1] || arrayOfValues[i] === undefined) {
      return false
    }
  }

  return true
}

function getCellCollectionsToTest (board) {
  const cellCollection = {
    rows: [
    ],
    columns: [
    ],
    diagonals: [
      [],
      []
    ]
  }

  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      rows[rowIndex] = rows[rowIndex] || []
      rows[rowIndex].push(cell)

      columns[colIndex] = columns[colIndex] || []
      columns[colIndex].push(cell)

      if (rowIndex === colIndex) {
        diagonals[0].push(cell)
      }
      
      if (rowIndex === (row.length - 1 - colIndex)) {
        diagonals[1].push(cell)
      }
    })
  })

  return cellCollection
}

function getTicTacToeWinner (board) {
  const cellCollectionsByCategory = getCellCollectionsToTest(board)
  
  for (let key in cellCollectionsByCategory) {
    const collectionsInCategory = cellCollectionsByCategory[key]

    for (let collectionIndex = 0; collectionIndex < collectionsInCategory.length; collectionIndex++) {
      const collection = collectionsInCategory[collectionIndex]

      if (allValuesSame(collection)) {
        return collection[0]
      }
    } 
  }
}