"use server";

import mime from "mime";
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import _ from "lodash";

import { MongoClient } from "mongodb";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_MONGODB_URI: string;
      // Add more environment variables here if needed
    }
  }
}

export async function POST(req: NextRequest) {
  const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI);
  client.connect();

  const formData = await req.formData();

  const category = (formData.get("category") as string) || null;
  const productName = (formData.get("productName") as string) || null;
  const caracteristique = (formData.get("caracteristique") as string) || null;
  const description = (formData.get("description") as string) || null;
  const price = (formData.get("price") as string) || null;
  const reduction = (formData.get("reduction") as string) || null;
  const devise = (formData.get("devise") as string) || null;
  const files = (formData.get("files") as File) || null;

  const buffer = Buffer.from(await files.arrayBuffer());
  const relativeUploadDir = `uploads/${new Date(Date.now())
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-")}`;

  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  try {
    await stat(uploadDir);
  } catch (e: any) {
    if (e.code === "ENOENT") {
      // This is for checking the directory is exist (ENOENT : Error No Entry)
      await mkdir(uploadDir, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }
  }

  try {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const filename = `${files.name.replace(
      /\.[^/.]+$/,
      ""
    )}-${uniqueSuffix}.${mime.getExtension(files.type)}`;
    await writeFile(`${uploadDir}/${filename}`, buffer);
    const fileUrl = `${relativeUploadDir}/${filename}`;

    // Save to database
    try {
      // Connect the client to the server	(optional starting in v4.7)
      const db = client.db("fotiodb");
      // Send a ping to confirm a successful connection

      const query = {
        category: category,
        productName: productName,
        imagePath: fileUrl,
        caracteristique: caracteristique,
        description: description,
        price: price,
        reduction: reduction,
        devise: devise,
      };
      const response = db.collection("products").insertOne(query);

      // if ((await db.collection("products").countDocuments(query)) === 0) {
      //   console.log("No document found!");
      //   return Response.json("No document found!");
      // }

      console.log(response);
      return Response.json("Inserted successfully!");
    } finally {
      await client.close();
    }
  } catch (e) {
    console.error("Error while trying to upload a file\n", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
