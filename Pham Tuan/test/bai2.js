function  mergeStringAlternately(str1, str2) {
    let result = "";

    if (!str1 && !str2) return result;
	if (!str1) return str2;
	if (!str2) return str1;

	const arr1 = str1.split("");
	const arr2 = str2.split("");

    const arr=[];
    for (let i = 0; i < (arr1.length + arr2.length); i++){
        arr.push(arr1[i]);
        arr.push(arr2[i]);i

    }
    result = arr.join("");

    return result;
}

console.log(mergeStringAlternately("abc", "xy"));
console.log(mergeStringAlternately("abc", "xyz"));
console.log(mergeStringAlternately("abc", "x"));
console.log(mergeStringAlternately("abc", ""));
console.log(mergeStringAlternately("", "xyz"));
console.log(mergeStringAlternately("", ""));
