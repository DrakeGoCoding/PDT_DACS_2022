function convertScoreToGrade(score) {
	let grade;
    if (score < 4.0){
        return grade = 'F';
    } else if (score < 6.5){
        return grade = 'D';

    }
    else if (score < 7.0) {
        return grade = 'C';

    } else if (score <8.5){
        return grade = 'B';
    }
    else {
        return grade = 'A';
    }

	
}
console.log(convertScoreToGrade(8.0));
console.log(convertScoreToGrade(6.5));