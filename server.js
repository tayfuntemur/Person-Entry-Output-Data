// JSON dosyasını bir JavaScript değişkeni olarak simüle ediyoruz
let personelData = {};

$(document).ready(function () {
    // Giriş Yap Butonu
    $('#girisYap').on('click', function () {
        let personelId = $('#personelId').val().trim();

        if (personelId === "") {
            alert("Lütfen bir Personel ID girin.");
            return;
        }

        // Personel kayıtlı değilse, kaydet ve giriş zamanını ekle
        if (!personelData[personelId]) {
            personelData[personelId] = {
                girisZamanlari: [],
                cikisZamanlari: []
            };
            
        }

        // Giriş zamanını kaydet
        let now = new Date();
        personelData[personelId].girisZamanlari.push(now.toLocaleString());

        $('#sonuc').text(`Giriş yapıldı: ${now.toLocaleString()}`);
        $('#personelId').val(''); // Input alanını temizle
        console.log(personelData); // JSON verisini tarayıcı konsolunda görüntülemek için
    });

    // Çıkış Yap Butonu
    $('#cikisYap').on('click', function () {
        let personelId = $('#personelId').val().trim();

        if (personelId === "") {
            alert("Lütfen bir Personel ID girin.");
            return;
        }

        // Personel kaydı yoksa hata mesajı
        if (!personelData[personelId]) {
            alert("Bu personel için giriş kaydı bulunamadı.");
            $('#personelId').val(''); // Input alanını temizle
            return;
        }

        // Çıkış zamanını kaydet
        let now = new Date();
        personelData[personelId].cikisZamanlari.push(now.toLocaleString());

        $('#sonuc').text(`Çıkış yapıldı: ${now.toLocaleString()}`);
        $('#personelId').val(''); // Input alanını temizle
        console.log(personelData); // JSON verisini tarayıcı konsolunda görüntülemek için
    });
});
