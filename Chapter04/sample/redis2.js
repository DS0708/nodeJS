const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');

async function run() {
    await client.connect();
}

async function getVal(key){
    const item = await client.lRange(key, 0, -1);
    console.log(item);
}

run();

client.rPush('myList', '0');
client.rPush('myList', '1');
client.rPush('myList', '2');


getVal("myList");