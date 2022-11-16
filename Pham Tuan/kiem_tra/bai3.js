function sortStudents(students) {
	const listStudent = [
        { fullName: "Nguyễn Văn Hòa", score: 8.2 },
        { fullName: "Nguyễn Hải Long", score: 7.5 },
        { fullName: "Phạm Tuấn", score: 7.2 },
        { fullName: "Vũ Hiến", score: 8.8 },
        { fullName: "Nguyễn Khành Linh", score: 8.0 }
    ];
    let sortedList =[] ;
    let = n = listStudent.length-1;
    while (n > 0) {
    for (let i = 0; i < n; i++){
        let max = 0, x = 0;
        if (listStudent[i].score > max ){
            max = listStudent[i].score;
            x=i;
        }
        sortedList.push(listStudent[x]);
        listStudent.pop(x);
        n--;
        
        
    }
}

	return sortedList;
}
sortStudents();
console.log(sortStudents());