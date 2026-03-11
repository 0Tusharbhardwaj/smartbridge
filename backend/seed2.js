const mongoose = require('mongoose');
const Product = require('./src/models/Product.js');

const sampleProducts = [
  {
    name: 'Premium Wireless Headphones',
    price: 299.99,
    description: 'High-quality noise-canceling wireless headphones with 30-hour battery life.',
    category: 'Electronics',
    stock: 50,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop'],
    ratings: 4.5,
    numReviews: 12
  },
  {
    name: 'Smart Watch Series X',
    price: 199.50,
    description: 'Advanced smartwatch with health tracking and seamless connectivity.',
    category: 'Electronics',
    stock: 30,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop'],
    ratings: 4.8,
    numReviews: 8
  },
  {
    name: 'Classic Polarized Sunglasses',
    price: 45.00,
    description: 'Stylish sunglasses with UV400 protection and durable frame.',
    category: 'Accessories',
    stock: 100,
    images: ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop'],
    ratings: 4.2,
    numReviews: 45
  },
  {
    name: 'Running Shoes Pro',
    price: 129.99,
    description: 'Lightweight performance running shoes with breathable mesh.',
    category: 'Footwear',
    stock: 20,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop'],
    ratings: 4.9,
    numReviews: 67
  }
];

async function seedDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/shopez');
    console.log('Connected to MongoDB');
    await Product.deleteMany({});
    console.log('Cleared existing products');
    await Product.insertMany(sampleProducts);
    console.log('Successfully inserted sample products');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
}

seedDB();
