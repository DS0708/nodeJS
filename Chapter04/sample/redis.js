const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');


/* if redis version over 4 */
async function run(){
    await client.connect()
}

run();

async function getVal(key){
    const item = await client.get(key);
    console.log(item);
}

getVal("myKey");