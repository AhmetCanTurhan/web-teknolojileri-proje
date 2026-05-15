<!DOCTYPE html>
    <html lang="tr" data-bs-theme="dark">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>İletişim</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/index.css">
    </head>
    <body>

    <div class="col-lg-4 mx-auto container-fluid px-3 pt-3">
        <div class="align-items-center bg-dark bg-opacity-75 p-4 p-md-5 rounded-4 shadow-lg">
            <div class="text-center text-light">

                <?php
                $email_tam_hali = $_POST['giris'];
                $gelen_sifre = $_POST['sifre-giris'];

                $email_parcalari = explode("@", $email_tam_hali);
                $ogrenciNo = strtoupper($email_parcalari[0]);
                
                $sifreBuyuk = strtoupper($gelen_sifre);

                if($sifreBuyuk === $ogrenciNo) {
                    echo "<script>sessionStorage.setItem('oturum', 'aktif');</script>";
                    
                    header("Refresh: 5; url=giris.html"); 
                    
                    echo "<h3>Hoşgeldiniz, " . $ogrenciNo . "!</h3>";
                    echo "<br><h4>5 saniye içinde ana sayfaya döneceksiniz...</h4>";
                }
                ?>
                
            </div>

            <div class="text-center mt-4">
                <a href="giris.html" class="btn btn-outline-light">Hemen Ana Sayfaya Dön</a>
            </div>
        </div>
    </div>

    <script src="js/cikis.js"></script>

    </body>
</html>