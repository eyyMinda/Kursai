JQuery Link --
<!-- 
<script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
 -->
Bootstrap Link -- 
<!-- 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
-->
Font Awesome Link --
<!-- 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" /> 
-->

--------------------------------------------------------------------------------------------------------

\\\\\\\\\RegEx\\\\\\\\\
 (example: (/(^\w{1})|(\s+\w{1})/g)   )
╚ ^ matches the beginning of the string.
╚ \w matches any word character.
╚ {1} takes only the first character.
╚ Thus, ^\w{1} matches the first letter of the word.
╚ | works like the boolean OR. It matches the expression after and before the |.
╚ \s+ matches any amount of whitespace between the words (for example spaces, tabs, or line breaks).

\\for Array only\\
.match(/\b(\w+)\b/g) //Seperate a string of multiple words by one word

\\forEach layout\\
['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
    console.log(item, 'is at: ', index, 'in: ', array)
})

\\each first Letter toUpperCase with String.prototype.functionName \\
String.prototype.toJadenCase = function () {
        return this.split(' ').map(function(word){
         return word.charAt(0).toUpperCase() + word.slice(1)}).join(' ')
};
//Use 'string'.toJadenCase()
\\Random Seperation\\
puzzle = "2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3"
puzzle = puzzle.split('.').join('-')

newPuzzle = []
for (let p = 0; p < puzzle.length; p++) {
    if (p == 8) {
        newPuzzle.push(puzzle.slice(0, p))
    } else if (p == 17 || p == 26 || p == 35 || p == 44 || p == 53 || p == 62 || p == 71 || p == 80) {
        newPuzzle.push(puzzle.slice(p - 8, p + 1))
    }
}