// let sec=1000000
// let min = parseInt(sec / 60)
// sec%=60
// let hours=perseint(min / 60)
// min%=60
// let days= perseint(hours / 24)
// hours%=30
// let a = 5 , b = '5'
// a === b ? console.log('equal') : console.log("not equal")
// let c =prompt('enter data')
let converttype = prompt("enter your temp type")
let temp = prompt("enter your temp value")
converttype =='F' || converttype=='f' ?
    document.writeln((temp - 32 ) * 5 / 9) :
    document.writeln( temp * 9 / 5 + 32)