<!DOCTYPE html>
    <html lang="tr" data-bs-theme="dark">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>İletişim</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="css/iletisim.css">
    </head>
    <body>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-opacity-75 bg-dark border-bottom border-dark border-2 py-2">
            <div class="container-fluid px-4">
                
                <a class="navbar-brand text-light fs-4 fw-bold" href="index.html">Ahmet Can Turhan<br>
                    <kucuk class="fs-6 fw-normal">Kişisel Web Sitesi - Giriş</kucuk>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#anaMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="anaMenu">
                    
                    <ul class="navbar-nav mx-auto p-2 text-center my-3 my-lg-0">
                        
                        <li class="nav-item px-2 border-lg-bottom-0 border-lg-end border-light">
                            <a class="nav-link text-light fs-5 fw-bold" href="index.html">Ana Sayfa</a>
                        </li>
                        <li class="nav-item px-2 border-lg-bottom-0 border-lg-end border-light">
                            <a class="nav-link text-light fs-5 fw-bold" href="sehrim.html">Şehrim</a>
                        </li>
                        <li class="nav-item px-2 border-lg-bottom-0 border-lg-end border-light">
                            <a class="nav-link text-light fs-5 fw-bold" href="ozgecmis.html">Özgeçmiş</a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link text-light fs-5 fw-bold" href="iletisim.html">İletişim</a>
                        </li>
                    </ul>

                    <div class="d-flex justify-content-center mt-3 mt-lg-0">
                        <a href="giris.html" class="btn btn-outline-light me-2">Giriş Yap</a>
                    </div>
        </nav>

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
                
                header("Refresh: 5; url=index.html"); 
                
                echo "<h3>Hoşgeldiniz, " . $ogrenciNo . "!</h3>";
                echo "<br><h4>5 saniye içinde ana sayfaya döneceksiniz...</h4>";
            }
            ?>
            
        </div>
    </div>
</div>

    </body>
</html>