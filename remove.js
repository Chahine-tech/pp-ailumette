const tb = require ("./main")

function remove() {


const xColumns = tb[0].length
  tb[4][xColumns] = '  '
  tb[4][xColumns - 1] = '  '

}


module.exports = remove

