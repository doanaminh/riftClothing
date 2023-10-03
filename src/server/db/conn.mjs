import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

//Connect To Database
let conn;
try {
  conn = await client.connect();
  console.log("Connected to MongoDB!");
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
