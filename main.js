//const rm = require ("./remove")
//const qt = require ("./quest")
const readline = require('readline');

/*Initialisation du tableau
*/
var remainingMatches=16
var selectedLine
var selectedNbr
let table = [

  ["*", "*", "*", "*", "*", "*", "*", "*", "*"],

  ["*", " ", " ", " ", "|", " ", " ", " ", "*"],

  ["*", " ", " ", "|", "|", "|", " ", " ", "*"],

  ["*", " ", "|", "|", "|", "|", "|", " ", "*"],

  ["*", "|", "|", "|", "|", "|", "|", "|", "*"],

  ["*", "*", "*", "*", "*", "*", "*", "*", "*"],

]

/*Affichage
*/

function display(values) {
  const rows = values.length

  for (let x = 0; x < rows; x++) {
    console.log(table[x].join(''))    
  }
}

display(table)

function remove(line, nbr, table) {
  let count = 0;
  
  if ((line<=6)&&(line>=1)&&(nbr>=1)&&(nbr<=2)) {//Verifie que la ligne choisit existe et que le nombre d'allumette choisit est soit une soit deux (pas propre !!)
      
      for (let i = 0; i < 9; i++) {//Compte le nombre d'allumettes sur la ligne choisit par l'utilisateur
        if (table[line-1][i] == "|") count++ //Incrémente quand la valeur est "|"
      }
      
      if (nbr>count) {//S'il n'y as pas assez d'alumette sur la ligne
      console.log("------------------\nThere is not enough matches on this line.\nYour turn has been skipped.\n------------------")
      return table//Afficher une erreur
      } else {// Si le nombre d'alumette est dispo et que la ligne est bonne
              
            for (let i = 0; i < 9; i++) {//On parcours la ligne demandée
                if ((table[line-1][i] == "|")&&(nbr>0)) {//Si la valeur est une alumette
                  table[line-1][i] = " "//On enlève l'alumette
                  nbr-- //On réduit le nombre d'alumette à enlever
                  remainingMatches--
                }
              }

        return table//
      }
  } else {
    console.log("------------------\nPlease ensure to put an existing line.\nThe number of matches should be 1 or 2.\nYour turn has been skipped.\n------------------")
    return table//Afficher une erreur
  }

}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Matches: ', function (x) {
    rl.question('Line: ', function (y) {
        selectedNbr = x
        selectedLine = y
        table = remove(selectedLine, selectedNbr, table)
        display(table)

        rl.close();
    });
});

////AI
let aiMatches=Math.floor( Math.random() * (2 - 1 + 1) + 1)
let aiLines=Math.floor( Math.random() * (6 - 1 + 1) + 1)

//while (remainingMatches>1) {

  // qt('Matches: ').then((ans) => {
  //   selectedNbr = ans
  // })
  // qt('Line: ').then((ans) => {
  //   selectedLine = ans
  // })
//}



/*table = remove(2, 1, table)
display(table)

qt.question
table = remove(3, 1, table)
display(table)

table = remove(3, 2, table)
display(table)

table = remove(4, 2, table)
  
display(table)*/

/*table[4][table[0].length] = ' '
table[4][table[0].length- 3] = ' '

display(table)
*/