import Link from "next/link";

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Failed to get notes!");
  return response.json();
};

type Note = {
  id: string;
  title: string;
};

export default async function Notes() {
  const notes: Note[] = await getData();

  return (
    <section className="ml-10 mr-2 h-screen p-4">
      <h1 className="mb-4 text-4xl font-extrabold tracking-normal lg:text-6xl">
        Your recent notes:
      </h1>
      <ul>
        {notes?.map((note) => (
          <li key={note.id} className="my-6 outline-dashed outline-offset-8">
            <Link className="font-roboto hover:opacity-35" href={`/note/${note.id}`}>
              {note.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
