import { LogIn } from "@/components/login/login";
import { Card } from "@/components/ui/card";
import { userSession } from "@/features/auth/helpers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/icons"

export const dynamic = "force-dynamic";

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default async function Home() {
  const user = await userSession();
  if (user) {
    redirect("/chat");
  }
  return (
    <div className={`${montserrat.className} relative flex flex-col grow w-full h-screen md:min-h-screen m-0 p-0 items-stretch justify-start`}>
      <main id="main" className={`flex flex-col w-full h-full grow`}>
        <div className="container relative hidden h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col items-center justify-center bg-foreground p-10 text-white dark:border-r lg:flex">
            <div className="flex flex-col items-center text-lg font-medium">
              <Icons.prodamia />
              <h2 className={`font-monoid-bold text-4xl text-secondary`}>{'<'}iaprodam{'/>'}</h2>
            </div>
          </div>
          <div className="lg:p-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Entrar
                </h2>
                <p className="text-sm text-muted-foreground">
                  Entre com sua conta corporativa
                </p>
              </div>
              <div className={"grid gap-6"}>
                <LogIn />
              </div>
              <p className="px-8 text-center text-sm text-muted-foreground">
                Clicando em entrar com sua conta você concorda com nossos{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Termos de serviço
                </Link>{" "}
                e{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Políticas de privacidade
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}
