"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}
const DeleteNote = ({ id }: Props) => {
  const router = useRouter();

  const deleteNote = async (noteId: string) => {
    try {
      await fetch("/api/notes", {
        method: "DELETE",
        body: JSON.stringify({ id: noteId }),
      });
      router.refresh();
      router.back();
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
