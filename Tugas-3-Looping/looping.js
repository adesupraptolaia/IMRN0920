console.log("No. 1 Looping While")

let i = 1

while (i <= 20) {
    
    if (i <= 10) {
        if (i == 1) {
            console.log("LOOPING PERTAMA")
        }

        console.log(i*2 + " - I love coding")

    } else {
        if (i == 11) {
            console.log("LOOPING KEDUA")
        }
        

        console.log(42-i*2 + " - I will become a mobile developer")
    }

    i++
}

console.log("\n\nNo. 2 Looping menggunakan for")

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(i + " - Berkualitas")

    } else if (i % 3 === 0) {
        console.log(i + " - I Love Coding")

    } else {
        console.log(i + " - Santai")
    } 
}


console.log("\n\nNo. 3 Membuat Persegi Panjang")

for (let row = 0; row < 4; row++) {
    let pagar = '';
    for (let col = 0; col < 8; col++) {
        pagar += "#"
    }
    console.log(pagar)
}


console.log("\n\nNo. 4 Membuat Tangga")

for (let row = 1; row <= 7; row++) {
    let tangga = ''
    for (let col = 1; col <= row; col++) {
        tangga += "#"
    }
    console.log(tangga)
}


console.log("\n\nNo. 5 Membuat Papan Catur")

for (let row = 1; row <= 8; row++) {
    let papanCatur = ""

    for (let col = 1; col <= 8; col++) {
        if ( (row+col)%2 == 0) {
            papanCatur += " "

        } else {
            papanCatur += "#"
        }
    }
    
    console.log(papanCatur)
}