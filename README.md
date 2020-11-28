# to-uppercase
Create new string with capitalize letters

function titleCase(str) {
	let lowerLetters = str.toLowerCase().split(" ");
	let newArr = [];
	for(let i = 0; i < lowerLetters.length; i++){
		newArr.push(lowerLetters[i].replace(lowerLetters[i][0] , lowerLetters[i][0].toUpperCase()));
	}
	return newArr.join(" ");
  }

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))
