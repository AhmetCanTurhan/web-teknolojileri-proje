function mailValidation() {
    var email = document.getElementById("email").value;
    var regex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
    return regex.test(email);
}

function telValidation() {
    var tel = document.getElementById("telefon").value;
    var regex = /^\d{10}$/;
    return regex.test(tel);
}

function isimValidation() {
    var isim = document.getElementById("ad").value;
    var regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
    return regex.test(isim);
}

function soyisimValidation() {
    var soyisim = document.getElementById("soyad").value;
    var regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
    return regex.test(soyisim);
}

function formuDenetle() {
    for (var i = 1; i <= 4; i++) {
        var kutu = document.getElementById("uyari-kutusu" + i);
        if (kutu) {
            kutu.innerHTML = "";
            kutu.className = "";
        }
    }

    var hatalar = [];

    var adDegeri = document.getElementById("ad").value.trim();
    var soyadDegeri = document.getElementById("soyad").value.trim();
    var emailDegeri = document.getElementById("email").value.trim();
    var telDegeri = document.getElementById("telefon").value.trim();

    if (adDegeri === "") hatalar.push("Ad alanı boş bırakılamaz!");
    if (soyadDegeri === "") hatalar.push("Soyad alanı boş bırakılamaz!");
    if (emailDegeri === "") hatalar.push("E-posta alanı boş bırakılamaz!");
    if (telDegeri === "") hatalar.push("Telefon alanı boş bırakılamaz!");

    if (adDegeri !== "" && !isimValidation()) {
        hatalar.push("İsim sadece harflerden oluşmalıdır.");
    }
    if (soyadDegeri !== "" && !soyisimValidation()) {
        hatalar.push("Soyisim sadece harflerden oluşmalıdır.");
    }
    if (emailDegeri !== "" && !mailValidation()) {
        hatalar.push("Geçerli bir e-posta girin. (Örn: ahmet@sakarya.edu.tr)");
    }
    if (telDegeri !== "" && !telValidation()) {
        hatalar.push("Geçerli bir telefon girin. (Örn: 5551234567)");
    }

    for (var j = 0; j < hatalar.length; j++) {
        if (j < 4) {
            var hedefKutu = document.getElementById("uyari-kutusu" + (j + 1));
            hedefKutu.innerHTML = hatalar[j];
            hedefKutu.className = "text-light bg-danger bg-opacity-50 rounded col-12 p-2 mt-2 mb-2";
        }
    }

    if (hatalar.length === 0) {
        alert("Form JS ile başarıyla gönderildi!");
    }
}