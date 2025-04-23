
import React from 'react';
import Layout from '@/components/Layout';
import ProductCard, { ProductProps } from '@/components/ProductCard';

// Mock deals data
const deals: ProductProps[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
    discountPercent: 40,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch with Heart Rate Monitor",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Wearables",
    discountPercent: 30,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 39.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    category: "Electronics",
    discountPercent: 43,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Ultra HD 4K Action Camera",
    price: 129.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    category: "Electronics",
    discountPercent: 35,
    rating: 4.4,
  },
  {
    id: 10,
    name: "Mechanical Gaming Keyboard",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1595225476071-63e578e6c283",
    category: "Gaming",
    discountPercent: 20,
    rating: 4.7,
  },
  {
    id: 12,
    name: "Noise Cancelling Earbuds",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    category: "Audio",
    discountPercent: 22,
    rating: 4.5,
  },
  {
    id: 14,
    name: "Smart Home Security Camera",
    price: 49.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1558002038-1055e2e94e18",
    category: "Smart Home",
    discountPercent: 38,
    rating: 4.3,
  },
  {
    id: 15,
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    category: "Kitchen",
    discountPercent: 33,
    rating: 4.8,
  }
];

const Deals = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Hot Deals</h1>
        
        {/* Deals banner */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-lightOrange mb-8 rounded-lg p-6 text-white">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Flash Sale! Up to 50% off</h2>
            <p className="mb-2">Limited time offers on top products</p>
            <p className="text-sm">Deals expire soon. Don't miss out!</p>
          </div>
        </div>
        
        {/* Deals grid */}
        <div className="product-grid">
          {deals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Deals;
