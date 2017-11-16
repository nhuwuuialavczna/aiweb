let getAjax = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://freegeoip.net/json/",
            success: function (data) {
                resolve(data);
            },
            error:function (err) {
                return reject(new Error(err));
            }
        });
    });
};

let a = async()=>{
    let getA =await getAjax();
    console.log(getA);
};

a();