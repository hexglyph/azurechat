"use client";
import { AI_NAME } from "@/features/theme/customise";
import { signIn } from "next-auth/react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { useState } from "react"

import { Icons } from "@/components/icons"
import Image from "next/image"

export const LogIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <Card className="flex gap-2 flex-col">
      <CardHeader className="gap-2">
        <CardTitle className="text-2xl flex items-center justify-center gap-2">
          {
            /*
            <Image
            width={96}
            height={64}
            alt={"Prodam"}
            src={"/prodam.png"}
            sizes="(max-width: 100%) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
            */
          }
          <Image
            width={96}
            height={64}
            alt={"Prodam"}
            src={"/brasao_prefeitura.png"}
            sizes="(max-width: 100%) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button type="button" disabled={isLoading} onClick={() => signIn("azure-ad")}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.microsoft className="mr-2 h-4 w-4" />
          )}{" "}
          Microsoft 365
        </Button>
      </CardContent>
    </Card>
  );
};
