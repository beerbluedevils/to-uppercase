function capitalize(str){
    let lowerLetters = str.toLowerCase().split(" ");
    let newArr = [];
    for( let i = 0; i < lowerLetters.length; i++){
        newArr.push(lowerLetters[i].replace(lowerLetters[i][0] , lowerLetters[i][0].toUpperCase()))
    }
    return newArr.join(" ");
}
