import { NextResponse } from "next/server";
import path from "path";
import { writeFile,readdir } from "fs/promises";

export async function GET() {
  return NextResponse.json({message:"Success from get",status:200},{status:200})
}

export async function POST (req: any, res: any) {
  return NextResponse.json({message:"Success from post",status:200},{status:200})
}
