import NavBar from "@/components/NavBar/NavBar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Your notes",
  description: "Personal assistant",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <section className="mx-10 my-5 h-screen">{children}</section>
    </>
  );
}
