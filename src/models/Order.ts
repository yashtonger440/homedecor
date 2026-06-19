import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    orderId: {
        type: String,
        required: true,
    },

    userEmail: {
        type: String,
        required: true,
    },

    status: {
      type: String,
      default: "Processing",
    },

    // razorpay payment fields
    paymentMethod: {
        type: String,
        enum: ["COD", "Online"],
        default: "COD",
    },

    paymentStatus: {
        type: String,
        enum: ["Pending", "Paid", "Failed"],
        default: "Pending",
    },

    paymentId: {
        type: String,
    },

    phone: {
      type: String,
      default: "",
    },

    shippingAddress: {
        type: String,
    },

    subtotal: Number,
    shipping: Number,
    discount: Number,
    totalAmount: {
        type: Number,
        required: true,
    },

    estimatedDelivery: String,

    items: [
      {
        id: String,
        title: String,
        image: String,
        price: Number,
        quantity: Number,
        totalPrice: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Order ||
  mongoose.model("Order", OrderSchema);