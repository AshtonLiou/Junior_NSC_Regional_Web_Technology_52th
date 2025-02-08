let captcha;
function generateCaptcha() {
    captcha = Math.floor(Math.random() * 9000 + 1000);
    $("#captcha").text(captcha);
};
generateCaptcha();
const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.verification.value == captcha) {
        alert("送出成功");
        location.href = "./home.html";
    } else {
        alert("驗證碼錯誤，哈哈笑死");
    }
};