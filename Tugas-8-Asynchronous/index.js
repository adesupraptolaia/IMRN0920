var readBooks = require("./callback.js");

var books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
];

let i = 0;
var waktuSebelumnya;
function callback(time) {
    let book = books[i];

    if (waktuSebelumnya != time && i !== books.length) {
        readBooks(time, book, callback);
    }

    i += 1;
    waktuSebelumnya = time;
}

callback(10000);
