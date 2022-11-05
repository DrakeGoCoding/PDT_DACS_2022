function DanhSachSach() {
    this.DSSS = [];
    this.ThemSach = function (sachThem) {
        this.DSSS.push(sachThem);
    };
    this.XoaSach = function (lstSachXoa) {
        for (var i = 0; i < lstSachXoa.length; i++) {
            for (var j = 0; j < this.DSSS.length; j++) {
                var sach = this.DSSS[j];
                if (lstSachXoa[i] == sach.MaSo) {
                    this.DSSS.splice(j, 1);
                }
            }
        }
    };
    this.SuaSach = function (sachCapNhat) {
        for (var i = 0; i < this.DSSS.length; i++) {
            var sachUpdate = this.DSSS[i];
            if (sachCapNhat.MaSo == sachUpdate.MaSo) {
                sachUpdate.TieuDe = sachCapNhat.TieuDe;
                sachUpdate.TacGia = sachCapNhat.TacGia;
                sachUpdate.NamXuatBan = sachCapNhat.NamXuatBan;
                sachUpdate.Gia = sachCapNhat.Gia;
            }
        }
    };
    this.TimKiemSach = function (tukhoa) {
        var lstKetQuaTimKiem = new DanhSachSach();
        for (var i = 0; i < this.DSSS.length; i++) {
            var sach = this.DSSS[i];
            if (
                sach.TieuDe.toLowerCase().trim().search(tukhoa.toLowerCase().trim()) !=
                -1
            ) {
                lstKetQuaTimKiem.ThemSach(sach);
            }
        }
        return lstKetQuaTimKiem;
    };
    this.TimSachTheoMa = function (maso) {
        for (var i = 0; i < this.DSSS.length; i++) {
            var sach = this.DSSS[i];
            if (sach.MaSo == maso) {
                return sach;
            }
            return null;
        }
    };
}
