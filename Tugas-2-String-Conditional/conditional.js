console.log("====================== SOAL IF ELSE ======================");
var nama = "Jane";
var peran = "Penyihir";

if (nama.trim() === "") {
    console.log("Nama harus diisi!");
} else if (peran.trim() === "") {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
} else {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    let message = "Halo " + peran + " " + nama + ", ";

    if (peran.toLowerCase() === "penyihir") {
        message += "kamu dapat melihat siapa yang menjadi werewolf!";
    } else if (peran.toLowerCase() === "guard") {
        message +=
            "kamu akan membantu melindungi temanmu dari serangan werewolf.";
    } else if (peran.toLowerCase() === "werewolf") {
        message += "Kamu akan memakan mangsa setiap malam!";
    }

    console.log(message);
}

console.log("====================== SOAL SWITCH ======================");

var hari = 21;
var bulan = 1;
var tahun = 1945;
//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

var bulanStr = "";
switch (bulan) {
    case 1:
        bulanStr = "Januari";
        break;
    case 2:
        bulanStr = "Februari";
        break;
    case 3:
        bulanStr = "Maret";
        break;
    case 4:
        bulanStr = "April";
        break;
    case 5:
        bulanStr = "Mei";
        break;
    case 6:
        bulanStr = "Juni";
        break;
    case 7:
        bulanStr = "Juli";
        break;
    case 8:
        bulanStr = "Agustus";
        break;
    case 9:
        bulanStr = "September";
        break;
    case 10:
        bulanStr = "Oktober";
        break;
    case 11:
        bulanStr = "November";
        break;
    case 12:
        bulanStr = "Desember";
        break;
}

console.log(hari.toString(), bulanStr, tahun.toString());
