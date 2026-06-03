import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Order from "@/models/Order";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const orderData = await req.json();

    const order = await Order.create(orderData);

    await User.findOneAndUpdate(
      {
        email: orderData.userEmail,
      },
      {
        $inc: {
          orders: 1,
          spent: orderData.totalAmount,
        },
      }
    );

    return NextResponse.json({
        success: true,
        order,
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: String(error),
    });
  }
}