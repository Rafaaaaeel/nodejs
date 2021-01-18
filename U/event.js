const EventEmitter = require('events');


class Event extends EventEmitter {}
const myEvent = new Event()

myEvent.on('security', (x, y)=>{
    console.log(`Starting the event "security": ${x} ${y}`)
})

myEvent.emit('security', 'userAdmin', 'change')

myEvent.on('off', (dados)=>{
    console.log(dados)
})

myEvent.emit('off', 'turn off')