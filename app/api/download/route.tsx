import { NextResponse } from "next/server";
import path from "path";
import { writeFile,readdir } from "fs/promises";

export async function POST (req: any, res: any) => {
  return NextResponse.json({message:"Success",status:200},{status:200})
}
