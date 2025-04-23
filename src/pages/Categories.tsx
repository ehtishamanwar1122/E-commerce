
import React from 'react';
import Layout from '@/components/Layout';
import CategoryCard, { CategoryProps } from '@/components/CategoryCard';

// Mock categories data
const categories: CategoryProps[] = [
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
  {
    id: 7,
    name: "Books",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    productCount: 925,
  },
  {
    id: 8,
    name: "Jewelry",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
    productCount: 350,
  },
  {
    id: 9,
    name: "Automotive",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940",
    productCount: 420,
  },
  {
    id: 10,
    name: "Garden & Outdoor",
    image: "https://images.unsplash.com/photo-1576398761789-c4dfd66582c0",
    productCount: 280,
  },
  {
    id: 11,
    name: "Computers",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    productCount: 560,
  },
  {
    id: 12,
    name: "Health",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
    productCount: 630,
  },
];

const Categories = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">All Categories</h1>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
