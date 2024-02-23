import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";
import { Note, NoteForm } from "@/types/note.types";

export async function POST(request: NextRequest) {
  try {
    const body: NoteForm = await request.json();
    const note = await prisma.note.create({
      data: {
        title: body.title,
        content: body.content,
      },
    });

    console.log("Note Created:", note);

    return NextResponse.json({ note }, { status: 201 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const body: Note = await request.json();
    const note = await prisma.note.findUnique({ where: { id: body.id } });

    if (!note) {
      return Response.json({ error: "Note not found" }, { status: 404 });
    }

    await prisma.note.delete({ where: { id: note.id } });

    console.log("Note Deleted:", note);

    return NextResponse.json({ message: "Note deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
