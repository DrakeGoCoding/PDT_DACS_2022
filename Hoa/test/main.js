// Ex1: Hoàn thiện hàm roundScores để trả về mảng chứa các điểm làm tròn của các điểm trong mảng scores truyền vào
/**
 * Hàm làm tròn điểm của bài thi
 * @param {number[]} scores Mảng chứa các điểm số của bài thi
 * @return {number[]} Mảng chứa các điểm làm tròn của các điểm từ mảng scores truyền vào
 * @example roundScores([8.0, 8.4, 4.2, 4.3, 4.6, 4.8]) => [8.0, 8.5, 4.2, 4.5, 4.6, 5.0]
 */
 function roundScores(scores) {
    return scores.map((element) => {
        const x = Math.floor(element * 10 % 10);
        if (x < 3) {
            return Math.floor(element);
        }
        else if (x >= 3 && x <=5) {
            return Math.floor(element) + 0.5;
        }
        else if (x> 5 && x <8) {
            return element
        }
        else {
            return Math.ceil(element);
        }
    })
}

console.log(roundScores([8.8, 8.4, 4.2, 4.3, 4.6, 4.8]))
// Ex2: Viết hàm chuyển đổi từ điểm số sang điểm chữ theo tiêu chuẩn của trường
// A [8.5 - 10], B [7.0 - 8.5), C [5.5 - 7), D [4.0 - 5.5), F [0 - 4]
/**
 * Hàm chuyển đổi điểm số sang điểm chữ
 * @param {number} score
 * @returns {'A' | 'B' | 'C' | 'D' | 'F'}
 * @example
 * convertScoreToLetter(8.0) => 'B'
 * convertScoreToLetter(6.5) => 'C'
 */
function convertScoreToGrade(score) {
	// Viết code ở đây
	if(score < 4.0 ) {
		return "F";
	}else if(score >= 4.0 && score < 5.5){
		return "D";
	}else if(score >= 5.5 && score < 7.0){
		return "C";
	}else if(score >= 7.0 && score < 8.5) {
		return "B";
	}else if(score >= 8.5 && score <= 10.0) {
		return "A";
	}
}
console.log(convertScoreToGrade(8.0));
console.log(convertScoreToGrade(4.0));
// Ex3: Hoàn thiện hàm sắp xếp danh sách sinh viên theo 2 tiêu chí
// - Sắp xếp theo điểm số (đã làm tròn qua Ex1) từ cao đến thấp
// - Nếu 2 sinh viên có điểm số bằng nhau thì tiếp tục sắp xếp tên sinh viên theo thứ tự bảng chữ cái

/**
 * Hàm sắp xếp danh sách sinh viên lần lượt theo điểm số và tên
 * @param {{fullName: string; score: number}[]} students Danh sách sinh viên đầu vào lả mảng chứa các object gồm 2 thuộc tính là fullName và score
 * @return {{fullName: string; score: number}[]} Danh sách sinh viên sau khi sắp xếp
 */
function sortStudents(students) {
	// Viết code ở đây
	for(let i = 0; i < students.length; i++) {
		for(let j = 0; j < students[i].length; j++) {
			if(students[i].score > students[j].score) {
				return sortedList.push(students[i].fullName + students[j].score);
			}
		}
	}
}

let students = [
	{
		fullName: 'Hòa',
		score: 9
	},
	{
		fullName: 'Đức',
		score: 6
	}
]

console.log(sortStudents(students));