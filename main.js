const map = []

const columns = 4
const rows = 5

for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
        if (!map[x]) {
            map[x] = []
        }

        let element = ' ' // available values: *, |, ' '
        if (x === 0 || y === 0 || y === columns - 1 || x === rows - 1) {
            element = '*'
        }

        map[x][y] = element
    }
}

function display(values) {
  const rows = values.length

  for (let x = 0; x < rows; x++) {
    console.log(map[x].join(''))
  }
}

display(map)