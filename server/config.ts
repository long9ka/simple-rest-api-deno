import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config({ safe: true });

export const PORT = env.PORT || 8000;
export const DB = env.DB_URI || "mongodb://localhost:27017";