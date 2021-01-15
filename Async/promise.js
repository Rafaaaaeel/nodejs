function sum(x){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
                resolve(x + 5000);
        },3000);
    })
}

//callback function

sum(200).then((resultado)=>{
    console.log(resultado);
})

