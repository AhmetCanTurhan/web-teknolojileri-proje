        document.addEventListener('DOMContentLoaded', function() {
            const efsaneDiziler = [15299, 38963, 161, 169, 78665, 55138, 618, 713, 37196, 62998, 868, 2174];
            
            const rastgeleSecim = Math.floor(Math.random() * efsaneDiziler.length);
            const secilenDiziId = efsaneDiziler[rastgeleSecim];
            
            fetch('https://api.tvmaze.com/shows/' + secilenDiziId)
                .then(cevap => cevap.json())
                .then(dizi => {

                    document.getElementById('api-resim').src = dizi.image.medium;
                    document.getElementById('api-isim').innerText = dizi.name;
                    document.getElementById('api-puan').innerText = "⭐ " + dizi.rating.average + " / 10";
                    
                    if(dizi.genres && dizi.genres.length > 0) {
                        document.getElementById('api-tur').innerText = dizi.genres[0];
                    } else {
                        document.getElementById('api-tur').style.display = 'none';
                    }
                    
                })
                .catch(hata => {
                    document.getElementById('api-isim').innerText = "Veri çekilemedi.";
                });
        });