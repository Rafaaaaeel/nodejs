const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('qual a melhor marca de drone do mundo? ',(answer)=>{
    console.log(`A melhor marca de drones é ${answer}`)
        switch(answer){
            case "command":
                console.log(`Ligando o drone`)
                break;
            case "takeof":
                console.log(`decolando o drone`)
                break;
            default:
                console.log("ligue o drone")
        }
    rl.close()
})