// 1. Khởi tạo 1 mảng các đối tượng với số lượng tùy ý, trong đó mỗi đối tượng mô tả 1 cuốn sách gồm các thuộc tính
// - title (tiêu đề, string),
// - author (tác giả, string),
// - publishedYear (năm xuất bản, number)
// - price (giá tiền, number).
const book = {
    title:String,
    author:String,
    publishedYear:Number,
    price:Number
  };
  
  const bookList = [book];
  bookList[0]={title:"B",author:"linh",publishedYear:1945,price:20000};
  bookList[1]={title:"C",author:"Chu tich",publishedYear:1975,price:100000};
  bookList[2]={title:"A",author:"Chu",publishedYear:1975,price:100000};
  bookList[3]={title:"D",author:"loan",publishedYear:1945,price:20000};
  // 2. Viết hàm in ra danh sách các cuốn sách các cuốn sách theo mẫu:
  // <index>. "<title>"" by <author>, published in <publishedYear> - <price> VNĐ
  // Ví dụ: 
  // 1. "Javascript for Dummies" by Jon Doe, published in 2001 - 100000 VNĐ
  // 2. "Dummies learn Javascript" by Joe Don, published in 2010 - 1000000 VNĐ
  const printf = (book => {
    for(let i=0;i < book.length;i++){
      console.log(i+"." + book[i].title + " by " + book[i].author + ", " + "published in " + book[i].publishedYear + " - " + book[i].price + "VND")
    }
  }
  )
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
  const issame = ((bookList,title,author) => {
    for(let i=0;i<bookList.length;i++){
      if(bookList[i].title==title && bookList[i].author==author){
        return true;
      }
    }
    return false;
  })
  
  const addBook = ((bookList,title,author,publishedYear,price) =>{
    if(title == null){
      console.log("nhập thiếu title ");
      }
    else if(author == null){
        console.log("nhập thiếu author ");
      }
    else if(publishedYear == null){
        console.log("nhập thiếu publishedYear ");
      }
    else if(title == "" || author==""){
        console.log("chuoi nhap vao khong duoc rong");
  
    }else if(typeof publishedYear !== 'number' || publishedYear < 0 ){
            console.log("ban da nhap sai publishedYear");
  
      }else if(issame(bookList,title,author)==true){
          console.log("da ton tai quyen sach nay");
      }else if(price == null){
        let book = {
          title:title,
          author:author,
          publishedYear:publishedYear,
          price:price
        };
        bookList.push(book)
        }else if(typeof price !== "number" || price <0){
          console.log("ban da nhap sai price")
          }else{
            let book = {
              title:title,
              author:author,
              publishedYear:publishedYear,
              price:price
            };
            bookList.push(book)
          }
        })
  
  // 4. Viết hàm cho phép người dùng xóa sách theo index (vị trí trong mảng) hoặc title (tiêu đề sách).
  // Ví dụ:
  // bookList = [
  //   { title: "Javascript for Dummies", author: "Jon Doe", publishedYear: 2001, price: 100000 },
  //   { title: "Dummies learn Javascript", author: "Joe Don", publishedYear: 2010, price: 1000000 }
  // ]
  // removeBook(bookList, 0) // Xóa sách ở vị trí 0
  // removeBook(bookList, "Dummies learn Javascript") // Xóa sách có tiêu đề "Dummies learn Javascript"
  const removeBook = ((bookList,idoftitle) => {
    if(idoftitle < bookList.length && typeof idoftitle == 'number'){
         bookList.splice(idoftitle, 1);
         console.log("da xoa xong");
    }else if(typeof idoftitle == 'string'){
        for(let i=0; i < bookList.length ;i++){
          if(bookList[i].title == idoftitle)
            bookList.splice(i, 1);
        }
        console.log("da xoa xong");
    }else{
      console.log("khong xoa duoc");
    }
  })
  
  // 5. Viết hàm cho phép người dùng cập nhật thông tin giá tiền của sách theo index (vị trí trong mảng) hoặc title (tiêu đề sách)
  // và in ra danh sách các cuốn sách sau khi cập nhật.
  // Ví dụ:
  // updateBook(bookList, 0, 200000) // Cập nhật giá tiền của sách ở vị trí 0
  // updateBook(bookList, "Dummies learn Javascript", 2000000) // Cập nhật giá tiền của sách có tiêu đề "Dummies learn Javascript"
  const updateBook = ((bookList, idoftitle, price) => {
    if(idoftitle < bookList.length && typeof idoftitle == 'number'){
      bookList[idoftitle].price = price;
      console.log("da sua xong");
  }else if(typeof idoftitle == 'string'){
     for(let i=0; i < bookList.length ;i++){
       if(bookList[i].title == idoftitle)
       bookList[i].price = price;
     }
     console.log("da sua xong");
  }else{
    console.log("chua sua duoc")
  }
  })
  
  // 6. Viết hàm sắp xếp danh sách các cuốn sách theo 1 thuộc tính bất kỳ (title, author, publishedYear, price) theo chiều tăng (asc) hoặc giảm (desc)
  // và in ra danh sách các cuốn sách sau khi sắp xếp.
  // Ví dụ:
  // sortBook(bookList, "title", "asc") // Sắp xếp theo tiêu đề sách theo chiều tăng dần
  // sortBook(bookList, "author", "desc") // Sắp xếp theo tác giả sách theo chiều giảm dần
  // sortBook(bookList, "publishedYear", "asc") // Sắp xếp theo năm xuất bản sách theo chiều tăng dần
  // sortBook(bookList, "price", "desc") // Sắp xếp theo giá tiền sách theo chiều giảm dần
  const sortBook = ((bookList, properties , sorts) => {
    if(properties !="publishedYear" && properties!="price" && sorts=="asc"){
      bookList.sort(function(a, b){
        if (a[properties] < b[properties]) {return -1;}
        if (a[properties] > b[properties]) {return 1;}
        return 0;
        });
        printf(bookList);
    }else if(properties !="publishedYear" && properties!="price" && sorts=="desc"){
        bookList.sort(function(a, b){
          if (a[properties] < b[properties]) {return 1;}
          if (a[properties] > b[properties]) {return -1;}
          return 0;
          });
          printf(bookList);
      }else if(properties =="publishedYear" || properties == "price" && sorts=="asc"){
           bookList.sort(function(a, b){return a[properties] - b[properties]});
           printf(bookList);
      }else{
            bookList.sort(function(a, b){return b[properties] - a[properties]});
              printf(bookList);
      }
  })
  
  // 7. Viết hàm tìm kiếm  sách theo 1 thuộc tính bất kỳ (title, author, publishedYear, price) và giá trị của thuộc tính đó.
  // Yêu cầu trả về 1 mảng các cuốn sách thỏa mãn điều kiện tìm kiếm và in ra màn hình.
  // Ví dụ:
  // searchBook(bookList, "title", "Javascript for Dummies") // Tìm kiếm sách có tiêu đề "Javascript for Dummies"
  // searchBook(bookList, "author", "Joe Don") // Tìm kiếm sách có tác giả "Joe Don"
  // searchBook(bookList, "publishedYear", 2001) // Tìm kiếm sách có năm xuất bản là 2001
  // searchBook(bookList, "price", 1000000) // Tìm kiếm sách có giá tiền là 1000000
  const searchBook = ((bookList,properties,values) => {
    let newbooklist=[];
    if(properties == "title"){
        for(let i=0; i< bookList.length;i++){
            if(bookList[i].title == values){
                newbooklist.push(bookList[i]);
            }
        }
        printf(newbooklist);
        return newbooklist;
    }else if(properties == "author"){
        for(let i=0; i< bookList.length;i++){
            if(bookList[i].author == values){
                newbooklist.push(bookList[i]);
            }
        }
        printf(newbooklist);
        return newbooklist;
    }else if(properties == "publishedYear"){
        for(let i=0; i< bookList.length;i++){
            if(bookList[i].publishedYear == values){
                newbooklist.push(bookList[i]);
            }
        }
        printf(newbooklist);
        return newbooklist;
    }else {
        for(let i=0; i< bookList.length;i++){
            if(bookList[i].price == values){
                newbooklist.push(bookList[i]);
            }
        }
        printf(newbooklist);
        return newbooklist;
    }
  })
  
  
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