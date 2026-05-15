// Giriş doğrulama işlemleri
function girisDenetleme() {
    var email = document.getElementById("giris").value;
    var regex = /^[BbGgUuSsYyDd](0?[0-9]|1[0-9]|2[0-5])(1|2|4|5|6|7|8|9|11|12|13|14|15|16|18|36|40|50|55|60|70|80|90)\d{1,2}\d{1,3}@ogr\.sakarya\.edu\.tr$/;
    return regex.test(email);
}

// Form doğrulama işlemleri
function formuDenetle(event) {
    // Önceki uyarıları temizle
    for (var i = 1; i <= 2; i++) {
        var kutu = document.getElementById("uyari-kutusu" + i);
        // Eğer kutu varsa, içeriğini temizle ve sınıfını sıfırla
        if (kutu) {
            kutu.innerHTML = "";
            kutu.className = "";
        }
    }

    // Form alanlarının değerlerini al
    var hatalar = [];
    var emailDegeri = document.getElementById("giris").value.trim();
    var sifreDegeri = document.getElementById("sifre-giris").value.trim();

    var ogrenciNo = "";

    // E-posta adresinden öğrenci numarasını çıkarmak için @ işaretine kadar olan kısmı alıyoruz
    if (emailDegeri !== "") {
        ogrenciNo = emailDegeri.split("@")[0];
    }

    // E-posta boşluk doğrulaması
    if (emailDegeri === "") hatalar.push("E-posta alanı boş bırakılamaz!");
    // Şifre boşluk doğrulaması
    if (sifreDegeri === "") hatalar.push("Şifre alanı boş bırakılamaz!");

    // E-posta formatı doğrulaması
    if (emailDegeri !== "" && !girisDenetleme())
        hatalar.push("Geçerli bir Sakarya Üniversitesi öğrenci e-postası girin. (Örn: B251210010@ogr.sakarya.edu.tr)");

    // Şifre formatı doğrulaması
    if (sifreDegeri !== "" && sifreDegeri.toUpperCase() !== ogrenciNo.toUpperCase())
        hatalar.push("Hatalı şifre! Lütfen tekrar deneyin.");


    // Hatalar varsa, formun gönderilmesini engelle ve hataları göster
    if (hatalar.length > 0) {
        event.preventDefault();
        // Hataları göstermek için döngü
        for (var j = 0; j < hatalar.length; j++) {
            // Eğer bu hata mesajı boş değilse, ilgili kutuya hata mesajını ekle
            if (j < 2) {
                var hedefKutu = document.getElementById("uyari-kutusu" + (j + 1));
                hedefKutu.className = "col-12";
                hedefKutu.innerHTML = "<div class='text-light bg-danger bg-opacity-50 rounded p-2 mt-2'>" + hatalar[j] + "</div>";
            }
        }

        // Hatalar gösterildikten sonra, giriş ve şifre alanlarını temizle
        document.getElementById("giris").value = "";
        document.getElementById("sifre-giris").value = "";
    }
}