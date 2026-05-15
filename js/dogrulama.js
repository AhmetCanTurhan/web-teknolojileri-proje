
// E-posta doğrulama fonksiyonu
function mailValidation() {
    var email = document.getElementById("email").value;
    var regex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
    return regex.test(email);
}

// Telefon doğrulama fonksiyonu
function telValidation() {
    var tel = document.getElementById("telefon").value;
    var regex = /^\d{10}$/;
    return regex.test(tel);
}

// İsim doğrulama fonksiyonu
function isimValidation() {
    var isim = document.getElementById("ad").value;
    var regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
    return regex.test(isim);
}

// Soyisim doğrulama fonksiyonu
function soyisimValidation() {
    var soyisim = document.getElementById("soyad").value;
    var regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
    return regex.test(soyisim);
}

// Form doğrulama fonksiyonu
function formuDenetle() {
    // Önceki uyarıları temizle
    for (var i = 1; i <= 7; i++) {
        var kutu = document.getElementById("uyari-kutusu" + i);
        // Eğer kutu varsa, içeriğini temizle ve sınıfını sıfırla
        if (kutu) {
            kutu.innerHTML = "";
            kutu.className = "";
        }
    }

    // Form alanlarının değerlerini al
    var adDegeri = document.getElementById("ad").value.trim();
    var soyadDegeri = document.getElementById("soyad").value.trim();
    var emailDegeri = document.getElementById("email").value.trim();
    var telDegeri = document.getElementById("telefon").value.trim();
    var konuDegeri = document.getElementById("konu").value.trim();
    var radyoButonlari = document.getElementsByName("secim");
    var secimDegeri = "";
    var onayDegeri = document.getElementById("onay").checked;

    // Radyo butonlarından seçili olanın değerini almak için döngü
    for(var k = 0; k < radyoButonlari.length; k++) {
        // Eğer bu radyo butonu seçiliyse, onun değerini secimDegeri'ne ata ve döngüden çık
        if (radyoButonlari[k].checked)
        {
            secimDegeri = radyoButonlari[k].value;
            break;
        }
    }
    
    // Hataları depolamak için dizi
    let hatalar = ["", "", "", "", "", "", ""];


    // Ad doğrulaması
    if (adDegeri === "") {
        hatalar[0] = "Ad alanı boş bırakılamaz! (JS)";
    } else if (!isimValidation()) {
        hatalar[0] = "İsim sadece harflerden oluşmalıdır.";
    }

    // Soyad doğrulaması
    if (soyadDegeri === "") {
        hatalar[1] = "Soyad alanı boş bırakılamaz! (JS)";
    } else if (!soyisimValidation()) {
        hatalar[1] = "Soyisim sadece harflerden oluşmalıdır. (JS)";
    }

    // E-posta doğrulaması
    if (emailDegeri === "") {
        hatalar[2] = "E-posta alanı boş bırakılamaz! (JS)";
    } else if (!mailValidation()) {
        hatalar[2] = "Geçerli bir e-posta girin. (Örn: ahmet@sakarya.edu.tr) (JS)";
    }

    // Telefon doğrulaması
    if (telDegeri === "") {
        hatalar[3] = "Telefon alanı boş bırakılamaz! (JS)";
    } else if (!telValidation()) {
        hatalar[3] = "Geçerli bir telefon girin. (Örn: 5551234567) (JS)";
    }

    // Konu doğrulaması
    if (konuDegeri === "") {
        hatalar[4] = "Konu alanı boş bırakılamaz! (JS)";
    }

    // Üniversite seçim doğrulaması
    if (secimDegeri === "") {
        hatalar[5] = "Üniversite seçim alanı boş bırakılamaz! (JS)";
    }

    // Kullanıcı sözleşmesi onay doğrulaması
    if (!onayDegeri) {
        hatalar[6] = "Kullanıcı sözleşmesini onaylamanız gerekmektedir! (JS)";
    }

    // Hatalar varsa, formun gönderilmesini engelle ve hataları göster
    for (var j = 0; j < hatalar.length; j++) {
        // Eğer bu hata mesajı boş değilse, ilgili kutuya hata mesajını ekle
        if (hatalar[j] !== "") { 
            var hedefKutu = document.getElementById("uyari-kutusu" + (j + 1));
            hedefKutu.className = "col-12 mt-2";
            hedefKutu.innerHTML = "<div class='text-light bg-danger bg-opacity-50 rounded p-2'>" + hatalar[j] + "</div>";
        }
    }

    // Eğer hatalar dizisi tamamen boşsa, formu gönder
    if (hatalar.join("") === "") {
        document.getElementById("iletisimForm").submit();
    }
}

// Vue.js ile form doğrulama
const { createApp } = Vue;

// Vue uygulamasını oluştur ve #iletisimForm elementine bağla
createApp({
    data() {
        return {
            ad: "",
            soyad: "",
            email: "",
            konu: "",
            telefon: "",
            mesaj: "",
            secim: "",
            onay: false,
            vueHatalari: []
        }
    },
    methods: {
        // Vue.js ile e-posta doğrulama fonksiyonu
        mailValidation() {
            var regex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
            return regex.test(this.email);
        }

        // Vue.js ile telefon doğrulama fonksiyonu
        ,telValidation() {
            var regex = /^\d{10}$/;
            return regex.test(this.telefon);
        }

        // Vue.js ile isim doğrulama fonksiyonu
        ,isimValidation() {
            var regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
            return regex.test(this.ad);
        }

        // Vue.js ile soyisim doğrulama fonksiyonu
        ,soyisimValidation() {
            var regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
            return regex.test(this.soyad);
        }

        // Vue.js ile form doğrulama fonksiyonu
        ,vueFormuDenetle(event) {
            this.vueHatalari = [];

            // Önceki uyarıları temizle
            for (var i = 1; i <= 7; i++) {
                var jsKutu = document.getElementById("uyari-kutusu" + i);
                if (jsKutu) {
                    jsKutu.innerHTML = "";
                    jsKutu.className = "";
                }
            }

            // Ad doğrulaması
            if (this.ad.trim() === "") {
                this.vueHatalari.push("Ad alanı boş bırakılamaz! (Vue)");
            } else if (!this.isimValidation()) {
                this.vueHatalari.push("İsim sadece harflerden oluşmalıdır. (Vue)");
            }

            // Soyad doğrulaması
            if (this.soyad.trim() === "") {
                this.vueHatalari.push("Soyad alanı boş bırakılamaz! (Vue)");
            } else if (!this.soyisimValidation()) {
                this.vueHatalari.push("Soyisim sadece harflerden oluşmalıdır. (Vue)");
            }

            // E-posta doğrulaması
            if (this.email.trim() === "") {
                this.vueHatalari.push("E-posta alanı boş bırakılamaz! (Vue)");
            } else if (!this.mailValidation()) {
                this.vueHatalari.push("Geçerli bir e-posta girin. (Örn: ahmet@sakarya.edu.tr) (Vue)");
            }

            // Telefon doğrulaması
            if (this.telefon.trim() === "") {
                this.vueHatalari.push("Telefon alanı boş bırakılamaz! (Vue)");
            } else if (!this.telValidation()) {
                this.vueHatalari.push("Geçerli bir telefon girin. (Örn: 5551234567) (Vue)");
            }
            
            // Konu doğrulaması
            if (this.konu.trim() === "") {
                this.vueHatalari.push("Konu alanı boş bırakılamaz! (Vue)");
            }

            // Üniversite seçim doğrulaması
            if (this.secim.trim() === "") {
                this.vueHatalari.push("Üniversite seçim alanı boş bırakılamaz! (Vue)");
            }

            // Kullanıcı sözleşmesi onay doğrulaması
            if (!this.onay) {
                this.vueHatalari.push("Kullanıcı sözleşmesini onaylamanız gerekmektedir! (Vue)");
            }

            // Hatalar varsa, formun gönderilmesini engelle ve hataları göster
            if (this.vueHatalari.length > 0) {
                // Eğer event objesi varsa, formun gönderilmesini engelle
                if (event) event.preventDefault();

                // Vue.js hatalarını JS tarafında göstermek için döngü
                for (var j = 0; j < this.vueHatalari.length; j++) {
                    // Eğer bu hata mesajı boş değilse, ilgili kutuya hata mesajını ekle
                    if (j < 7) {
                        var hedefKutu = document.getElementById("uyari-kutusu" + (j + 1));
                        hedefKutu.className = "col-12 mt-2";
                        hedefKutu.innerHTML = "<div class='text-light bg-danger bg-opacity-50 rounded p-2'>" + this.vueHatalari[j] + "</div>";
                    }
                }
            }
            else {
                document.getElementById("iletisimForm").submit();
            }
        }
    }
}).mount('#iletisimForm');