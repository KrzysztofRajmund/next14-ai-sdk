const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!response.ok) throw new Error("Failed to get posts!");
  return response.json();
};

type Notes = {
  id: string;
  title: string;
};

export default async function Notes() {
  const notes: Notes[] = await getData();

  return (
    <section className="h-screen p-4 ml-10">
      <h1 className="mb-4 text-4xl font-extrabold tracking-normal lg:text-6xl">
        Your recent notes:
      </h1>
      <div>{notes?.map((note) => <h4 key={note.id} className="font-roboto shadow-sm">{note.title}</h4>)}</div>
    </section>
  );
}
