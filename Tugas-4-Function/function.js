console.log("================ No. 1 ================");

function teriak() {
    console.log("Halo Sanbers!");
}

teriak();

console.log("\n\n================ No. 2 ================");

function kalikan(a, b) {
    return a * b;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali); // 48

console.log("\n\n================ No. 3 ================");
function introduce(nama, umur, alamat, hoby) {
    return (
        "Nama saya " +
        nama +
        ", umur saya " +
        umur +
        " tahun, alamat saya di " +
        alamat +
        ", dan saya punya hobby yaitu " +
        hoby +
        "!"
    );
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogyakarta";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!"
