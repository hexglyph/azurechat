"use client";

import React, { use, useEffect, useState } from 'react'
import { Icons } from "@/components/icons"
import Image from "next/image"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, UserCircle } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { Textarea } from "@/components/ui/textarea";
import { useGlobalMessageContext } from './global-message/global-message-context';

const UserProfile = () => {
  const { data: session } = useSession() as any
  const [instructions, setInstructions] = useState('')

  const { showError, showSuccess } = useGlobalMessageContext()

  useEffect(() => {
    if (session) {
      setInstructions(session.user.instructions)
    }
  }, [session])

  const handleApply = async () => {
    const response = await fetch('/api/instructions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ instructions }),
    });

    if (!response.ok) {
      console.error('Falha ao enviar instruções');
    }
    if (session) {
      localStorage.setItem('iaprodam-chat-instructions', session.user.instructions)
    }

    showSuccess({
      title: "Instruções enviadas",
      description: `Suas instruções foram enviadas com sucesso!`,
    })

  }
  useEffect(() => {
    const savedInstructions = localStorage.getItem('iaprodam-chat-instructions')
    if (savedInstructions) {
      setInstructions(savedInstructions)
    }
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex flex-col items-stretch">
          <Button
            className="rounded-full w-[40px] h-[40px] p-1 text-primary relative gap-2 justify-center"
            variant={"outline"}
          >
            {session?.user?.image ? (
              <Avatar className="">
                <AvatarImage
                  src={session?.user?.image!}
                  alt={session?.user?.name!}
                />
              </Avatar>
            ) : (
              <UserCircle></UserCircle>
            )}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1 gap-1">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.isAdmin ? "Admin" : ""}
            </p>
            <Card className="flex gap-2 flex-col mt-2">
              <CardHeader className="">
                <CardTitle className="text-2xl flex items-center justify-center">
                  <Textarea
                    className="w-full"
                    placeholder="Escreva suas instruções"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="grid">
                <Button type="button" onClick={handleApply}>
                  Aplicar
                </Button>
              </CardContent>
            </Card>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { UserProfile };
