// Thời gian làm bài: 1h30p (không kể 5p đọc đề và 10p để thao tác git bash)
// Yêu cầu bắt buộc:
// - Chỉ sử dụng HTML, CSS, JS (không sử dụng hay import bất kỳ thư viện ngoài nào khác)
// - Giao diện người dùng tự sáng tạo, sẽ được cộng điểm nếu giao diện đẹp và dễ sử dụng (đối với bài Ex4)
// - Share toàn bộ màn hình (bao gồm cả các màn hình bên ngoài vscode) và mở micro trong suốt quá trình làm bài
// - Khi hết giờ làm bài, các em lần lượt chuyển sang đường link meet thứ 2 để thực hiện các thao tác git bash
// Các em đọc kỹ đề và làm đúng yêu cầu đề bài. Good luck!

// Trường Đại học Phenikaa có tiêu chuẩn chấm điểm bài thi cho sinh viên như sau:
// - Bài thi có thang điểm từ 0 đến 10
// - Điểm số bài thi được chuẩn hóa bằng hệ điểm chữ cụ thể là:
// A [8.5 - 10], B [7.0 - 8.5), C [5.5 - 7), D [4.0 - 5.5), F [0 - 4]

// Thầy Trần Quang Toàn là 1 giảng viên tại trường và có cách làm tròn điểm của bài thi như sau:
// - Nếu điểm của bài thi nhỏ hơn 4 thì không làm tròn
// - Nếu chênh lệch giữa điểm của bài thi và "điểm làm tròn cận trên" X (thành phần thập phân là 0 hoặc 5)
// của điểm đó nhỏ hơn 0.3 thì làm tròn thành X, còn lại thì không làm tròn
// VD: [8.0, 8.4] -> X = 8.5 , [8.5, 9.0] -> X = 9.0
// => Áp dụng quy tắc làm tròn: 4.2 -> 4.2, 4.3 -> 4.5, 4.6 -> 4.6, 4.8 -> 5.0

// ---------------------------------------------------------------------------------------------------------------//

// Ex1: Hoàn thiện hàm roundScores để trả về mảng chứa các điểm làm tròn của các điểm trong mảng scores truyền vào
/**
 * Hàm làm tròn điểm của bài thi
 * @param {number[]} scores Mảng chứa các điểm số của bài thi
 * @return {number[]} Mảng chứa các điểm làm tròn của các điểm từ mảng scores truyền vào
 * @example roundScores([8.0, 8.4, 4.2, 4.3, 4.6, 4.8]) => [8.0, 8.5, 4.2, 4.5, 4.6, 5.0]
 */
function roundScores(scores) {
    // Viết code ở đây
    return scores.map((element) => {
        const x = Math.floor(element * 10 % 10);
        if (x < 3) {
            return element;
        }
        else if (x >= 3 && x <= 5) {
            return Math.floor(element) + 0.5;
        } else if (x > 5 && x < 8) {
            return element;
        } else {
            return Math.ceil(element);
        }
    })
    // return finalScores;

}
console.log(roundScores([8.0, 8.4, 4.2, 4.3, 4.6, 4.8]))


// Ex2: Viết hàm chuyển đổi từ điểm số sang điểm chữ theo tiêu chuẩn của trường

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
    // A [8.5 - 10], B [7.0 - 8.5), C [5.5 - 7), D [4.0 - 5.5), F [0 - 4]
    if (score < 4) {
        return "F";
    } else if (score >= 4 && score < 5.5) {
        return "D";
    } else if (score >= 5.5 && score < 7) {
        return "C";
    } else if (score >= 7 && score < 8.5) {
        return "B";
    } else {
        return "A";
    }
    // return grade;
}

console.log(convertScoreToGrade(3))
console.log(convertScoreToGrade(5))
console.log(convertScoreToGrade(6))
console.log(convertScoreToGrade(6.5))
console.log(convertScoreToGrade(8.0))
console.log(convertScoreToGrade(7))
console.log(convertScoreToGrade(8.4))
console.log(convertScoreToGrade(8.8))

// Ex3: Hoàn thiện hàm sắp xếp danh sách sinh viên theo 2 tiêu chí
// - Sắp xếp theo điểm số (đã làm tròn qua Ex1) từ cao đến thấp
// - Nếu 2 sinh viên có điểm số bằng nhau thì tiếp tục sắp xếp tên sinh viên theo thứ tự bảng chữ cái

/**
 * Hàm sắp xếp danh sách sinh viên lần lượt theo điểm số và tên
 * @param {{fullName: string; score: number}[]} students Danh sách sinh viên đầu vào lả mảng chứa các object gồm 2 thuộc tính là fullName và score
 * @return {{fullName: string; score: number}[]} Danh sách sinh viên sau khi sắp xếp
 */

const listStudent = [

    { fullName: "Nguyễn Văn Hòa", score: 8.2 },
    { fullName: "Nguyễn Hải Long", score: 7.5 },
    { fullName: "Phạm Tuấn", score: 7.2 },
    { fullName: "Vũ Hiến", score: 8.8 },
    { fullName: "Nguyễn Khành Linh", score: 8.0 }
];

function sortStudents(students) {
    // Viết code ở đây
    // - Sắp xếp theo điểm số (đã làm tròn qua Ex1) từ cao đến thấp
    // - Nếu 2 sinh viên có điểm số bằng nhau thì tiếp tục sắp xếp tên sinh viên theo thứ tự bảng chữ cái

    let newArr = students.map((element, index) => {
        return {
            ...element,
            score: roundScores(students.map(a => a.score))[index]
        }
    })
    var compare = (a, b) => {
        if (a.score > b.score) {
            return -1;
        } else if (a.score < a.score) {
            return 11;
        }
        else {
            if (a.fullName > b.fullName) {
                return -1;
            } else {
                return 1;
            }
        }
    }

    return newArr.sort(compare);

    // return sortedList;
}

console.log(sortStudents(listStudent))

// Ex4: Viết 1 trang web đơn giản để thầy Toàn có thể tính toán nhanh điểm số của sinh viên. Yêu cầu:
// - Giảng viên có thể nhập vào danh sách sinh viên bao gồm họ tên và điểm số
// - Khi nhấn nút "Tính điểm" thì sẽ hiển thị được bảng chứa danh sách sinh viên đã được làm tròn điểm số và sắp xếp với tiêu chí từ bài 3
// với các cột: Họ tên, Điểm (bằng số), Điểm (bằng chữ)
function addStudent(event) {
    const newStudent = {
        fullName: event.target.fullName,
        score: event.target.score
    }
    event.preventDefault();
    console.log(newStudent)
}