// Thời gian làm bài: 1h30p (không kể 5p đọc đề)
// Các em đọc kỹ đề và làm đúng yêu cầu đề bài. Good luck!

// Ex1. Hoàn thiện hàm tìm số đối xứng dưới đây

/**
 * Hàm tìm số đối xứng
 * @param {Integer} range Giới hạn phạm vi tìm kiếm (số nguyên dương)
 * @param {Number} inputNumber Số cần tìm (số nguyên dương)
 * @return {Number | null} Trả về số đối xứng trong phạm vi nếu tìm thấy hoặc null nếu không tìm thấy
 * @example
 * findSymmetricNumber(10, 8) => 3
 * findSymmetricNumber(10, 3) => 8
 * findSymmetricNumber(10, 0) => 5
 * findSymmetricNumber(10, 5) => 0
 * findSymmetricNumber(9, 3) => null
 * findSymmetricNumber(10, 11) => null
 */
function findSymmetricNumber(range, inputNumber) {
	let result = null;

	// Viết code ở đây

	return result;
}

// Ex2. Hoàn thiện hàm merge xen kẽ 2 chuỗi

/**
 * Hàm merge xen kẽ 2 chuỗi
 * @param {String} str1 Chuỗi đầu vào 1
 * @param {String} str2 Chuỗi đầu vào 2
 * @return {String} Trả về chuỗi kết quả đã merge xen kẽ 2 chuỗi
 * @example
 * mergeStringAlternately('abc', 'xyz') => 'axbycz'
 * mergeStringAlternately('abc', 'xy') => 'axbyc'
 * mergeStringAlternately('abc', 'x') => 'axbc'
 * mergeStringAlternately('abc', '') => 'abc'
 * mergeStringAlternately('', 'xyz') => 'xyz'
 * mergeSmergeStringAlternatelytring('', '') => ''
 */
function mergeStringAlternately(str1, str2) {
	let result = "";

	// Viết code ở đây

	return result;
}

// Ex3. Viết 1 trang web đơn giản cho trò chơi đoán số ngẫu nhiên với các yêu cầu
// - Hệ thống tự khởi tạo 1 số nguyên ngẫu nhiên x trong phạm vi cho trước
// (nhập từ bàn phím. VD: 1, 100) mỗi lần bắt đầu trò chơi.

// - Trò chơi bắt đầu khi người dùng nhập vào 1 số và nhấn nút "Đoán"

// - Hệ thống kiểm tra số đó có đúng với số đã khởi tạo hay không
// + Nếu đúng thì hiển thị thông báo "Chúc mừng bạn đã đoán đúng".
// + Nếu sai thì hiển thị thông báo "Số bạn đoán không đúng, hãy thử 1 số cao/thấp hơn".

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
