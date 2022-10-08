// Thời gian làm bài: 1h30p (không kể 5p đọc đề)
// Các em đọc kỹ đề và làm đúng yêu cầu đề bài. Good luck!

// Ex1. Hoàn thiện hàm tìm số đối xứng dưới đây

/**
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
function findSymmetricNumber(range, inputNumber) {
	let result = null;

	const arr = Array.from({ length: range }, (_, i) => i + 1);

	if (arr.length % 2 !== 0) {
		return result;
	}

	if (!arr.length) return result;
	if (!arr.every((num) => num > 0)) return result;

	const inputNumIndex = arr.indexOf(inputNumber);

	if (!inputNumIndex) return result;

	const index = arr.length - 1 - inputNumIndex;
	result = arr[index];

	return result;
}

console.log("Ex 1:");
console.log(findSymmetricNumber(10, 8));
console.log(findSymmetricNumber(10, 8));
console.log(findSymmetricNumber(10, 3));
console.log(findSymmetricNumber(9, 3));
console.log(findSymmetricNumber(10, 11));

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
 * mergeStringAlternatelytring('', '') => ''
 */
function mergeStringAlternately(str1, str2) {
	let result = "";

	if (!str1 && !str2) return result;
	if (!str1) return str2;
	if (!str2) return str1;

	const arr1 = str1.split("");
	const arr2 = str2.split("");

	let resArr = [];

	arr1.forEach((elem, index) => {
		resArr.push(elem);
		if (arr2[index]) resArr.push(arr2[index]);
	});

	result = resArr.join("");
	return result;
}

console.log("-------------------------------------");
console.log("Ex 2:");

console.log(mergeStringAlternately("abc", "xy"));
console.log(mergeStringAlternately("abc", "xyz"));
console.log(mergeStringAlternately("abc", "x"));
console.log(mergeStringAlternately("abc", ""));
console.log(mergeStringAlternately("", "xyz"));
console.log(mergeStringAlternately("", ""));

console.log("-------------------------------------");

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
