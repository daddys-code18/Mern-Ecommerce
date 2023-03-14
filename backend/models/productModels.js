const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please Enter Product Name"] },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "please Enter  Product Price"],
    maxLength: [8, "Price cannot be exceed 8 character"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please Enter product category"],
  },
  stock: {
    type: Number,
    required: [true, "please Product stock"],
    maxLength: [4, "stock cannot exceed 4 charater"],
    default: 1,
  },
  numofReviews: { type: Number, default: 0 },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,

        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
