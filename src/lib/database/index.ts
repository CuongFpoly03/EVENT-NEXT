import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
let cached = (global as any).mongosee || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!MONGODB_URI) throw new Error("No MongoDB URI Provided");

  cached.promise =
    cached.promide ||
    mongoose.connect(MONGODB_URI, {
      dbName: "events",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
}
