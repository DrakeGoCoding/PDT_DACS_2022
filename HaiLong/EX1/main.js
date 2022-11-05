var danhSachSach = new DanhSachSach();

GetStorage();

var validate = new Validation();

function DomID(id) {
    var element = document.getElementById(id);
    return element;
}

function ThemSach() {
    var maso = DomID("maso").value;
    var title = DomID("title").value;
    var author = DomID("author").value;
    var publishedYear = DomID("publishedYear").value;
    var price = DomID("price").value;
    var loi = 0;

    if (KiemTraDauVaoRong("maso", maso) == true) { loi++ }
    if (KiemTraDauVaoRong("title", title) == true) { loi++ }
    if (KiemTraDauVaoRong("author", maso) == true) { loi++ }
    if (KiemTraDauVaoRong("publishedYear", publishedYear) == true) { loi++ }
    if (KiemTraDauVaoRong("price", price) == true) { loi++ }

    if (loi != 0) {
        return;
    }

    var sach = new Sach(maso, title, author, publishedYear, price);
    danhSachSach.ThemSach(sach);
    CapNhatDanhSachSach(danhSachSach);

}

function KiemTraDauVaoRong(ID, value) {
    if (validate.KiemTraRong(value) == true) {
        DomID(ID).style.borderColor = "red";
        return true;
    }
    else {
        DomID(ID).style.borderColor = "green";
        return false;
    }
}

function CapNhatDanhSachSach(DanhSachSach) {
    var lstTableSach = DomID("tbodySach");
    lstTableSach.innerHTML = "";
    for (var i = 0; i < DanhSachSach.DSSS.length; i++) {
        var sach = danhSachSach.DSSS[i];

        var trSach = document.createElement("tr");
        trSach.id = sach.MaSo;
        trSach.className = "trSach";
        trSach.setAttribute("onclick", "ChinhSuaSach('" + sach.MaSo + "')");


        var tdCheckBox = document.createElement('td');
        var ckbMaSo = document.createElement('input');
        ckbMaSo.setAttribute("class", "ckbMaSo")
        ckbMaSo.setAttribute("type", "checkbox")
        ckbMaSo.setAttribute("value", sach.MaSo)
        tdCheckBox.appendChild(ckbMaSo);


        var tdMaSo = TaoTheTD("MaSo", sach.MaSo);
        var tdTieuDe = TaoTheTD("TieuDe", sach.TieuDe);
        var tdTacGia = TaoTheTD("TacGia", sach.TacGia);
        var tdNamXuatBan = TaoTheTD("NamXuatBan", sach.NamXuatBan);
        var tdGia = TaoTheTD("Gia", sach.Gia);



        trSach.appendChild(tdCheckBox);
        trSach.appendChild(tdMaSo);
        trSach.appendChild(tdTieuDe);
        trSach.appendChild(tdTacGia);
        trSach.appendChild(tdNamXuatBan);
        trSach.appendChild(tdGia);

        lstTableSach.appendChild(trSach);
    }

}

function TaoTheTD(className, value) {
    var td = document.createElement("td");
    td.className = className;
    td.innerHTML = value;
    return td;
}

function SetStorage() {
    var jsonDanhSachSach = JSON.stringify(danhSachSach.DSSS);
    localStorage.setItem("DanhSachSach", jsonDanhSachSach);
}

function GetStorage() {
    var jsonDanhSachSach = localStorage.getItem("DanhSachSach");
    var mangDSSS = JSON.parse(jsonDanhSachSach);
    danhSachSach.DSSS = mangDSSS;
    CapNhatDanhSachSach(danhSachSach);
}

function XoaSach() {
    var lstMaSo = document.getElementsByClassName("ckbMaSo");
    var lstMaSoDuocChon = [];
    for (i = 0; i < lstMaSo.length; i++) {
        if (lstMaSo[i].checked) {
            lstMaSoDuocChon.push(lstMaSo[i].value);
        }
    }
    danhSachSach.XoaSach(lstMaSoDuocChon);
    CapNhatDanhSachSach(danhSachSach);
}

function TimKiemSach() {
    var tukhoa = DomID("tukhoa").value;
    var lstDanhSachSachTimKiem = danhSachSach.TimKiemSach(tukhoa);
    CapNhatDanhSachSach(lstDanhSachSachTimKiem);
}
function ChinhSuaSach(maso) {

    var sach = danhSachSach.TimSachTheoMa(maso);
    if (sach != null) {
        DomID("maso").value = sach.MaSo;
        DomID("title").value = sach.TieuDe;
        DomID("author").value = sach.TacGia;
        DomID("publishedYear").value = sach.NamXuatBan;
        DomID("price").value = sach.Gia;
    }
}

function LuuThongTin() {
    var maso = DomID("maso").value;
    var title = DomID("title").value;
    var author = DomID("author").value;
    var publishedYear = DomID("publishedYear").value;
    var price = DomID("price").value;
    var loi = 0;

    if (KiemTraDauVaoRong("maso", maso) == true) { loi++ }
    if (KiemTraDauVaoRong("title", title) == true) { loi++ }
    if (KiemTraDauVaoRong("author", maso) == true) { loi++ }
    if (KiemTraDauVaoRong("publishedYear", publishedYear) == true) { loi++ }
    if (KiemTraDauVaoRong("price", price) == true) { loi++ }

    if (loi != 0) {
        return;
    }

    var sach = new Sach(maso, title, author, publishedYear, price);
    danhSachSach.SuaSach(sach);
    CapNhatDanhSachSach(danhSachSach);
}