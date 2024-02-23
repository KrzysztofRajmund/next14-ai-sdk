import NoteCard from "@/components/NoteCard/NoteCard";
import Link from "next/link";
import prisma from "@/lib/db/prisma";
import { Note } from "@/types/note.types";

export default async function Notes() {
  const notes: Note[] = await prisma.note.findMany();

  return (
    <>
      <ul>
        {notes?.map((note) => (
          <li key={note.id} className="my-6">
            <Link
              className="font-roboto hover:opacity-35"
              href={`/note/${note.id}`}
            >
              <NoteCard {...note} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
