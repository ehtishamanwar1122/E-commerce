
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Mock cart count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2 md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-brand-purple">ShopEasy</span>
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden flex-1 mx-4 md:mx-8 lg:flex items-center max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search products..." 
                className="w-full pl-10 pr-4"
              />
            </div>
          </div>

          {/* Navigation for desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/categories">
              <Button variant="ghost" size="sm">Categories</Button>
            </Link>
            <Link to="/deals">
              <Button variant="ghost" size="sm">Deals</Button>
            </Link>
            <Link to="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile search bar */}
        <div className="pb-3 pt-1 md:hidden">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4"
            />
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden transition-opacity",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={toggleMenu}
        >
          <div
            className={cn(
              "fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out",
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-6">
              <Link to="/" className="text-xl font-bold text-brand-purple" onClick={toggleMenu}>
                ShopEasy
              </Link>
              <div className="space-y-4">
                <Link to="/categories" className="block py-2 border-b" onClick={toggleMenu}>
                  Categories
                </Link>
                <Link to="/deals" className="block py-2 border-b" onClick={toggleMenu}>
                  Deals
                </Link>
                <Link to="/account" className="block py-2 border-b" onClick={toggleMenu}>
                  My Account
                </Link>
                <Link to="/cart" className="block py-2 border-b" onClick={toggleMenu}>
                  Cart ({cartCount})
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
