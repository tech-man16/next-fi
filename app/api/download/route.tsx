
import { readFileSync, readdirSync } from 'fs';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req:NextRequest) {
  return NextResponse.json({message:"Successfull"}) ;
  /*
  const url = new URL(req.url)
  const filename = url.searchParams.get("file") ;
  const file = readFileSync(`./next-fi/app/api/assets/${filename}`);
  const headers = new Headers();
  headers.append('Content-Disposition', `attachment; filename="${filename}"`);
  headers.append('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  headers.append('Content-Length', `${file.length}`)
  headers.append('Content-Transfer-Encoding', 'binary')

  return new Response(file, {
    headers,
  });
  */
}

export async function POST(req: any, res: any) {
  const file = readdirSync(process.cwd() + '/next-fi/app/api/assets')

  return NextResponse.json({ message: file });
}
