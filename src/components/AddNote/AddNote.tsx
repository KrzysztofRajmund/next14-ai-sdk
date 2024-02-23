"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NoteForm } from "@/types/note.types";

const formSchema = yup.object().shape({
  title: yup.string().required("Title is required").min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: yup.string().required("Note field is required").min(3, {
    message: "Note content must be at least 3 characters.",
  }),
});

const AddNote = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();
  const form = useForm<NoteForm>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values: NoteForm) => {
    try {
      await fetch("/api/notes", {
        method: "POST",
        body: JSON.stringify(values),
      });

      router.refresh();
      setDialogOpen(false);
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setDialogOpen(true)}>Add note</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="mb-6 text-center text-2xl opacity-85">
            ADD NOTE
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note content</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-24"
                      placeholder="Type note content here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="min-h-14 w-full">
              Save
            </Button>
            <Button
              type="reset"
              variant="outline"
              className="min-h-12 w-full"
              onClick={() => form.reset()}
            >
              Clear form
            </Button>
          </form>
        </Form>
        <DialogFooter>
          <small>Save your custom note!</small>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNote;
