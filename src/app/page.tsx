import ThemeToggleButton from "@/components/ThemeToggleButton/ThemeToggleButton";
import { Button } from "@/components/ui/button"
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6">
      <div className="fixed top-5 right-10 p-2">
        <ThemeToggleButton />
      </div>
      <div className="fixed top-5 left-5 p-2">
        <div className="flex gap-1">
          <span className="font-bold">Chatter</span>
          <ChatBubbleIcon className="h-[1rem] w-[1rem]" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-extrabold tracking-normal lg:text-6xl">
          Note Chat App
        </span>
        <p className="pt-2">Your personal note assistant!</p>
      </div>
      <div className="flex flex-row gap-2">
        <Button asChild>
          <Link href="/chat">Chat</Link>
        </Button>
        <Button variant='outline' asChild>
          <Link href="/posts">Posts</Link>
        </Button>
      </div>
    </main>
  );
}