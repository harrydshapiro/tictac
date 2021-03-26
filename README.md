## Problem

Write a function that returns the winner of a game of tic-tac-toe. The input will be a 3x3 matrix. The possible values are 'X', 'O', or undefined (an empty cell). There will only be one winner.

#### Sample input/output:

Input:
[
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['X', 'O', undefined],
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['O', 'X', undefined],
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;['O', undefined, 'X'],
]

Output:
'X'

## Suggested steps

#### State win conditions

1. All values in a row are the same, and not undefined
2. All values in a column are the same, and not undefined
3. All values in a diagonal are the same, and not undefined

#### Pseudocode the process that makes the most *sense* in your head

for each row
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if every cell in row has same value, return it
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else continue
for each column
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if every cell in column has same value, return it
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else continue 
for each diagonal
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if every cell in diagonal has same value, return it
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else continue

#### Take a step back, refactor pseudocode to abstract repeated work

- method for isolating the collections (rows, cols, diagonals)
- method for checking that any given collection is a win
- method that runs the win check on every isolated collection and returns the winning player if there is one

#### THEN start coding!
