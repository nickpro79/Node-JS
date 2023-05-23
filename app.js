const{createReadStream} = require('fs');

const stream = createReadStream('./cont/big.txt',{highWaterMark:90000,encoding:'utf8'});
stream.on('data',(result)=>{
    console.log(result)
})
