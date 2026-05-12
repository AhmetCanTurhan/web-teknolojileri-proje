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
    for (var i = 1; i <= 7; i++) {
        var kutu = document.getElementById("uyari-kutusu" + i);
        if (kutu) {
            kutu.innerHTML = "";
            kutu.className = "";
        }
    }

    var adDegeri = document.getElementById("ad").value.trim();
    var soyadDegeri = document.getElementById("soyad").value.trim();
    var emailDegeri = document.getElementById("email").value.trim();
    var telDegeri = document.getElementById("telefon").value.trim();
    var konuDegeri = document.getElementById("konu").value.trim();
    var radyoButonlari = document.getElementsByName("secim");
    var secimDegeri = "";
    var onayDegeri = document.getElementById("onay").checked;

    for(var k = 0; k < radyoButonlari.length; k++) {
        if (radyoButonlari[k].checked)
        {
            secimDegeri = radyoButonlari[k].value;
            break;
        }
    }
    
    let hatalar = ["", "", "", "", "", "", ""];


    if (adDegeri === "") {
        hatalar[0] = "Ad alanı boş bırakılamaz! (JS)";
    } else if (!isimValidation()) {
        hatalar[0] = "İsim sadece harflerden oluşmalıdır.";
    }

    if (soyadDegeri === "") {
        hatalar[1] = "Soyad alanı boş bırakılamaz! (JS)";
    } else if (!soyisimValidation()) {
        hatalar[1] = "Soyisim sadece harflerden oluşmalıdır. (JS)";
    }

    if (emailDegeri === "") {
        hatalar[2] = "E-posta alanı boş bırakılamaz! (JS)";
    } else if (!mailValidation()) {
        hatalar[2] = "Geçerli bir e-posta girin. (Örn: ahmet@sakarya.edu.tr) (JS)";
    }

    if (telDegeri === "") {
        hatalar[3] = "Telefon alanı boş bırakılamaz! (JS)";
    } else if (!telValidation()) {
        hatalar[3] = "Geçerli bir telefon girin. (Örn: 5551234567) (JS)";
    }

    if (konuDegeri === "") {
        hatalar[4] = "Konu alanı boş bırakılamaz! (JS)";
    }

    if (secimDegeri === "") {
        hatalar[5] = "Üniversite seçim alanı boş bırakılamaz! (JS)";
    }

    if (!onayDegeri) {
        hatalar[6] = "Kullanıcı sözleşmesini onaylamanız gerekmektedir! (JS)";
    }


    for (var j = 0; j < hatalar.length; j++) {
        if (hatalar[j] !== "") { 
            var hedefKutu = document.getElementById("uyari-kutusu" + (j + 1));
            hedefKutu.className = "col-12 mt-2";
            hedefKutu.innerHTML = "<div class='text-light bg-danger bg-opacity-50 rounded p-2'>" + hatalar[j] + "</div>";
        }
    }

    if (hatalar.join("") === "") {
        document.getElementById("iletisimForm").submit();
    }
}

const { createApp } = Vue;

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

        mailValidation() {
            var regex = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*$/i;
            return regex.test(this.email);
        }

        ,telValidation() {
            var regex = /^\d{10}$/;
            return regex.test(this.telefon);
        }

        ,isimValidation() {
            var regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
            return regex.test(this.ad);
        }

        ,soyisimValidation() {
            var regex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
            return regex.test(this.soyad);
        }

        ,vueFormuDenetle(event) {
            this.vueHatalari = [];

            for (var i = 1; i <= 7; i++) {
                var jsKutu = document.getElementById("uyari-kutusu" + i);
                if (jsKutu) {
                    jsKutu.innerHTML = "";
                    jsKutu.className = "";
                }
            }

            if (this.ad.trim() === "") {
                this.vueHatalari.push("Ad alanı boş bırakılamaz! (Vue)");
            } else if (!this.isimValidation()) {
                this.vueHatalari.push("İsim sadece harflerden oluşmalıdır. (Vue)");
            }

            if (this.soyad.trim() === "") {
                this.vueHatalari.push("Soyad alanı boş bırakılamaz! (Vue)");
            } else if (!this.soyisimValidation()) {
                this.vueHatalari.push("Soyisim sadece harflerden oluşmalıdır. (Vue)");
            }

            if (this.email.trim() === "") {
                this.vueHatalari.push("E-posta alanı boş bırakılamaz! (Vue)");
            } else if (!this.mailValidation()) {
                this.vueHatalari.push("Geçerli bir e-posta girin. (Örn: ahmet@sakarya.edu.tr) (Vue)");
            }

            if (this.telefon.trim() === "") {
                this.vueHatalari.push("Telefon alanı boş bırakılamaz! (Vue)");
            } else if (!this.telValidation()) {
                this.vueHatalari.push("Geçerli bir telefon girin. (Örn: 5551234567) (Vue)");
            }
            
            if (this.konu.trim() === "") {
                this.vueHatalari.push("Konu alanı boş bırakılamaz! (Vue)");
            }

            if (this.secim.trim() === "") {
                this.vueHatalari.push("Üniversite seçim alanı boş bırakılamaz! (Vue)");
            }

            if (!this.onay) {
                this.vueHatalari.push("Kullanıcı sözleşmesini onaylamanız gerekmektedir! (Vue)");
            }

            if (this.vueHatalari.length > 0) {
                if (event) event.preventDefault();

                for (var j = 0; j < this.vueHatalari.length; j++) {
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