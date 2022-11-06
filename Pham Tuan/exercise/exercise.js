// ex1
let bookList = [
  {
    title: "book1",
    author: "author",
    publishedYear: 2001,
    price: 200,
  },
  {
    title: "book1",
    author: "author2",
    publishedYear: 2001,
    price: 2000,
  },
  {
    title: "book3",
    author: "author",
    publishedYear: 2001,
    price: 2000,
  },
];

// ex2
/**
 *  Hàm in ra danh sách các cuốn sách
 * @param {Array} bookList
 */
function printBookList(bookList) {
  bookList.forEach(function (value) {
    console.log(
      `"${value.title}" by ${value.author}, published in ${value.publishedYear} - ${value.price}$`
    );
  });

  // for(var i = 0; i < bookList.length; i++) {
  // console.log(`"${bookList[i]['title']}" by ${bookList[i]['author']}, published in ${bookList[i]['publishedYear']} - ${bookList[i]['price']}$`);
  // }
}
// printBookList(bookList);

// ex3

function Book(title, author, publishedYear, price) {
  this.title = title;
  this.author = author;
  this.publishedYear = publishedYear;
  if (price == undefined) this.price = 0;
  else this.price = price;
}

let newBooks = [];
newBooks[0] = new Book("Javascript for Dummies", "Jon Doe", 2001, 10000);
newBooks[1] = new Book("Dummies learn Javascript", "Joe Don", 2010, 1000);
newBooks[2] = new Book("Dummies learn Javascript", "Joe Don", 2010, 1000000);
newBooks[3] = new Book("Dummies learn Javascript", "Joe Don", 2010);

function addBook(bookList, newBooks) {
  for (let i = 0; i < newBooks.length; i++) {
    let notAdd;
    if (newBooks[i].title == "" || newBooks[i].author == "") {
      notAdd = true;
    } else {
      notAdd = bookList.some(function (book) {
        return (
          book.title === newBooks[i].title &&
          book.author === newBooks[i]["author"]
        );
      });
    }
    if (notAdd === true) {
      console.log("Thêm thất bại");
    } else {
      bookList.push(newBooks[i]);
      console.log("Thêm thành công");
    }
  }
}
// addBook(bookList, newBooks);
// printBookList(bookList);

// ex4

function bookRemove(arr, index) {

  // case 1:

  // let remove = [];
  // if (typeof index === "number") {
  //   remove.push(index);
  // } else if (typeof index === "string") {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i]["title"] == index) {
  //       remove.push(i);
        
  //     }
  //   }
  // }
  // for(let i = 0; i< remove.length ; i++){
  //   arr.splice(remove[i], 1);
  // }

  //case 2:

  if (typeof index === "number") {
    arr.splice(index,1);
  } else if (typeof index === "string") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]["title"] == index) {
        arr.splice(i, 1);
        i--;
      }
    }
  }


}
bookRemove(bookList,"book1");
printBookList(bookList);

// Ex5

function updateBook(arr, index, price) {
  arr[index]["price"] = price;
}
// updateBook(bookList,0, 200000);

// ex6

function sortBook(arr, value, sort) {
  if (sort == "arc") {
    if (value == "title") {
      arr.sort(function (a, b) {
        var n1 = a.title.toLowCase();
        var n2 = b.title.toLowCase();
        if (n1 < n2) return -1;
        else if (n1 > n2) return 1;
        else return 0;
      });
    } else if (value == "publishedYear") {
      arr.sort(function (a, b) {
        return b.publishedYear - a.publishedYear;
      });
    }
  }
  if (sort == "desc") {
    if (value == "author") {
      arr.sort(function (a, b) {
        var n1 = a.title.toLowCase();
        var n2 = b.title.toLowCase();
        if (n1 < n2) return 1;
        else if (n1 > n2) return -1;
        else return 0;
      });
    } else if (value == "price") {
      arr.sort(function (a, b) {
        return a.price - b.price;
      });
    }
  }
}
// sortBook(bookList, "price", "desc");
// printBookList(bookList);

// ex 7

function searchBook(arr, key, value) {
  var search = arr.find(function (a) {
    if (key == "title") {
      return a.title == value;
    } else if (key == "author") {
      return a.author == value;
    } else if (key == "publishedYear") {
      return a.publishedYear == value;
    } else if (key == "price") {
      return a.price == value;
    } else {
      console.log("khong tim thay");
    }
  });
  console.log(search);
}
// searchBook(bookList, 'title','book3');

// ex 8

function sumPrice(arr) {
  function sum(index, value) {
    var sum = index + value.price;
    return sum;
  }

  var sum = arr.reduce(sum, 0);
  console.log(sum);
}
sumPrice(bookList);

function averagePrice(arr) {
  function average(index, value) {
    var average = index + value.price;
    return average;
  }

  var average = arr.reduce(average, 0) / arr.length;
  console.log(average);
}
averagePrice(bookList);

function minPrice(arr) {
  function min(index, value) {
    var min = index;
    if (value.price < min) min = value.price;
    return min;
  }

  var min = arr.reduce(min, arr[0]["price"]);
  console.log(min);
}
minPrice(bookList);

function maxPrice(arr) {
  function max(index, value) {
    var max = index;
    if (value.price > max) max = value.price;
    return max;
  }

  var max = arr.reduce(max, arr[0]["price"]);
  console.log(max);
}
maxPrice(bookList);

// ex9

function groupByAuthor(arr) {
  function author(index) {
    index.author;
  }

  var author = arr.map(author);
}
