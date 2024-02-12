export default function Home() {
  return (
    <main className="flex h-screen flex-row items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-4xl font-extrabold tracking-normal lg:text-6xl">
          Note Chat App
        </span>
        <p className="pt-2">Your personal note assistant!</p>
      </div>
    </main>
  );
}