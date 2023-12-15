let qr_box = document.getElementById("qr-box");
let qr_img = document.getElementById("qr-img");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length > 0){
        qr_img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qr_img.classList.add("show-box");
    }
}