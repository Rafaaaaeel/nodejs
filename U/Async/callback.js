function sum(x, callback){
    return setTimeout(()=>{
        return callback(null, x + 5000);
    },3000)
}

//callback function

function resolveSoma(err, resultado){
    if(err) throw err;
    console.log(resultado);
}

sum(200, resolveSoma)

