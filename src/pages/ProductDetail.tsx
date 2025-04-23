
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ProductProps } from '@/components/ProductCard';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock product data
const product: ProductProps = {
  id: 1,
  name: "Wireless Bluetooth Headphones",
  price: 59.99,
  originalPrice: 99.99,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  category: "Electronics",
  discountPercent: 40,
  rating: 4.5,
};

// Additional product images
const productImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1577174881658-0f30ed549adc",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90",
  "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
];

// Product specifications
const specifications = [
  { name: "Brand", value: "SoundMaster" },
  { name: "Model", value: "WH-1000XM4" },
  { name: "Color", value: "Black" },
  { name: "Connectivity", value: "Bluetooth 5.0" },
  { name: "Battery Life", value: "30 hours" },
  { name: "Noise Cancellation", value: "Active" },
  { name: "Weight", value: "254g" },
  { name: "Warranty", value: "1 Year" },
];

// Related products
const relatedProducts: ProductProps[] = [
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
    id: 6,
    name: "Wireless Charging Pad",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1592890288564-76628a30a657",
    category: "Electronics",
    rating: 4.0,
    isNew: true,
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

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment: number) => {
    const newQuantity = quantity + increment;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} (${quantity}) has been added to your cart`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm mb-4">
          <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/categories" className="text-muted-foreground hover:text-foreground">Categories</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category.toLowerCase()}`} className="text-muted-foreground hover:text-foreground">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden mb-4 border">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded border overflow-hidden cursor-pointer ${
                    selectedImage === index ? 'ring-2 ring-brand-purple' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="mb-6">
              <Link to={`/category/${product.category.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-brand-purple">
                {product.category}
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold mt-1 mb-2">{product.name}</h1>
              
              {/* Product rating */}
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(product.rating) ? "★" : (i < product.rating ? "★" : "☆")}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({Math.floor(product.rating * 10)} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center mb-3">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-3 text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                )}
                {product.discountPercent && (
                  <Badge className="ml-3 bg-brand-orange hover:bg-brand-orange">
                    -{product.discountPercent}% OFF
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground mb-6">
                Premium wireless headphones with industry-leading noise cancellation, exceptional sound quality, and long battery life. Perfect for travel, work, or everyday listening.
              </p>

              {/* Quantity selector */}
              <div className="flex items-center mb-6">
                <span className="text-sm font-medium mr-3">Quantity:</span>
                <div className="flex">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <div className="w-14 flex items-center justify-center border-y">
                    {quantity}
                  </div>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Add to cart button */}
              <Button 
                size="lg" 
                className="w-full md:w-auto"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
            </div>

            {/* Delivery info */}
            <div className="border rounded-lg p-4 mb-6 bg-secondary/30">
              <h3 className="font-medium mb-2">Delivery Information</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">✓</span>
                  <span>Free shipping on orders over $50</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">✓</span>
                  <span>Delivery within 3-5 business days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green mr-2">✓</span>
                  <span>30-day money-back guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product details tabs */}
        <div className="mb-12">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <div className="space-y-4">
                <p>
                  Experience premium sound quality with the latest Wireless Bluetooth Headphones. These headphones feature industry-leading noise cancellation technology that adapts to your environment, ensuring an immersive listening experience wherever you go.
                </p>
                <p>
                  With a battery life of up to 30 hours, you can enjoy your music all day long without worrying about recharging. The quick charge feature gives you 5 hours of playback with just 10 minutes of charging.
                </p>
                <p>
                  The comfortable over-ear design with soft ear cushions makes these headphones perfect for extended listening sessions. They're also foldable for easy storage and come with a carrying case for protection during travel.
                </p>
                <p>
                  Connect to your devices seamlessly with Bluetooth 5.0 technology, and switch between multiple devices without disconnecting. The built-in microphone allows for clear hands-free calling, and the touch controls make it easy to adjust volume, skip tracks, and answer calls.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifications" className="pt-4">
              <div className="grid md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex border-b pb-2">
                    <span className="font-medium w-1/3">{spec.name}</span>
                    <span className="w-2/3">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              <div className="space-y-4">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-xl mr-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(product.rating) ? "★" : (i < product.rating ? "★" : "☆")}
                      </span>
                    ))}
                  </div>
                  <span className="text-lg font-medium">{product.rating} out of 5</span>
                </div>
                <p className="text-muted-foreground mb-4">Based on {Math.floor(product.rating * 10)} reviews</p>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">John D.</h4>
                  <div className="flex text-yellow-400 mb-2">★★★★★</div>
                  <p className="mb-1">Excellent sound quality and noise cancellation!</p>
                  <p className="text-sm text-muted-foreground">Posted 2 weeks ago</p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Sarah M.</h4>
                  <div className="flex text-yellow-400 mb-2">★★★★☆</div>
                  <p className="mb-1">Great headphones, very comfortable for long listening sessions. Battery life is impressive.</p>
                  <p className="text-sm text-muted-foreground">Posted 1 month ago</p>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Michael P.</h4>
                  <div className="flex text-yellow-400 mb-2">★★★★★</div>
                  <p className="mb-1">Best headphones I've ever owned. The noise cancellation is fantastic for travel.</p>
                  <p className="text-sm text-muted-foreground">Posted 2 months ago</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="product-grid">
            {relatedProducts.map((product) => (
              <div key={product.id} className="overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:shadow-md group">
                {/* Product image with badges */}
                <Link to={`/product/${product.id}`}>
                  <div className="relative pt-[100%]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.discountPercent && product.discountPercent > 0 && (
                      <Badge className="absolute left-2 top-2 bg-brand-orange hover:bg-brand-orange">
                        -{product.discountPercent}%
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge className="absolute right-2 top-2 bg-brand-green hover:bg-brand-green">
                        NEW
                      </Badge>
                    )}
                  </div>
                </Link>
                
                {/* Product info */}
                <div className="p-3">
                  <div className="mb-1 text-xs text-muted-foreground">{product.category}</div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-sm font-medium leading-tight line-clamp-2 mb-1 group-hover:text-brand-purple">
                      {product.name}
                    </h3>
                  </Link>
                  
                  {/* Price info */}
                  <div className="flex items-center">
                    <span className="text-sm font-bold">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="ml-2 text-xs text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
