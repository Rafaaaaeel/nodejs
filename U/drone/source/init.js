const readLine = require('readLine')
const { createSocket } = require('dgram')
const commandParser = require('./commandParser')
const command = require('./command')
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants')
const Commander = require('./command')
const ComandParser = require('./commandParser')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const TELLO_CMD_PORT = 8889
const TELLO_HOST = '192.168.10.1'

const getSocket = ()=>{
    const socket = createSocket('udp4')
    socket.bind(TELLO_CMD_PORT)
    return socket
}

(async function start(){
    const socket = getSocket()
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT)
    await cmder.sendInitCommand()
    const cmdp = new ComandParser({
        onTakeoff: async () => {await cmder.sendTakeOff()},
        onLand: async () => {await cmder.sendLand()},
        onFoward: async (dist) => {await cmder.sendFoward(dist)},
        onBack: async (dist) => {await cmder.sendBack(dist)},
        onRight: async (dist) => {await cmder.sendRight(dist)},
        onLeft: async (dist) => {await cmder.sendLeft(dist)},
        oncw: async (dist) => {await cmder.sendCw(dist)},
        onccw: async (dist) => {await cmder.sendCcw(dist)},
        onFlip: async () => {await cmder.sendFlip()},
        onBattery: async () => {await cmder.getBattery()}
    })
    console.log(`iniciando ${socket}`)
    socket.on('message', (msg)=>{
        console.log(`dji tello: ${msg.toString()}`)
    })
    socket.on('error', (err)=>{
        console.log(`dji tello ERROR: ${err}`)
    })
    socket.on('listening', ()=>{
        console.log(`Socket is listening`)
    })
    console.log('Enter a command:')
    rl.on('line', (line)=>{
        if(!cmdp.parseCommand(line)){
            if(line == `exit`){
                console.log('bye')
                process.exit()
            }
            console.log('not a valid command')
        }
    })
})()