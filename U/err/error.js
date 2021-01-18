

function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('OOOOH NOOOOOO')
}

function init(){

    try {
        execute()
    } catch (error) {
        console.log(`We have a problem ${error.message}`)
    }

}

init()
console.log('after error')