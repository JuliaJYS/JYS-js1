function isPalindrome (w) {
	w = w.replace(/,/g,"").replace(/ /g,"").toLowerCase();
	var z = w.length, i = 0;
	while (i <= z) {
		if (w[i] != w[(z-1)-i]) {
			return false;	
		}
		i++;
	}
	return true;
}

console.log(isPalindrome("level")); // logs 'true'
console.log(isPalindrome("levels")); // logs 'false'
console.log(isPalindrome("A car, a man, a maraca")); // logs 'true'