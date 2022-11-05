// 1. Khởi tạo 1 mảng các đối tượng với số lượng tùy ý, trong đó mỗi đối tượng mô tả 1 cuốn sách gồm các thuộc tính
// - title (tiêu đề, string),
// - author (tác giả, string),
// - publishedYear (năm xuất bản, number)
// - price (giá tiền, number).

var sach = [
    {
        "title": "Đắc Nhân Tâm",
        "author": "Hien",
        "publishedYear": 2019,
        "price": 200000
    },
    {
        "title": "Hai Con Vịt",
        "author": "Vũ Trọng Phụng",
        "publishedYear": 2000,
        "price": 250000
    },

]
// 2. Viết hàm in ra danh sách các cuốn sách các cuốn sách theo mẫu:
// <index>. "<title>"" by <author>, published in <publishedYear> - <price> VNĐ
// Ví dụ:
// 1. "Javascript for Dummies" by Jon Doe, published in 2001 - 100000 VNĐ
// 2. "Dummies learn Javascript" by Joe Don, published in 2010 - 1000000 VNĐ

function display(sach) {
    console.log(sach)
    // console.log(sach[0].title)
}
display(sach);


// 3. Viết hàm cho phép người dùng thêm sách mới (nhập vào 4 thuộc tính ở bài 1) vào trong mảng,
// trong đó 3 thuộc tính title, author và publishedYear là bắt buộc, price có thể không nhập.
// - Với 2 thuộc tính title và author
//   + Nếu người dùng nhập vào 1 chuỗi rỗng thì chuỗi nhập vào không được rỗng.
//   + Không được phép có 2 cuốn sách có cùng title và author.
// - Với 2 thuộc tính publishedYear và price(nếu có nhập) phải kiểm tra xem giá trị nhập vào có phải số nguyên dương hay không.
// Nếu sai thì không thêm sách vào mảng và in ra lỗi tương ứng.
// Ví dụ:
// bookList = []
// addBook(bookList, "Javascript for Dummies", "Jon Doe", 2001, 100000) // Thành công
// addBook(bookList, "Dummies learn Javascript", "Joe Don", 2010, 1000000) // Thành công
// addBook(bookList, "Dummies learn Javascript", "Joe Don", 2010, "1000000") // Thất bại
// addBook(bookList, "Dummies learn Javascript", "Joe Don", "2010", 1000000) // Thất bại
// addBook(bookList, "Dummies learn Javascript", "Joe Don", 2010) // Thành công

function addBook(sach) {

}
addBook(sach);

// 4. Viết hàm cho phép người dùng xóa sách theo index (vị trí trong mảng) hoặc title (tiêu đề sách).
// Ví dụ:
// bookList = [
//   { title: "Javascript for Dummies", author: "Jon Doe", publishedYear: 2001, price: 100000 },
//   { title: "Dummies learn Javascript", author: "Joe Don", publishedYear: 2010, price: 1000000 }
// ]
// removeBook(bookList, 0) // Xóa sách ở vị trí 0
// removeBook(bookList, "Dummies learn Javascript") // Xóa sách có tiêu đề "Dummies learn Javascript"

function deleteBook(arr, index) {
    if (typeof index === 'number') {
        arr.splice(index, 1);
    }
    else if (typeof index === 'string') {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]["title"] == index) {
                arr.splice(i, 1);
            }
        }
    }
}
// deleteBook(sach, "Đắc Nhân Tâm");

// 5. Viết hàm cho phép người dùng cập nhật thông tin giá tiền của sách theo index (vị trí trong mảng) hoặc title (tiêu đề sách)
// và in ra danh sách các cuốn sách sau khi cập nhật.
// Ví dụ:
// updateBook(bookList, 0, 200000) // Cập nhật giá tiền của sách ở vị trí 0
// updateBook(bookList, "Dummies learn Javascript", 2000000) // Cập nhật giá tiền của sách có tiêu đề "Dummies learn Javascript"


function updateBook(arr, index, x) {
    if (typeof index == 'number') {
        arr[index].price = x;
    } else if (typeof index == 'string') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].title == index)
                arr[i].price = x;
        }
    } 
}
// updateBook(sach, 0, 99999999999);

// 6. Viết hàm sắp xếp danh sách các cuốn sách theo 1 thuộc tính bất kỳ (title, author, publishedYear, price) theo chiều tăng (asc) hoặc giảm (desc)
// và in ra danh sách các cuốn sách sau khi sắp xếp.
// Ví dụ:
// sortBook(bookList, "title", "asc") // Sắp xếp theo tiêu đề sách theo chiều tăng dần
// sortBook(bookList, "author", "desc") // Sắp xếp theo tác giả sách theo chiều giảm dần
// sortBook(bookList, "publishedYear", "asc") // Sắp xếp theo năm xuất bản sách theo chiều tăng dần
// sortBook(bookList, "price", "desc") // Sắp xếp theo giá tiền sách theo chiều giảm dần

function sortBook(arr, sorted_by, sorts) {
    if (sorted_by != "publishedYear" && sorted_by != "price" && sorts == "asc") {
        arr.sort(function (a, b) {
            if (a[sorted_by] < b[sorted_by]) {
                return -1;
            }
            if (a[sorted_by] > b[sorted_by]) {
                return 1;
            }
            return 0;
        });
    } else if (sorted_by != "publishedYear" && sorted_by != "price" && sorts == "desc") {
        arr.sort(function (a, b) {
            if (a[sorted_by] < b[sorted_by]) {
                return 1;
            }
            if (a[sorted_by] > b[sorted_by]) {
                return -1;
            }
            return 0;
        });
    } else if (sorted_by == "publishedYear" || sorted_by == "price" && sorts == "asc") {
        arr.sort(function (a, b) { return a[sorted_by] - b[sorted_by] });
    } else {
        arr.sort(function (a, b) { return b[sorted_by] - a[sorted_by] });
    }
}
sortBook(sach, 'price', 'desc');
// 7. Viết hàm tìm kiếm  sách theo 1 thuộc tính bất kỳ (title, author, publishedYear, price) và giá trị của thuộc tính đó.
// Yêu cầu trả về 1 mảng các cuốn sách thỏa mãn điều kiện tìm kiếm và in ra màn hình.
// Ví dụ:
// searchBook(bookList, "title", "Javascript for Dummies") // Tìm kiếm sách có tiêu đề "Javascript for Dummies"
// searchBook(bookList, "author", "Joe Don") // Tìm kiếm sách có tác giả "Joe Don"
// searchBook(bookList, "publishedYear", 2001) // Tìm kiếm sách có năm xuất bản là 2001
// searchBook(bookList, "price", 1000000) // Tìm kiếm sách có giá tiền là 1000000


// 8. Viết hàm tính giá tiền tổng(sum), trung bình(average), thấp nhất(min), cao nhất(max) của tất cả các cuốn sách trong mảng và in ra màn hình.
// Ví dụ:
// sumPrice(bookList) // Tổng giá tiền của tất cả các cuốn sách
// averagePrice(bookList) // Giá tiền trung bình của tất cả các cuốn sách
// minPrice(bookList) // Giá tiền thấp nhất của tất cả các cuốn sách
// maxPrice(bookList) // Giá tiền cao nhất của tất cả các cuốn sách


// 9. Viết hàm chuyển mảng thành dạng từ điển với thuộc tính là author(tên tác giả) và giá trị là 1 mảng các cuốn sách của tác giả đó.
// Ví dụ:
// bookList = [
//   { title: "Javascript for Dummies", author: "Jon Doe", publishedYear: 2001, price: 100000 },
//   { title: "Dummies learn Javascript", author: "Joe Don", publishedYear: 2010, price: 1000000 }
// ]
// groupByAuthor(bookList) // Trả về kết quả như sau:
// {
//   "Jon Doe": [
//     { title: "Javascript for Dummies", publishedYear: 2001, price: 100000 }
//   ],
//   "Joe Don": [
//     { title: "Dummies learn Javascript", publishedYear: 2010, price: 1000000 }
//   ]
// }


// 10. Tương tự bài 9, viết hàm chuyển mảng thành dạng từ điển với thuộc tính là publishedYear(năm xuất bản)
// và giá trị là 1 mảng các cuốn sách xuất bản trong năm đó.
// Ví dụ:
// bookList = [
//   { title: "Javascript for Dummies", author: "Jon Doe", publishedYear: 2001, price: 100000 },
//   { title: "Dummies learn Javascript", author: "Joe Don", publishedYear: 2010, price: 1000000 }
// ]
// groupByPublishedYear(bookList) // Trả về kết quả như sau:
// {
//   2001: [
//     { title: "Javascript for Dummies", author: "Jon Doe", price: 100000 }
//   ],
//   2010: [
//     { title: "Dummies learn Javascript", author: "Joe Don", price: 1000000 }
//   ]
// }