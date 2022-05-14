JQuery Link --
<!-- <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script> -->
Bootstrap Link -- 
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> -->
Font Awesome Link --
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" /> -->

--------------------------------------------------------------------------------------------------------
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