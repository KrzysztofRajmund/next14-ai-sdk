"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}
const DeleteNote = ({ id }: Props) => {
  const { refresh, back } = useRouter();

  const deleteNote = async (noteId: string) => {
    try {
      await fetch("/api/notes", {
        method: "DELETE",
        body: JSON.stringify({ id: noteId }),
      });
      // In this case I need to use refresh as revalidate("/notes") in ROute Handler (route.ts) will not solve the problem when we navigate back.
      // The reason is that navigating with browser's "forward" and "back" uses its own cache
      refresh();
      back();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Button variant="destructive" onClick={() => deleteNote(id)}>
      Remove
    </Button>
  );
};

export default DeleteNote;
