console.log("\n\n===================== Soal No. 1 (Array to Object)")

function arrayToObject(array) {
    if (array.length === 0) {
        console.log(`""`)
        return
    }

    let now = new Date()
    let thisYear = now.getFullYear()

    for (let i = 1; i <= array.length; i++) {
        let data = array[i-1];

        let objData = {
            firstName: data[0],
            lastName: data[1],
            gender: data[2]
        }

        if (isNaN(data[3]) || data[3] > thisYear ) {
            objData.age = "Invalid Birth Year"
        } else {
            objData.age = (thisYear - data[3])
        }

        console.log(i + ".", objData.firstName, objData.lastName, ":", objData)
    }

}
 
// Driver Code
let people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
let people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""


console.log("\n\n===================== Soal No. 2 (Shopping Time)")

function shoppingTime(memberId, money) {
    if (typeof memberId === "undefined" || memberId.trim() === "") {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    } else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup"
    }


    let katalog = [
        {
            nama: "Sepatu Stacattu",
            harga: 1500000
        },
        {
            nama: "Baju Zoro",
            harga: 500000
        },
        {
            nama: "Baju H&N",
            harga: 250000
        },
        {
            nama: "Sweater Uniklooh",
            harga: 175000
        },
        {
            nama: "Casing Handphone",
            harga: 50000
        }
    ]

    let keranjang = {
        memberId: memberId,
        money: money,
        
    }

    let listPurchased = []
    for (let i = 0; i < katalog.length; i++) {
        let barang = katalog[i]

        if (money >= barang.harga) {
            money -= barang.harga
            listPurchased.push(barang.nama)
        }
    }

    keranjang.listPurchased = listPurchased
    keranjang.changeMoney = money

    return keranjang
  }
   
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

  console.log(shoppingTime("324193hDew2", 700000))


  console.log("\n\n===================== Soal No. 3 (Naik Angkot)")

  function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    let hasil = []
    if (arrPenumpang.length === 0) {
        return hasil
    }

    
    for (let i = 0; i < arrPenumpang.length; i++) {
        let dataPenumpang = arrPenumpang[i]

        if (dataPenumpang.length < 3) {
            continue
        } else {
            let tarif = (rute.indexOf(dataPenumpang[2]) - rute.indexOf(dataPenumpang[1])) * 2000
            
            hasil.push(
                {
                    penumpang: dataPenumpang[0],
                    naikDari: dataPenumpang[1],
                    tujuan: dataPenumpang[2],
                    bayar: tarif
                }
            )
        }
    }

    return hasil
  }
   
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
   
  console.log(naikAngkot([])); //[]