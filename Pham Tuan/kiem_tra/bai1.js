function roundScores(scores) {
	let finalScores;
    const x =scores - Math.floor(scores);
    if(x < 0.4) {
        finalScores=Math.floor(scores);
    } else if(x <=0.6) {
        finalScores=scores;
    } else {
        finalScores =Math.floor(scores) +1;
    }

	return finalScores;
}
console.log(roundScores(8.0));
console.log(roundScores(8.4));
console.log(roundScores(4.2));
console.log(roundScores(4.5));
console.log(roundScores(5.0));
