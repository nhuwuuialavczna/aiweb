var Post = function (name, link, userpost, date) {
    this.name = name;
    this.link = link;
    this.userpost = userpost;
    this.date = date;
};

var listTriTueNhanTaoPost = [];
var listLyThuyeDoThiPost = [];
var listLogicToanPost = [];
var listAtomatPost = [];
var listCompilerPost = [];
var listJVMPost = [];
var listJava9Post = [];
var listJavaScriptPost = [];
var listJavaFxPost = [];
var listTkhdtPost = [];

// tri tue nhan tao
listTriTueNhanTaoPost.push(new Post("Trò chơi hang wumpus", "post/trituenhantao/hangwumpus.html", "Admin", "13-11-2017"));

// ly thuyet do thi
listLyThuyeDoThiPost.push(new Post("Duyệt đồ thị với DFS", "post/lythuyetdothi/DFS.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Duyệt đồ thị với BFS", "post/lythuyetdothi/BFS.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Các thuật toán về sự liên thông của đồ thị", "post/lythuyetdothi/ThanhPhanLienThong.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Tìm tất cả đường đi giữa 2 đỉnh của đồ thị", "post/lythuyetdothi/InRaDuongDi.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Kiểm tra đồ thị có lưỡng phân hay không", "post/lythuyetdothi/LuongPhan.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Tìm đường đi và chu trình euler", "post/lythuyetdothi/Euler.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Tìm đường đi và chu trình hamilton", "post/lythuyetdothi/Hamilton.html", "Admin và Văn Tân", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Đồ thị phẳng", "post/lythuyetdothi/DoThiPhang.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Tô màu đồ thị và bài toán lập lịch", "post/lythuyetdothi/ToMauDoThiLapLich.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Cây đồ thị", "post/lythuyetdothi/Tree.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Tìm cây bao trùm nhỏ nhất với thuật toán prim và kruskal", "post/lythuyetdothi/CayBaoTrumNhoNhat.html", "Admin vs Văn Tân", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Mã tiền tố và giải thuật huffman", "post/lythuyetdothi/Huffman.html", "Admin vs Văn Tân", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Các thao tác với cây đồ thị", "post/lythuyetdothi/ThaoTacVoiCay.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Các thao tác với cây đồ thị", "post/lythuyetdothi/ThaoTacVoiCay.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Các thao tác với cây đồ thị", "post/lythuyetdothi/ThaoTacVoiCay.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Các thao tác với cây đồ thị", "post/lythuyetdothi/ThaoTacVoiCay.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Các thao tác với cây đồ thị", "post/lythuyetdothi/ThaoTacVoiCay.html", "Admin", "13-11-2017"));

// một sống ứng dụng
listLyThuyeDoThiPost.push(new Post("Bài toán luồng cực đại (Max flow problem", "post/lythuyetdothi/LuongCucDai.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Thuật toán Ford - Fulkerson (Tìm 1 cắt ghép a - z tối thiểu)", "post/lythuyetdothi/FordFulkerson.html", "Admin", "13-11-2017"));
listLyThuyeDoThiPost.push(new Post("Thuật toán Hungarian - Xác định bộ ghép tối đại M", "post/lythuyetdothi/Hungarian.html", "Admin", "13-11-2017"));

// logic toán
listLogicToanPost.push(new Post("Giới thiệu về môn học và các nội dung cần biết - Logic toán", "post/logictoan/GioiThieuLogicToan.html", "Admin", "13-11-2017"));
//logic mệnh đề
listLogicToanPost.push(new Post("Logic mệnh đề - Cú pháp logic mệnh đề", "post/logictoan/LGMDCuPhapLGMD.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic mệnh đề - Ngữ nghĩa logic mệnh đề", "post/logictoan/LGMDNguNghia.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic mệnh đề - Chân lý và mâu thuẫn", "post/logictoan/LGMDChanLyVaMauThuan.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic mệnh đề - Hệ quả và tương đương logic", "post/logictoan/LGMDHeQuaTuongDuong.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic mệnh đề - Dạng chuẩn CNF", "post/logictoan/LGMDCNF.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic mệnh đề - Suy diễn và chứng minh", "post/logictoan/LGMDSuyDienVaChungMinh.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic mệnh đề - Hệ chứng minh", "post/logictoan/LGMDHeChungMinh.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic mệnh đề - Hợp giải", "post/logictoan/LGMDHopGiai.html", "Admin", "13-11-2017"));
// listLogicToanPost.push(new Post("Logic mệnh đề - Logic Horn", "post/logictoan/LGMDLogicHorn.html", "Admin", "13-11-2017"));

//logic vị từ
listLogicToanPost.push(new Post("Logic vị từ - Cú pháp logic vị từ", "post/logictoan/LGVTCuPhap.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic vị từ - Ngữ pháp logic mệnh đề", "post/logictoan/LGVTNguNghia.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic vị từ - Diễn giải và mô hình", "post/logictoan/LGVTDienGiaiMoHinh.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic vị từ - Hệ quả và tương đương logic", "post/logictoan/LGVTHeQuaTuongDuong.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic vị từ - Cách viết câu logic vị từ", "post/logictoan/LGVTVietCauLGVT.html", "Admin", "13-11-2017"));


//logic hạn định
listLogicToanPost.push(new Post("Logic hạn định - Dạng mệnh đề - mệnh đề hạng định - mệnh đề Horn", "post/logictoan/LGHDMenhDe.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic hạn định - Đích và truy vấn hạn định", "post/logictoan/LGHDDichVaTruyVan.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic hạn định - Chuyển câu logic vị từ thành các mệnh đề hạn định", "post/logictoan/LGHDChuyenViTuThanhMenhDe.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic hạn định - Suy điễn logic, phép thế, phép đồng nhất trong logic hạn định", "post/logictoan/LGHDSuyDienPhepTheDongNhat.html", "Admin", "13-11-2017"));
listLogicToanPost.push(new Post("Logic hạn định - Hợp giải SLD, Cây SLD, Hệ suy diễn Prolog", "post/logictoan/LGHDSLDProlog.html", "Admin", "13-11-2017"));

// prolog
listLogicToanPost.push(new Post("Prolog - Lập trình logic với ngôn ngữ lập trình Prolog", "post/logictoan/Prolog.html", "Admin", "13-11-2017"));


// atomat
listAtomatPost.push(new Post("", "post/atomat/DFS.html", "Admin", "13-11-2017"));


// compiler
listCompilerPost.push(new Post("Duyệt đồ thị với DFS", "post/compiler/DFS.html", "Admin", "13-11-2017"));

// jvm
listJVMPost.push(new Post("Duyệt đồ thị với DFS", "post/jvm/DFS.html", "Admin", "13-11-2017"));

// java 9
listJava9Post.push(new Post("Duyệt đồ thị với DFS", "post/java9/DFS.html", "Admin", "13-11-2017"));

// js


listJavaScriptPost.push(new Post("Giới thiệu JS", "post/javascript/GioiThieuJS.html", "Admin", "13-11-2017"));

// js bất đồng bộ
listJavaScriptPost.push(new Post("Lý thuyết về xử lý bất đồng bộ trong JavaScript", "post/javascript/BDBLyThuyet.html", "Admin", "13-11-2017"));
listJavaScriptPost.push(new Post("Xử lý bất đồng bộ - Giới thiệu callback hell để giải quyết bất đồng bộ", "post/javascript/BDBCallBackHell.html", "Admin", "13-11-2017"));
listJavaScriptPost.push(new Post("Xử lý bất đồng bộ - Giới thiệu đối tương Promise - ES6 để giải quyết bất đồng bộ", "post/javascript/DBDPromise.html", "Admin", "13-11-2017"));
listJavaScriptPost.push(new Post("Xử lý bất đồng bộ - Giới thiệu Async và Await để giải quyết bất đồng bộ", "post/javascript/BDBAsyncAwait.html", "Admin", "13-11-2017"));
listJavaScriptPost.push(new Post("Xử lý bất đồng bộ - Bài tập liên quan vấn đê giải quyết bất đồng bộ", "post/javascript/BDBBaiTap.html", "Admin", "13-11-2017"));

// js OOP
listJavaScriptPost.push(new Post("OOP - Lý thuyết về thiết kế hướng đối tượng trong JavaScript", "post/javascript/OOPLyThuyet.html", "Admin", "13-11-2017"));
listJavaScriptPost.push(new Post("OOP - Bài tập liên quan vấn đê thiết kế hướng đối tượng trong JavaScript", "post/javascript/OOPBaiTap.html", "Admin", "13-11-2017"));
listJavaScriptPost.push(new Post("OOP - PPrototypeInheritance - Kế thừa trong JavaScript", "post/javascript/OOPPrototypeInheritance.html", "Admin", "13-11-2017"));
listJavaScriptPost.push(new Post("OOP - Sử dụng class trong ES6", "post/javascript/OOPClassES6.html", "Admin", "13-11-2017"));
listJavaScriptPost.push(new Post("OOP - Viết game rắn săn mồi", "post/javascript/OOPSnack.html", "Admin", "13-11-2017"));


// javafx
listJavaFxPost.push(new Post("Duyệt đồ thị với DFS", "post/javafx/DFS.html", "Admin", "13-11-2017"));

// tkhdt
listTkhdtPost.push(new Post("Duyệt đồ thị với DFS", "post/tkhdt/DFS.html", "Admin", "13-11-2017"));


