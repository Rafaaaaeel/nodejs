function sum(x){
    return new Promise ((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Please try again')
        } 
        setTimeout(()=>{
                resolve(x + x);
        },3000);
    })
}

//callback function
async function main(){
    try{
        const result = await sum('2');
        console.log(`Result ${result}`) 
    } catch (error){
        console.log(`Error: ${error}`,process.env.USERNAME)
        
    }
}

main()

