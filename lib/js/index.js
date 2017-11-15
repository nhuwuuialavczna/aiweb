$(document).ready(function () {
    $("#subject").on('change', function () {
        var value = $("#subject").val();
        if (value === 'lythuyetdothi') {
            $("#listPost").empty();
            listLyThuyeDoThiPost.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }
        if (value === 'trituenhantao') {
            $("#listPost").empty();
            listTriTueNhanTaoPost.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }
        if (value === 'logictoan') {
            $("#listPost").empty();
            listLogicToanPost.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }
        if (value === 'atomat') {
            $("#listPost").empty();
            listAtomatPost.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }
        if (value === 'complier') {
            $("#listPost").empty();
            listCompilerPost.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }

        if (value === 'jvm') {
            $("#listPost").empty();
            listJVMPost.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }
        if (value === 'java9') {
            $("#listPost").empty();
            listJava9Post.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }
        if (value === 'javascript') {
            $("#listPost").empty();
            listJavaScriptPost.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }
        if (value === 'javafx') {
            $("#listPost").empty();
            listJavaFxPost.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }
        if (value === 'tkhdt') {
            $("#listPost").empty();
            listTkhdtPost.forEach(function (t, number) {
                $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
            });
        }
    });
    var value = $("#subject").val();
    if (value === 'lythuyetdothi') {
        $("#listPost").empty();
        listLyThuyeDoThiPost.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }
    if (value === 'trituenhantao') {
        $("#listPost").empty();
        listTriTueNhanTaoPost.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }
    if (value === 'logictoan') {
        $("#listPost").empty();
        listLogicToanPost.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }
    if (value === 'atomat') {
        $("#listPost").empty();
        listAtomatPost.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }
    if (value === 'complier') {
        $("#listPost").empty();
        listCompilerPost.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }

    if (value === 'jvm') {
        $("#listPost").empty();
        listJVMPost.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }
    if (value === 'java9') {
        $("#listPost").empty();
        listJava9Post.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }
    if (value === 'javascript') {
        $("#listPost").empty();
        listJavaScriptPost.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }
    if (value === 'javafx') {
        $("#listPost").empty();
        listJavaFxPost.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }
    if (value === 'tkhdt') {
        $("#listPost").empty();
        listTkhdtPost.forEach(function (t, number) {
            $("#listPost").append('<p>' + (number + 1) + '.<a href="' + t.link + '">' + t.name + '</a> | Đăng bởi:' + t.userpost + ' | Ngày: ' + t.date + '</p>');
        });
    }
});