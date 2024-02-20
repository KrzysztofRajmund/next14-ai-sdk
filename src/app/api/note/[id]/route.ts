import { NextResponse, NextRequest } from "next/server";
import notesData from "../../notes.json";

type Context = { params: { [key: string]: string } };

export async function GET(request: NextRequest, { params }: Context) {
  const note = notesData.notes.filter(
    (note) => note.id.toString() === params.id,
  );

  return NextResponse.json({ note }, { status: 200 });
}
