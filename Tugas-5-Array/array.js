console.log("Soal No. 1 (Range)");

function range(startNum, finishNum) {
    if (typeof startNum === "undefined" || typeof finishNum === "undefined") {
        return -1;
    }

    let kenaikan = 1;
    if (startNum > finishNum) {
        kenaikan = -1;
    }

    let hasil = [];
    while (startNum != finishNum) {
        hasil.push(startNum);
        startNum += kenaikan;
    }

    hasil.push(startNum);
    return hasil;
}

console.log(range(1, 10)); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)); // -1
console.log(range(11, 18)); // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)); // [54, 53, 52, 51, 50]
console.log(range()); // -1
console.log(range(54, 54)); // [54]

console.log("\nSoal No. 2 (Range with Step)");

function rangeWithStep(startNum, finishNum, step) {
    if (typeof startNum === "undefined" || typeof finishNum === "undefined") {
        return -1;
    }

    let hasil = [];
    if (startNum > finishNum) {
        for (let i = startNum; i >= finishNum; i -= step) {
            hasil.push(i);
        }
    } else {
        for (let i = startNum; i <= finishNum; i += step) {
            hasil.push(i);
        }
    }

    return hasil;
}

console.log(rangeWithStep(1, 10, 2)); // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)); // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)); // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)); // [29, 25, 21, 17, 13, 9, 5]
console.log(rangeWithStep(33, 33, 7)); // [33]

console.log("\nSoal No. 3 (Sum of Range)");

function sum(startNum, finishNum, step = 1) {
    let hasil = 0;
    if (typeof startNum === "undefined" && typeof finishNum === "undefined") {
        return hasil;
    } else if (typeof finishNum === "undefined") {
        return startNum;
    }

    if (startNum > finishNum) {
        for (let i = startNum; i >= finishNum; i -= step) {
            hasil += i;
        }
    } else {
        for (let i = startNum; i <= finishNum; i += step) {
            hasil += i;
        }
    }

    return hasil;
}

console.log(sum(1, 10)); // 55
console.log(sum(5, 50, 2)); // 621
console.log(sum(15, 10)); // 75
console.log(sum(20, 10, 2)); // 90
console.log(sum(1)); // 1
console.log(sum()); // 0
console.log(sum(5)); // 5

console.log("\nSoal No. 4 (Array Multidimensi)");

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(data) {
    for (let row = 0; row < data.length; row++) {
        let dataRow = data[row];

        console.log("Nomor ID:  " + dataRow[0]);
        console.log("Nama Lengkap:  " + dataRow[1]);
        console.log("TTL:  " + dataRow[2], dataRow[3]);
        console.log("Hobi:  " + dataRow[4] + "\n");
    }
}

dataHandling(input);

console.log("\nSoal No. 5 (Balik Kata)");

function balikKata(input) {
    let hasil = "";

    for (let i = input.length - 1; i >= 0; i--) {
        hasil += input.substring(i, i + 1);
    }

    return hasil;
}

console.log(balikKata("Kasur Rusak")); // kasuR rusaK
console.log(balikKata("SanberCode")); // edoCrebnaS
console.log(balikKata("Haji Ijah")); // hajI ijaH
console.log(balikKata("racecar")); // racecar
console.log(balikKata("I am Sanbers")); // srebnaS ma I
