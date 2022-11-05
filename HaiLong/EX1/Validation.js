function Validation() {
    this.KiemTraRong = function (value) {
        if (value.trim() === "") {
            return true;
        }
        return false;
    }

}