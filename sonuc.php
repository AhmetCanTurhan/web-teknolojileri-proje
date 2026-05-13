<!DOCTYPE html>
<html lang="tr" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="5;url=giris.html">
    <title>Form Sonucu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/iletisim.css">
</head>
<body>
    <div class="container mt-5 col-lg-8">
        <div class="bg-dark bg-opacity-75 p-4 p-md-5 rounded-4 shadow-lg text-light">
            
            <div class="text-center mb-4">
                <h1 class="display-5 fw-bold">Mesajınız İletildi!</h1>
                <p class="fs-5 mt-3">Teşekkür ederiz. 5 saniye içinde ana sayfaya yönlendirileceksiniz...</p>
            </div>

            <h3 class="border-bottom border-secondary pb-2 mb-3">Gönderilen Bilgiler:</h3>
        <div class="table-responsive"> 
            <table class="table table-dark table-striped table-bordered border-secondary mt-3 fs-5">
                <tbody>
                    <tr>
                        <th class="w-25">Ad:</th>
                        <td><?php echo isset($_POST['ad']) ? htmlspecialchars($_POST['ad']) : '-'; ?></td>
                    </tr>
                    <tr>
                        <th>Soyad:</th>
                        <td><?php echo isset($_POST['soyad']) ? htmlspecialchars($_POST['soyad']) : '-'; ?></td>
                    </tr>
                    <tr>
                        <th>E-posta:</th>
                        <td><?php echo isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '-'; ?></td>
                    </tr>
                    <tr>
                        <th>Telefon:</th>
                        <td><?php echo isset($_POST['telefon']) ? htmlspecialchars($_POST['telefon']) : '-'; ?></td>
                    </tr>
                    <tr>
                        <th>Konu:</th>
                        <td><?php echo isset($_POST['konu']) ? htmlspecialchars($_POST['konu']) : '-'; ?></td>
                    </tr>
                    <tr>
                        <th>Üniversite:</th>
                        <td><?php echo isset($_POST['secim']) ? htmlspecialchars($_POST['secim']) : '-'; ?></td>
                    </tr>
                    <tr>
                        <th>Mesaj:</th>
                        <td style="word-break: break-word;"><?php echo isset($_POST['mesaj']) && $_POST['mesaj'] !== "" ? htmlspecialchars($_POST['mesaj']) : 'Mesaj girilmedi.'; ?></td>
                    </tr>
                </tbody>
            </table>
        </div>

            <div class="text-center mt-4">
                <a href="giris.html" class="btn btn-outline-light">Hemen Ana Sayfaya Dön</a>
            </div>

        </div>
    </div>

    <style>
        @keyframes progress {
            0% { width: 100%; }
            100% { width: 0%; }
        }
    </style>
</body>
</html>