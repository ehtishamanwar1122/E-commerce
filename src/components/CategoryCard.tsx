
import React from 'react';
import { Link } from 'react-router-dom';

export interface CategoryProps {
  id: number;
  name: string;
  image: string;
  productCount: number;
}

const CategoryCard: React.FC<CategoryProps> = ({
  id,
  name,
  image,
  productCount
}) => {
  return (
    <Link to={`/category/${id}`} className="group">
      <div className="overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:shadow-md text-center">
        {/* Category image */}
        <div className="relative pt-[100%] bg-secondary/50">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Category info */}
        <div className="p-3">
          <h3 className="text-sm font-medium group-hover:text-brand-purple">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground">
            {productCount} products
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
