const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    console.log('Connecting to MongoDB ...');
    await client.connect();
    console.log('connected successfully');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log('closed');
  }
}
run().catch(console.dir);