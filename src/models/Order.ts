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

    // NEW FIELDS
    paymentMethod: {
        type: String,
        enum: ["COD", "Online"],
        default: "COD",
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending",
    },

    paymentId: {
        type: String,
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