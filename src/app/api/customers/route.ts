import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { ServerApiVersion } from "mongodb";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_MONGODB_URI: string;
      // Add more environment variables here if needed
    }
  }
}

export async function GET(request: Request) {
  const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  await client.connect();
  try {
    const db = client.db("fotiodb");
    const doc = await db.collection("products").find().toArray();
    for (let data of doc) {
      console.log(data);
    }
    return NextResponse.json(doc);
  } finally {
    await client.close();
  }
}
