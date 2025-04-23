
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/categories" className="hover:text-brand-purple">All Categories</Link></li>
              <li><Link to="/deals" className="hover:text-brand-purple">Deals</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-brand-purple">New Arrivals</Link></li>
              <li><Link to="/bestsellers" className="hover:text-brand-purple">Bestsellers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-brand-purple">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-brand-purple">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-brand-purple">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="hover:text-brand-purple">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">My Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/account" className="hover:text-brand-purple">Profile</Link></li>
              <li><Link to="/orders" className="hover:text-brand-purple">Orders</Link></li>
              <li><Link to="/wishlist" className="hover:text-brand-purple">Wishlist</Link></li>
              <li><Link to="/notifications" className="hover:text-brand-purple">Notifications</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-brand-purple">Our Story</Link></li>
              <li><Link to="/careers" className="hover:text-brand-purple">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-purple">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-purple">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
