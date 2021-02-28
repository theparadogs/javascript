// POPUP BOX

// COMBINE WITH CONDISION (KONDISI/PERCABANGAN)
// var nama = prompt('Masukan nama');
// var konfirmasi;
// var konfirmasi = confirm('Kamu yakin bahwa nama kamu ' + nama);
// if (konfirmasi === true) {
//     alert("Selamat Datang " + nama);
// }else{
//     alert("silahkan masukan nama anda dengan tepat")
// }

// COMBINE WITH LOOPING (PENGULANGAN)
alert('selamat datang');
var ulangi = true;

while(ulangi){
    var nama = prompt('Masukan Nama');
    alert('halo ' + nama);

    ulangi = confirm('coba lagi?');
}

alert('terima kasih');
