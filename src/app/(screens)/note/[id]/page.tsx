// Static routes are cached by default, whereas dynamic routes are rendered at request time, and not cached
// generateStaticParams helps us to define the dynamic paths that should be pre-rendered at build time or server-rendered and cached (first screen/segment request)
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

const getNote = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) throw new Error("Failed to get note!");
  return response.json();
};

export type Note = {
  id: string;
  title: string;
  body: string;
};

export default async function Note({ params }: { params: { id: string } }) {
  const note: Note = await getNote(params.id);

  return (
    <section className="ml-10 h-screen p-4">
      <h1 className="mb-4 text-4xl font-extrabold tracking-normal lg:text-6xl">
        Your specific note: {note.id}
      </h1>
      <h4 className="font-roboto shadow-sm">{note.title}</h4>
      <span>{note.body}</span>
    </section>
  );
}
