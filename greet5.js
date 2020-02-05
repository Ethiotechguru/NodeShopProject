var greetingsOr = 'Akam Neguma';
var greetingsAm = 'Tena Yistilign';

function greetAmharic(){
    console.log(greetingsOr);
}
function greetOromipha(){
    console.log(greetingsAm);
}



var obj1 = {
    name:'samuel',
    age:32,
    greetMe(){
        console.log('Hello ' + this.name);
    }
}

module.exports = {
    greetAmharic,
    greetOromipha,
    obj1
}