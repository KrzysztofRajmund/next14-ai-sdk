import AddNote from "@/components/AddNote/AddNote";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Your notes",
  description: "Personal assistant",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AddNote />
      {children}
    </>
  );
}
