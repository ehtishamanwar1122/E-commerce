
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { toast } from './ui/use-toast';

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  discountPercent?: number;
  rating: number;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  discountPercent,
  rating,
  isNew
}) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart`,
    });
  };

  return (
    <Link to={`/product/${id}`} className="group">
      <div className="overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:shadow-md">
        {/* Product image with badges */}
        <div className="relative pt-[100%]">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {discountPercent && discountPercent > 0 && (
            <Badge className="absolute left-2 top-2 bg-brand-orange hover:bg-brand-orange">
              -{discountPercent}%
            </Badge>
          )}
          {isNew && (
            <Badge className="absolute right-2 top-2 bg-brand-green hover:bg-brand-green">
              NEW
            </Badge>
          )}
        </div>
        
        {/* Product info */}
        <div className="p-3">
          <div className="mb-1 text-xs text-muted-foreground">{category}</div>
          <h3 className="text-sm font-medium leading-tight line-clamp-2 mb-1 group-hover:text-brand-purple">
            {name}
          </h3>
          
          {/* Price info */}
          <div className="flex items-center mb-2">
            <span className="text-sm font-bold">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="ml-2 text-xs text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center text-xs mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(rating) ? "★" : (i < rating ? "★" : "☆")}
                </span>
              ))}
            </div>
            <span className="ml-1 text-muted-foreground">({Math.floor(rating * 10)})</span>
          </div>

          {/* Add to cart button */}
          <Button 
            size="sm" 
            className="w-full"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
