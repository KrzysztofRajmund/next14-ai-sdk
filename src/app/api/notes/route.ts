import { NextResponse } from "next/server";
import notesData from "../notes.json";

export async function GET() {
  return NextResponse.json({ notes: notesData.notes }, { status: 200 });
}
