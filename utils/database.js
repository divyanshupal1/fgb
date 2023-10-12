import { MongoClient,ObjectId } from "mongodb";
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
let isConnected = false;

export var database;

export async function connectToDB() {
    try {

      if (!isConnected) {
        console.log("connecting to databse...");
        client.connect();
        isConnected = true;
        database = client.db("fiberguard1");
        console.log("connection successfull !");
      }
      else{
        database = client.db("fiberguard1");
        console.log("using previous connection");
      }

    }
    catch (err) {
      console.log("error connecting to database: ", err);
  }
}