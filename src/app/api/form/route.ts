import { METHODS } from "http";
import { NextRequest, NextResponse } from "next/server";

let users = []

export async function POST(req: NextRequest){
    try{
        let body = await req.json() 
        const { name, email } = body
        if(!email || !name){
            return NextResponse.json({message:'email and name is required'}, {status: 400})
        }
        const newUser = {
            id: Date.now(),
            email,
            name
        }
        users.push(newUser)
        return NextResponse.json({message: 'User create successful', data:newUser}, {status: 201})
    }catch(error){
        return NextResponse.json({ message: "something want wrong" }, { status: 500 })
    }
}

