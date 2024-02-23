export type Note = {
  id: string;
  title: string;
  content: string;
};

export type NoteForm = Omit<Note, "id">;
