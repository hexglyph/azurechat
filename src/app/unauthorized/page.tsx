import { Card } from "@/components/ui/card";

export default async function Home() {
  return (
    <Card className="h-full items-top flex justify-left flex-1 p-10">
      <div className="flex-col">
        <h1 className="text-xl font-semibold text-primary">Você não está autorizado</h1>
        <p className="mt-5">Está página é apenas para administradores.</p>
      </div>
    </Card>
  )
}
