const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!response.ok) throw new Error("Failed to get posts!");
  return response.json();
};

type Posts = {
  id: string;
  title: string;
};

export default async function Posts() {
  const posts: Posts[] = await getData();

  return (
    <section className="h-screen p-4 ml-10">
      <h1 className="mb-4 text-4xl font-extrabold tracking-normal lg:text-6xl">
        Your recent posts:
      </h1>
      <div>{posts?.map((post) => <h4 key={post.id} className="shadow-sm">{post.title}</h4>)}</div>
    </section>
  );
}
