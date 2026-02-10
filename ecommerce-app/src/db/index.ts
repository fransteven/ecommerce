import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env.local") });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql);
