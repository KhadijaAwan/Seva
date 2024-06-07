import { connectionDb } from '@/lib/db';
import { UserData } from '@/lib/model/user';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionDb);
    const result = await UserData.find({}).sort({ _id: -1 });
    return NextResponse.json({ result, success: true, status: 200 });
}

export async function POST(request: NextRequest) {
    await mongoose.connect(connectionDb);
    const { email, password } = await request.json();

    if (!email || !password)
        return NextResponse.json({ message: 'email and password are required', success: false, status: 400 });

    const result = await UserData.findOne({ email });
    if (!result)
        return NextResponse.json({ message: 'Invalid Credentials', success: false, status: 400 });

    const isPasswordValid = await bcrypt.compare(password, result.password);
    if (isPasswordValid)
        return NextResponse.json({ result, message: 'Login Successfully', success: true, status: 200 });
    else
        return NextResponse.json({ message: 'Wrong Password!', success: false, status: 400 });
}