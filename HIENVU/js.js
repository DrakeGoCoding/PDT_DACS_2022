const bt_text = document.getElementById("bt_text")
const bt_text1 = document.getElementById("bt_text1")
const bt_submit = document.getElementById("bt_submit")

var data = []
function addButton() {
    var bt_text = document.getElementById("bt_text").value;
    var bt_text1 = document.getElementById("bt_text1").value;

    var item = {
        HoTen: bt_text,
        Diem: bt_text1
    }
    data.push(item)
    render()
    show();
}
function render() {
    table = ` <tr>
    <th>Họ Tên</th>
    <th>Điểm</th>
</tr>`
    for (let i = 0; i < data.length; i++) {
        table +=
            ` <tr>
    <th>${data[i].bt_text}Họ Tên</th>
    <th>${data[i].bt_text1}Điểm</th>
</tr>`
    }
    document.getElementById("render").innerHTML = table
}