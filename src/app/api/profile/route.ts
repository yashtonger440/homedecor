import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function PUT(req: Request) {
    try {
        await connectDB();

        const { email, newEmail, name, phone, dob } = await req.json();

        const updateData: any = { name, phone, dob };
        if (newEmail && newEmail !== email) {
            // Check karo naya email already exist toh nahi karta
            const existing = await User.findOne({ email: newEmail });
            if (existing) {
                return NextResponse.json(
                    { success: false, message: "Email already in use" },
                    { status: 400 }
                );
            }
            updateData.email = newEmail;
        }

        const user = await User.findOneAndUpdate(
            { email },
            updateData,
            { new: true }
        ).select("-password");

        if (!email) {
            return NextResponse.json(
                { success: false, message: "Email is required" },
                { status: 400 }
            );
        }


        if (!user) {
            return NextResponse.json(
                { success: false, message: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, user });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Failed to update profile" },
            { status: 500 }
        );
    }
}