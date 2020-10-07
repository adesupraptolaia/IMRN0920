var readBooksPromise = require("./promise.js");

var books = [
    { name: "LOTR", timeSpent: 3000 },
    { name: "Fidas", timeSpent: 2000 },
    { name: "Kalkulus", timeSpent: 4000 },
];

let i = 0;
function callback(time) {
    let book = books[i];

    if (time > 0 && i !== books.length) {
        readBooksPromise(time, book)
            .then((sisaWaktu) => callback(sisaWaktu))
            .catch(() => {});
    }

    i += 1;
}

callback(10000);
