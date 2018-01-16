//bài 1. Cho danh sách các sinh viên. 1 In danh sách sinh vien. 2. Tìm sinh vien, 3. Xóa sv
var Job = function (pay) {
    this.pay = pay;
};
Job.prototype.print = function () {
    console.log((this.pay ? "Please hire me" : "no thank you"));
};

var TeachJob = function (title, pay) {
    this.title = title;
    this.pay = pay;
};

TeachJob.prototype = Object.create(Job.prototype); // Các prototype của Job sẽ là của TeachJob. Nghĩa là đã có sự kế thừa ở đây
TeachJob.prototype.constructor = TeachJob;// Chúng ta khỏi tạo 1 đói tượng TeachJob và constuctor là TeachJob

var softwarePosition = new TeachJob("JS Programer", true);
softwarePosition.print();

// tạo đối tượng sv
var SinhVien = function (ten, mssv, diemtb) {
    this.ten = ten;
    this.mssv = mssv;
    this.diemtb = diemtb;
};


var SinhVienDAO = function () {
    this.arr = [];

    // thêm sinh viên
    this.them = function (sinhvien) {
        this.arr.push(sinhvien);
    };

    // duyệt và in ra danh sách sinh viên
    this.xemDS  =  function () {
      this.arr.forEach(function (item) {
        console.log(item)
      });
    };

    // hàm xóa sẽ cập nhật lại danh sách
    this.xoa = function (mssv) {
        var a = this.arr;
        this.arr.forEach(function (sv, i) {
            if (sv.mssv === mssv) {
                a.splice(i,1);
            }
        },function () {
           this.arr = a;
        }());
    };

    this.timKiemSVDiemCaoNhat = function () {
       return  this.arr.reduce(function(prev, curr) {
            return prev.diemtb > curr.diemtb ? prev : curr;
        });
    };
};
var a = function main() {
    var sv1 = new SinhVien("A","15130052","5.6");
    var sv2 = new SinhVien("B","15130053","5.7");
    var sv3 = new SinhVien("C","15130054","5.8");
    var sv4 = new SinhVien("D","15130055","5.9");
    var svDao = new SinhVienDAO();
    svDao.them(sv1);
    svDao.them(sv2);
    svDao.them(sv3);
    svDao.them(sv4);
    console.log('Danh sách sinh viên');
    svDao.xemDS();
    console.log('Danh sách sau khi xóa');
    svDao.xoa('15130052');
    svDao.xemDS();
    console.log('Sinh viên có điểm trung bình cao nhất là');
    console.log(svDao.timKiemSVDiemCaoNhat());
}();


