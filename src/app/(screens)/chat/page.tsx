"use client";

import { useChat } from "ai/react";
import { AvatarIcon, InfoCircledIcon } from "@radix-ui/react-icons";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <section className="mx-auto my-8 flex h-screen w-full max-w-2xl flex-col">
      <h1 className="mb-4 text-3xl font-extrabold tracking-normal">
        Chatter Box
      </h1>
      {messages.map((m) => {
        const user = m.role === "user";

        return (
          <div key={m.id} className="whitespace-pre-wrap p-2 shadow-sm">
            {user ? (
              <>
                <div className="flex gap-3 pb-3">
                  <AvatarIcon
                    color="#DEADE3"
                    className="h-[1.5rem] w-[1.5rem]"
                  />
                  <span className="font-bold">You</span>
                </div>
                <span className="italic">{m.content}</span>
              </>
            ) : (
              <>
                <div className="flex gap-3 pb-3">
                  <InfoCircledIcon
                    color="#53B9AB"
                    className="h-[1.5rem] w-[1.5rem]"
                  />
                  <span className="font-bold">AI</span>
                </div>
                <span>{m.content}</span>
              </>
            )}
          </div>
        );
      })}

      <form onSubmit={handleSubmit}>
        <input
          id="chat"
          className="fixed bottom-0 mb-8 w-full max-w-2xl rounded border border-gray-500 p-2 shadow-xl focus:outline-slate-950 focus:dark:outline-slate-200"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
}
