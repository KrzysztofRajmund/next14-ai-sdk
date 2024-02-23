// Static routes are cached by default, whereas dynamic routes are rendered at request time, and not cached
import NoteCard from "@/components/NoteCard/NoteCard";
import prisma from "@/lib/db/prisma";
import { Note } from "@/types/note.types";

type Params = {
  params: { id: string };
};
// EXAMPLE OF "generateStaticParams" USAGE:
// // generateStaticParams helps us to define the dynamic paths that should be pre-rendered at build time or server-rendered and cached (first screen/segment request)
// export async function generateStaticParams() {
//   return [{ id: "1" }, { id: "2" }, { id: "3" }];
// }

// export type Note = {
//   id: string;
//   title: string;
//   body: string;
// };

// const getNoteData = async (id: string) => {
//   // THIS IS ONLY FOR TESTING PURPOSE!
//   // Route handlers should not be used with server components in that case.
//   // Both files are already server one. Here we should just add endpoint from external sources:
//   // for instance: https://jsonplaceholder.typicode.com/posts/${id}
//   const response = await fetch(`http://localhost:3000/api/note/${id}`);

//   if (!response.ok) throw new Error(`Failed to get note with id: ${id}.`);
//   const { note } = await response.json();
//   return note[0];
// };

export default async function Note({ params }: Params) {
  const notes: Note[] = await prisma.note.findMany();
  const filteredNote = notes.filter((note) => note.id === params.id)[0];

  return <NoteCard withRemove={true} {...filteredNote} />;
}
