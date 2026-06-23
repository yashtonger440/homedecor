import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
    try {
        await connectDB();
        const {
            email,
            otp,
            password,
            name,
            phone

        } = await req.json();
        const user =
            await User.findOne({
                email
            });
        if (!user) {

            return NextResponse.json({
                success: false,
                message: "User not found"
            })
        }
        if (user.otp !== otp) {

            return NextResponse.json({
                success: false,
                message: "Invalid OTP"
            })
        }
        if (
            new Date() > user.otpExpiry
        ) {

            return NextResponse.json({
                success: false,
                message: "OTP expired"
            })
        }
        user.name = name;
        user.phone = phone;
        user.password = password;
        user.isVerified = true;
        user.otp = "";
        user.otpExpiry = null;

        await user.save();
        return NextResponse.json({
            success: true,
            message: "Account created"
        })
    }
    catch (error) {
        return NextResponse.json({
            success: false
        },
            {
                status: 500
            })
    }
}