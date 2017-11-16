// hàm để lấy số chia hết cho 2

let chiaHetCho2 = (a) => {
    return new Promise((resovle, reject) => {
        if (typeof a != 'number' || a%2 != 0) {
            return reject(new Error("Đây không phải là số hoặc không chia hết cho 2! (Thuộc phép chia hết cho 2)"));
        }
        resovle(a);
    });
};

let nhanCho1So = (a, b) => {
    return new Promise((resovle, reject) => {
        if (typeof b != 'number') {
            return reject(new Error("Đây không phải là số ! (Thuộc phép nhân)"));
        }
        resovle(a * b);
    });
};

//result là kết quả của a * b. nếu a chia hết cho 2
let result = (a,b) => chiaHetCho2(a).
                                    then((res) => nhanCho1So(res,b)).
                                    catch((err)=>{console.log(err+'')});

result(4,"5");