console.log('message on console')

//

console.error(new Error('error message'))



const cars = ['GM', 'FIAT', 'FORD', 'VW', 'HONDA']

console.table(cars)


const dados = {
    name: "Rafael",
    idade: 19
}

console.table(dados)


console.count('process')
console.count('process')
console.count('process')
console.count('process')
console.count('process')
console.count('process')

console.time('contador')
for (let index = 0; index < 100; index++) {
    //console.log('-')
    
}
console.timeEnd('contador')


console.assert(true, 'do something')


console.assert(false, 'ERROR %s', 'Not working')


//console.clear()