function palindrome(input) {
    let inputBalik = '' 

    for (let i = input.length-1; i >= 0; i--) {
        inputBalik += input.substring(i,i+1)
    }

    if (input.toLowerCase() === inputBalik.toLowerCase()) {
        return true
    }
    return false
}
console.log(palindrome("haji ijah")) // true 
console.log(palindrome("nabasan")) // false 
console.log(palindrome("nababan")) // true 
console.log(palindrome("jakarta")) // false

console.log("======================")

function balikString(input) {
    let inputBalik = '' 

    for (let i = input.length-1; i >= 0; i--) {
        inputBalik += input.substring(i,i+1)
    }

    return inputBalik
}

console.log(balikString("abcde")) // edcba 
console.log(balikString("rusak")) // kasur 
console.log(balikString("racecar")) // racecar 
console.log(balikString("haji")) // ijah


console.log("======================")

function DescendingTen(input) {
    if (typeof input !== 'number') {
        return "-1"
    }

    let hasil = ''
    for (let i = 0; i < 10; i++) {
        hasil += input + " "
        input--
    }

    return hasil
}

console.log(DescendingTen(100)) // 100 99 98 97 96 95 94 93 92 91 
console.log(DescendingTen(10)) // 10 9 8 7 6 5 4 3 2 1 
console.log(DescendingTen()) // -1
console.log(DescendingTen(20))

console.log("======================")

function ularTangga() {
    let hasil = ''

    for (let depan = 9; depan >= 0; depan--) {

        // case angka depan ganjil
        if (depan % 2 != 0) {
            for (let belakang = 10; belakang >= 1; belakang--) {

                // validasi angka belakang
                let angkaStr = ''
                if (belakang === 10) {
                    angkaStr = (depan+1).toString() + belakang.toString().substring(1,2)
                } else {
                    angkaStr = depan.toString() + belakang.toString()
                }
                
                // masukkan angka ke hasil
                let angka = parseInt(angkaStr)
                hasil += angka + " "
            }

        } else {
            // case angka depan genap
            for (let belakang = 1; belakang <= 10; belakang++) {

                // validasi angka belakang
                let angkaStr = ''
                if (belakang === 10) {
                    angkaStr = (depan+1).toString() + belakang.toString().substring(1,2)
                } else {
                    angkaStr = depan.toString() + belakang.toString()
                }
                
                // masukkan angka ke hasil
                let angka = parseInt(angkaStr)
                hasil += angka + " "
            }
        }
        
    }

    return hasil
}

console.log(ularTangga())



console.log("==========================")

function myApp() {
    var total = 5
    var output = ""

    for (let i = 1; i <= total; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + " "
        }

        console.log(output)
        output = ""
    }
}

myApp()