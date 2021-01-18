const EventEmitter = require('events')

class Event extends EventEmitter {}

const myEvent = new Event()

myEvent.on('security', (x,y)=>{
    console.log(`security ${x} ${y}`)
})


myEvent.emit('security', 'userAdmin', 'Alterou Salário')