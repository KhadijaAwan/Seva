import { connectionDb } from '@/lib/db';
import { UserData } from '@/lib/model/user';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    await mongoose.connect(connectionDb);
    const { email, password } = await request.json();
    const existingUser = await UserData.findOne({ email });
    if (existingUser) {
        return NextResponse.json({ message: 'Email is already taken', status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserData.create({ email, password: hashedPassword });
    return NextResponse.json({ message: 'User created', result: user, status: 200 });
}