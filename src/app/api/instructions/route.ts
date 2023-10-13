'use server'

import { userHashedId, userSession } from "@/features/auth/helpers"
import { NextRequest, NextResponse } from 'next/server'
import { updateUserInstructions } from '@/features/user-service'

export async function POST (req: any): Promise<void> {
    const session = await userSession()
    const body = await req.json()

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: 'Não autorizado' }),
            {
                status: 401,
                headers: {
                'Content-Type': 'application/json'
                }
            }
            )
    } else {
        const response = await updateUserInstructions(session.id, body.instructions)
        return new NextResponse(
            JSON.stringify(response),
            {
                status: 200,
                headers: {
                'Content-Type': 'application/json'
                }
            }
            )
    }
}