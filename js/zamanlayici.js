// Zamanlayıcı için hedef tarih
var countDownDate = new Date("June 26 , 2026 00:00:00").getTime();

// Her saniye güncelleme yapacak fonksiyon
var x = setInterval(function() {

  var now = new Date().getTime();

  // Hedef tarih ile şu anki zaman arasındaki farkı hesapla
  var distance = countDownDate - now;

  // Gün, saat, dakika ve saniyeyi hesaplamaları
  var gun = Math.floor(distance / (1000 * 60 * 60 * 24));
  var saat = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var dakika = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var saniye = Math.floor((distance % (1000 * 60)) / 1000);

  // Sonucu HTML elementine yazdır
  document.getElementById("sayac").innerHTML = gun + " GÜN " + saat + " SAAT "
  + dakika + " DAKİKA " + saniye + " SANİYE";

  // Eğer geri sayım biterse, mesaj göster
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("sayac").innerHTML = "O GUN BUGÜN!";
  }
}, 1000);