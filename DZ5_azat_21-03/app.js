const Reverse = function (str){
    let newStr = ''
    for(let i = str.length - 1; i >= 0; i--) newStr += str[i];
    return newStr
}
console.log(Reverse('привет'))
// 2
const average = function (){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) sum += arguments[i]
    return sum / arguments.length
}
console.log(average(1, 4, 3, 4, 7, 6, 7, 8, 9, 8))
console.log(average(700, 200, 100, 300))