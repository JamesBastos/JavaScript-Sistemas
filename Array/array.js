let car = [3,2,7,4,9]

/*for (let pos = 0; pos < car.length; pos++){
    console.log(`A posição ${car} tem valor ${car[pos]}`)
}

let a = 1

while (a <= 10) {
    console.log(`Valor de ${a}`)
    a++
}

let res = 5
for (let n = 1; n <= 10 ; n++){

    console.log(`${res}x${n}=${res*n}`)
}*/

for (let pos in car) {
    console.log(`a posição ${car} tem valor ${car[pos]}`)
}