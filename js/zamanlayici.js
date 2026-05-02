var countDownDate = new Date("June 26 , 2026 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var gun = Math.floor(distance / (1000 * 60 * 60 * 24));
  var saat = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var dakika = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var saniye = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("sayac").innerHTML = gun + " GÜN " + saat + " SAAT "
  + dakika + " DAKİKA " + saniye + " SANİYE";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("sayac").innerHTML = "O GUN BUGUN!";
  }
}, 1000);