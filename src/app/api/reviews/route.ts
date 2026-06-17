import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Review from "@/models/Review";

// GET reviews by productId
export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    const reviews = await Review.find({ productId }).sort({ createdAt: -1 });

    const avgRating =
      reviews.length > 0
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        : 0;

    return NextResponse.json({ success: true, reviews, avgRating });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}

// POST new review
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { productId, name, email, rating, review, photos } = body;

    if (!productId || !name || !email || !rating || !review) {
      return NextResponse.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    const newReview = await Review.create({
      productId,
      name,
      email,
      rating,
      review,
      photos: photos || [],
    });

    return NextResponse.json({ success: true, review: newReview });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}