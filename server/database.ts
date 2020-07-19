import { MongoClient } from "https://deno.land/x/mongo@v0.9.1/mod.ts";
import { DB } from "./config.ts";

const client = new MongoClient();
client.connectWithUri(DB);

const db = client.database("simple_app");

export default db;