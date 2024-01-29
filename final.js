const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://noah:julWAvKT742ZCPXR@mydb.exhfxs3.mongodb.net/"
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected");
        const db = client.db("workshop")
        const collec = db.collection("student")
        
        
    } finally {
        await client.close();
    }
}

run().catch(console.dir);