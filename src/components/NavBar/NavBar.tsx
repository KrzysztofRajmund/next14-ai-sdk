import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton'
import { ChatBubbleIcon } from "@radix-ui/react-icons"

export const NavBar = () => {
  return (
    <div className="p-4 shadow">
    <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
      <Link href="/" className="flex items-center gap-1">
      <span className="font-bold">Chatter</span>
        <ChatBubbleIcon className="h-[1rem] w-[1rem]" />
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggleButton />
        <Button asChild>
        <Link href="/chat">Chat</Link>
      </Button>
      </div>
    </div>
  </div>
  )
}

export default NavBar
