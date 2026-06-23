import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: Request) {

  try {

    await connectDB();

    const body = await req.json();

    const {
      name,
      email,
      password,
      phone
    } = body;

    const existingUser = await User.findOne({
      email
    });
    if (existingUser) {

      return NextResponse.json({
        success: false,
        message: "Email already registered"
      });
    }
    const otp =
      Math.floor(
        100000 +
        Math.random() * 900000
      ).toString();

    const emailResponse = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: email,

      subject: "Verify your NishMee account",

      html:
        `
  <h2>Your OTP is</h2>
  <h1>${otp}</h1>
  <p>This OTP expires in 10 minutes</p>
  `
    });
    console.log("RESEND RESPONSE:", emailResponse);

    await User.create({

      name,
      email,
      phone,
      password,

      otp,

      otpExpiry:
        new Date(
          Date.now() + 10 * 60 * 1000
        ),

      isVerified: false,
    });

    return NextResponse.json({
      success: true,
      message: "OTP sent"
    });
  }
  catch (error) {

    return NextResponse.json({

      success: false,
      message: "OTP sending failed"

    },
      {
        status: 500
      })
  }
}