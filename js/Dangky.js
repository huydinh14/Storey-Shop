


// ================================================================
function khoiPhuc() {
    $("#lbltbTen").html("<i class='text-danger'>* </i>");
    $("#lbltbHo").html("<i class='text-danger'>* </i>");
    $("#lbltbUser").html("<i class='text-danger'>* </i>");
    $("#lbltbPassTK").html("<i class='text-danger'>* </i>");
    $("#lbltbPassTK2").html("<i class='text-danger'>* </i>");
    $("#lblEmail").html("<i class='text-danger'>* </i>");
}

// ================================================================


function check_txtTen() {
    let maTen = $('#txtTen').val();
    let regexTen = /^([A-Z]+[a-z]*)+\s*$/;

    if (!(regexTen.test(maTen))) {
        if (maTen === "") {
            $("#lbltbTen").html("<i class='text-warning'>* Hãy nhập dữ liệu </i>");
        }
        else {
            $("#lbltbTen").html("<i class='text-warning'>* Tên có chữ hoa ở đầu và không có số</i>");
        }
        return false;
    }
    $("#lbltbTen").html("<i class='fa fa-check ' style='color: aqua;' aria-hidden='true' ></i>");
    return true;
};

// 
function check_txtHo() {
    let maHo = $("#txtHo").val();
    let regex = /^([A-Z]+[a-z]*)+\s*$/;
    if (!regex.test(maHo)) {
        if (maHo === "") {
            $("#lbltbHo").html("<i class='text-danger'>* Hãy nhập dữ liệu </i>");
        }
        else {
            $("#lbltbHo").html("<i class='text-warning'>* Họ có chữ hoa ở đầu và không có số.</i>");
        }
        return false;
    }
    $("#lbltbHo").html("<i class='fa fa-check ' style='color: aqua;' aria-hidden='true' ></i>");
    return true;
};


// 
function check_txtUserTK() {
    let maUser = $("#txtUserTK").val();
    let regex = /^[A-Za-z1-9]{6,}$/;
    if (!regex.test(maUser)) {
        if (maUser === "") {
            $("#lbltbUser").html("<i class='text-danger'>* Hãy nhập dữ liệu </i>");
        }
        else {
            $("#lbltbUser").html("<i class='text-warning'>* Tên đăng nhập trên 6 ký tự.</i>");
        }
        return false;
    }
    $("#lbltbUser").html("<i class='fa fa-check ' style='color: aqua;' aria-hidden='true' ></i>");
    return true;
};


// 
function check_txtPassTK() {
    let maPass = $("#txtPassTK").val();
    let regex = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/;
    if (!regex.test(maPass)) {
        if (maPass === "") {
            $("#lbltbPassTK").html("<i class='text-danger'>* Hãy nhập dữ liệu  </i>");
        }
        else {
            $("#lbltbPassTK").html("* Mật khẩu phải trên tám ký tự, phải có môt <br>số một chữ và một ký từ đặc biệt.");
        }
        return false;
    }
    $("#lbltbPassTK").html("<i class='fa fa-check ' style='color: aqua;' aria-hidden='true' ></i>");
    return true;
};

// 
function check_txtPassTK2() {
    let maPass2 = $("#txtPassTK2").val();
    if (maPass2.length === 0) {
        $("#lbltbPassTK2").html("<i class='text-danger'>* Hãy nhập đữ liệu </i>");
        return false;
    }
    else
        if (maPass2 !== $("#txtPassTK").val()) {
            $("#lbltbPassTK2").html("* Mật khẩu này phải giống với mật khẩu ở trên.");
            return false;
        }
    $("#lbltbPassTK2").html("<i class='fa fa-check ' style='color: aqua;' aria-hidden='true' ></i>");
    return true;
};


// 
function check_txtEmail() {
    let maEmail = $("#txtEmail").val();
    let regex = /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!regex.test(maEmail)) {
        if (maEmail === "") {
            $("#lblEmail").html("<i class='text-danger'>* Hãy nhập đữ liệu </i>");

        }
        else {
            $("#lblEmail").html("<i class='text-warning'>* Email gồm tên va @gmail.com hoặc @email.com.</i>");
        }
        return false;
    }
    $("#lblEmail").html("<i class='fa fa-check ' style='color: aqua;' aria-hidden='true' ></i>");
    return true;
};

function check_data_TK() {
    if (!check_txtTen()) {
        return false;
    }
    if (!check_txtHo()) {
        return false;
    }
    if (!check_txtUserTK()) {
        return false;
    }
    if (!check_txtPassTK()) {
        return false;
    }
    if (!check_txtPassTK2()) {
        return false;
    }
    if (!check_txtEmail()) {
        return false;
    }
    for (let i = 0; i < 1000; i++) {
        continue;
    }

    return true;
}

function dangKy() {
    if (document.getElementById('chbform').checked !== true) {
        $("#lblCheckBox").html("<i class='text-warning'>* Hãy đồng ý với điều kiện của chúng tôi.</i>");
        return false;
    }
    $("#lblCheckBox").html("<i class='fa fa-check ' style='color: aqua;' aria-hidden='true' ></i>");

    if (check_data_TK()) {

        let maTen = $("#txtTen").val();
        let maHo = $("#txtHo").val();
        let maUser = $("#txtUserTK").val();
        let maPass = $("#txtPassTK").val();
        let maEmail = $("#txtEmail").val();
        let maSDT = $("#txtSDT").val();

        // tenUser = $("#lbltbUser").val();

        let lblTB = "aaaa";

        if (maSDT.length > 0) {
            lblTB = "Chào mừng bạn đến với WatchPro. Bạn vừa tạo tài khoản với thông tin:\n"
                + "\nHọ của bạn: " + maHo
                + "\nTên của bạn: " + maTen
                + "\nTên user đăng nhập: " + maUser
                + "\nMật khẩu đăng nhập: " + maPass
                + "\nEmail: " + maEmail
                + "\nSố điên thoại: " + maSDT + "\n";
        }
        else {
            lblTB = "Chào mừng bạn đến với WatchPro. Bạn vừa tạo tài khoản với thông tin:\n"
                + "\nHọ của bạn: " + maHo
                + "\nTên của bạn: " + maTen
                + "\nTên user đăng nhập: " + maUser
                + "\nMật khẩu đăng nhập: " + maPass
                + "\nEmail: " + maEmail
                + "\nSố điên thoại: " + "không có \n";
        }
        alert(lblTB);
        location.assign("./TrangChu.html");
    }
    else alert("Bạn hãy nhập đầy dủ dữ liệu.");

}


// ================================================================
//anh bên trai dang nhap
let bg_img = [
    "url(../images/AE-1200WHD-1AVDF-399x399)",
    "url(../images/36trieu.jpg)",
    "url(../images/dongho2.jpg)",
    "url(../images/dongho3.jpg)",
    "url(../images/qc5.jpg)",
    "url(../images/dongho4.jpg)",
    "url(../images/dongho6.jpg)",
    "url(../images/T006.407.36.263.00-399x399.jpg)",
    "url(../images/19_BM9012-02A-EW3252-07A-399x399.jpg)",
    "url(../images/2_53555-RGMWRG-2-399x399.jpg)",
    "url(../images/2_K7B216C6-K7B236C6-399x399.jpg)",
    "url(../images/9_MTP-V300G-7AUDF-LTP-V300G-7AUDF-399x399.jpg)",
    "url(../images/ttsp1.jpg)",
    "url(../images/ttsp3.jpg)",
    "url(../images/DW00100163-399x399.jpg)",
]
let n = bg_img.length;

function setIMG() {
    let rand = Math.floor(Math.random() * n);

    let img1 = document.getElementById("img1");
    // img.style.backgroundColor = bg_color[rand];

    img1.style.backgroundImage = bg_img[rand];
    img1.style.backgroundSize = "cover";

    let rand2 = Math.floor(Math.random() * n);

    let img2 = document.getElementById("img2");
    // img.style.backgroundColor = bg_color[rand];

    img2.style.backgroundImage = bg_img[rand2];
    img2.style.backgroundSize = "cover";

    t = setTimeout(setIMG, 2000);
}