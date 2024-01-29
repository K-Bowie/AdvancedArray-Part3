//Reduce

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function extractValue(arr, key){
    return arr.reduce(function(accumulator, currentObj){
        accumulator.push(currentObj[key]);
        return accumulator;
    }, []);
}
console.log(extractValue(arr,'name'));


function vowelCount(str){
    let vowels = `aeiou`;
    return str.split("").reduce(function(accumulator,currentVowel){
        let lowerCasedLetter = currentVowel.toLowerCase();
        if (vowels.indexOf(lowerCasedLetter) !== -1){
            if (accumulator[lowerCasedLetter]) {
                accumulator[lowerCasedLetter]++;
            } else{
                accumulator[lowerCasedLetter] = 1;
            }
        }
        return accumulator
    }, {});
}
console.log(vowelCount('Elie'), 
vowelCount('Tim'),
vowelCount('Matt'),
vowelCount('hmmm'),
vowelCount('I Am awesome and so are you'));


const array = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accumulator, currentObj){
        currentObj[key] = value;
        accumulator.push(currentObj);
        return accumulator;
    }, []);
}

console.log(addKeyAndValue(arr, 'title', 'Instructor')); 

//[
//  {title: 'Instructor', name: 'Elie'},
//  {title: 'Instructor', name: 'Tim'},
//  {title: 'Instructor', name: 'Matt'},
//  {title: 'Instructor', name: 'Colt'}
//];


function partition(arr, callback){
    return arr.reduce(function(accumulator,currentVal){
        if(callback(currentVal)){
            accumulator[0].push(currentVal);
        } else {
            accumulator[1].push(currentVal);
        }
        return accumulator;
    }, [[],[]]);
}


function isEven(val){
    return val % 2 === 0;
}
  
const numArr = [1,2,3,4,5,6,7,8];
  
console.log(partition(numArr, isEven)); // [[2,4,6,8], [1,3,5,7]];
  
const names = ['Elie', 'Colt', 'Tim', 'Matt'];

function isLongerThanThreeCharacters(val){
    return val.length > 3;
}
  
console.log(partition(names, isLongerThanThreeCharacters)) // [['Elie', 'Colt', 'Matt'], ['Tim']]

