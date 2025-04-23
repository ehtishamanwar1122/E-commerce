
import React from 'react';
import Layout from '@/components/Layout';
import ProductCard, { ProductProps } from '@/components/ProductCard';
import CategoryCard, { CategoryProps } from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Mock data
const featuredProducts: ProductProps[] = [
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
];

const newArrivals: ProductProps[] = [
  {
    id: 5,
    name: "Adjustable Laptop Stand",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
    category: "Accessories",
    rating: 4.3,
    isNew: true,
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1592890288564-76628a30a657",
    category: "Electronics",
    rating: 4.0,
    isNew: true,
  },
  {
    id: 7,
    name: "Foldable Phone Stand Holder",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90",
    category: "Accessories",
    rating: 4.1,
    isNew: true,
  },
  {
    id: 8,
    name: "10000mAh Power Bank",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5",
    category: "Electronics",
    rating: 4.6,
    isNew: true,
  },
];

const popularCategories: CategoryProps[] = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
    productCount: 1240,
  },
  {
    id: 2,
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bda9f33a8b11",
    productCount: 890,
  },
  {
    id: 3,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
    productCount: 1320,
  },
  {
    id: 4,
    name: "Beauty",
    image: "https://images.unsplash.com/photo-1571875257727-256c39da42af",
    productCount: 750,
  },
  {
    id: 5,
    name: "Sports",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
    productCount: 680,
  },
  {
    id: 6,
    name: "Toys",
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1",
    productCount: 520,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero banner */}
      <section className="bg-gradient-to-r from-brand-lightPurple to-brand-purple py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Spring Sale is Here!
            </h1>
            <p className="text-white/90 mb-6 text-lg">
              Up to 70% off on thousands of products. Limited time offer.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button size="lg" className="bg-white text-brand-purple hover:bg-white/90">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Popular Categories</h2>
            <Link to="/categories" className="text-brand-purple hover:underline text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularCategories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured deals section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Flash Deals</h2>
            <Link to="/deals" className="text-brand-purple hover:underline text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* New arrivals section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">New Arrivals</h2>
            <Link to="/new-arrivals" className="text-brand-purple hover:underline text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="product-grid">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion banner */}
      <section className="py-12 bg-brand-orange">
        <div className="container px-4 mx-auto">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Free Shipping on Orders Over $50</h2>
            <p className="mb-6 max-w-lg mx-auto">
              Enjoy free standard shipping on all orders over $50. Offer valid for a limited time only.
            </p>
            <Button size="lg" className="bg-white text-brand-orange hover:bg-white/90">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
