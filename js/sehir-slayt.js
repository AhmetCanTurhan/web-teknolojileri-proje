// Slayt indeksini başlat
let slideIndex = 1;
showSlides(slideIndex);

// Sonraki/Önceki kontrolleri
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Küçük resim kontrolleri
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Slaytları gösterme fonksiyonu
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Eğer n, slayt sayısından büyükse, slayt indeksini 1 yap
  if (n > slides.length) {slideIndex = 1}

  // Eğer n, 1'den küçükse, slayt indeksini son slayta yap
  if (n < 1) {slideIndex = slides.length}
  
  // Tüm slaytları gizle
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Geçerli slaytı göster
  slides[slideIndex-1].style.display = "block";
}