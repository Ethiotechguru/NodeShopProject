let path = require('path')
var greetings = require('./greetings.json');
function greet(){
    console.log(greetings.en);
};
console.log(__dirname);
console.log(path.dirname(__filename));
module.exports = greet;