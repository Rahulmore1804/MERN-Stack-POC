const pk = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a<0 || b<0){
                return reject("num should non neg")
            }
            resolve(a+b)
        },3000)
    })
    }
    
    module.exports={
        pk
    }
    