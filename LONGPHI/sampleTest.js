// Thời gian làm bài: 1h30p (không kể 5p đọc đề và 10p để thao tác git bash)
// Yêu cầu bắt buộc:
// - Chỉ sử dụng HTML, CSS, JS (không sử dụng hay import bất kỳ thư viện ngoài nào khác)
// - Giao diện người dùng tự sáng tạo, sẽ được cộng điểm nếu giao diện đẹp và dễ sử dụng (đối với bài Ex4)
// - Share toàn bộ màn hình (bao gồm cả các màn hình bên ngoài vscode) và mở micro trong suốt quá trình làm bài
// - Khi hết giờ làm bài, các em lần lượt chuyển sang đường link meet thứ 2 để thực hiện các thao tác git bash
// Các em đọc kỹ đề và làm đúng yêu cầu đề bài. Good luck!

// Ex1. Hoàn thiện hàm tìm số đối xứng chẵn dưới đây

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
 * Hàm tìm số đối xứng chẵn
 * (số đối xứng chẵn là số đọc từ trái sang phải và từ phải sang trái đều giống nhau trong cùng 1 dãy số gồm số các phần tử là số chẵn)
 * VD: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 * Các cặp số đối xứng chẵn là (1, 10), (2, 9), (3, 8), (4, 7), (5, 6)
 * @param {Integer} range Giới hạn phạm vi tìm kiếm (số nguyên dương)
 * @param {Number} inputNumber Số cần tìm (số nguyên dương)
 * @return {Number | null} Trả về số đối xứng chẵn trong phạm vi nếu tìm thấy hoặc null nếu không tìm thấy
 * @example
 * findSymmetricNumber(10, 8) => 3
 * findSymmetricNumber(10, 3) => 8
 * findSymmetricNumber(9, 3) => null. vì trong phạm vi lẻ (1->9) không có số đối xứng chẵn
 * findSymmetricNumber(10, 11) => null. vì 11 nằm ngoài phạm vi tìm kiếm
 */
 function roundScores(scores) {
	// Viết code ở đây

	return finalScores;
}

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

	return grade;
}

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

	return sortedList;
}

// - Kiểm tra tính đúng đắn của giá trị nhập vào
// + Nếu người dùng nhập vào 1 ký tự không phải số nguyên thì hiển thị cảnh báo
// "Vui lòng nhập vào 1 số nguyên".
// + Nếu người dùng nhập vào 1 số nằm ngoài phạm vi cho trước thì hiển thị cảnh báo
// "Vui lòng nhập vào 1 số trong phạm vi 1 - 100".

// - Yêu cầu bổ sung:
// + Tăng độ khó cho trò chơi bằng cách giới hạn số lần đoán của người dùng.
// + Số lần đoán được nhập từ bàn phím (VD: 3, 4, 5).
// + Nếu người dùng đoán sai thì hiển thị thông báo "Hãy thử 1 số cao/thấp hơn. Bạn còn n cơ hội!".
// với n là số lần đoán còn lại.
// + Nếu người dùng đoán sai quá số lần cho phép thì hiển thị thông báo "Bạn đã thua cuộc. Đáp án là x!".
// + Nếu người dùng đoán đúng trước khi hết số lần cho phép thì hiển thị thông báo
// "Chúc mừng bạn đã đoán chính xác sau 2 lần đoán".

// - Yêu cầu bắt buộc
// + Viền của các nút (button) và input phải được bo tròn 4px
// + Màu chữ mặc định được xác định bằng ngày tháng năm sinh của bạn
// VD: 21/12/2000 -> #211200
// (nếu chữ có màu sắc khó nhìn thì hãy thay đổi màu background của trang web sao cho phù hợp)
// + Chỉ sử dụng HTML, CSS, JS
