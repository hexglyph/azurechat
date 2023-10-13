import NextAuth, { DefaultSession } from "next-auth"

// https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth" {

    interface Session {
        user: {
            id: string
            isAdmin: string
            instructions?: string
        } & DefaultSession["user"]
    }

    interface User {
        id: string
        isAdmin: string
        instructions?: string
    }

}
