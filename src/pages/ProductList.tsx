
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ProductCard, { ProductProps } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useParams } from 'react-router-dom';

// Mock data
const allProducts: ProductProps[] = [
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
  {
    id: 9,
    name: "Wireless Ergonomic Mouse",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
    category: "Accessories",
    rating: 4.3,
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
    id: 11,
    name: "Fitness Tracker Watch",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288",
    category: "Wearables",
    rating: 4.2,
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
];

// Filter and sort options
const categories = ["All", "Electronics", "Wearables", "Accessories", "Audio", "Gaming"];
const priceRanges = [
  { min: 0, max: 25 },
  { min: 25, max: 50 },
  { min: 50, max: 100 },
  { min: 100, max: 200 },
];

const ProductList = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState("featured");
  const [onlyDiscount, setOnlyDiscount] = useState(false);

  // Apply filters
  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (onlyDiscount && !product.discountPercent) return false;
    return true;
  });

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "discount":
        const discountA = a.discountPercent || 0;
        const discountB = b.discountPercent || 0;
        return discountB - discountA;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <div className="container px-4 mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            {categoryId ? `Category: ${selectedCategory}` : "All Products"}
          </h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              Filter
            </Button>
            <div className="hidden md:block">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="discount">Biggest Discount</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Filter sidebar */}
          <div className={`md:block ${filterOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white p-4 rounded-lg border mb-4">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategory === category}
                      onCheckedChange={() => setSelectedCategory(category)}
                    />
                    <Label 
                      htmlFor={`category-${category}`}
                      className="ml-2 text-sm cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border mb-4">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="px-2">
                <Slider
                  defaultValue={priceRange}
                  min={0}
                  max={200}
                  step={1}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border mb-4">
              <h3 className="font-medium mb-3">Filter</h3>
              <div className="flex items-center">
                <Checkbox
                  id="discount-only"
                  checked={onlyDiscount}
                  onCheckedChange={(checked) => setOnlyDiscount(checked as boolean)}
                />
                <Label 
                  htmlFor="discount-only"
                  className="ml-2 text-sm cursor-pointer"
                >
                  On Sale
                </Label>
              </div>
            </div>

            <div className="md:hidden">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="discount">Biggest Discount</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product grid */}
          <div className="md:col-span-3">
            {sortedProducts.length > 0 ? (
              <div className="product-grid">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
                <Button onClick={() => {
                  setSelectedCategory("All");
                  setPriceRange([0, 200]);
                  setOnlyDiscount(false);
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductList;
