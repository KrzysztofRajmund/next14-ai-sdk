import Link from "next/link";

type Note = {
  id: string;
  title: string;
};

const getNotesData = async () => {
  // THIS IS ONLY FOR TESTING PURPOSE!
  // Route handlers should not be used with server components in that case.
  // Both files are already server one. Here we should just add endpoint from external sources:
  // for instance: https://jsonplaceholder.typicode.com/posts
  const response = await fetch("http://localhost:3000/api/notes", {
    // set to dynamic page/segment
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Failed to get notes!");
  const { notes }: { notes: Note[] } = await response.json();
  return notes;
};

export default async function Notes() {
  const notes: Note[] = await getNotesData();

  return (
    <section className="ml-10 mr-2 h-screen p-4">
      <h1 className="mb-4 text-4xl font-extrabold tracking-normal lg:text-6xl">
        Your recent notes:
      </h1>
      <ul>
        {notes?.map((note) => (
          <li key={note.id} className="my-6 outline-dashed outline-offset-8">
            <Link
              className="font-roboto hover:opacity-35"
              href={`/note/${note.id}`}
            >
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
