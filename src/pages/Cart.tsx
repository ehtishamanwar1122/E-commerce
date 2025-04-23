
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

// Mock cart data
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    quantity: 1,
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      // Remove item if quantity is less than 1
      setCartItems(cartItems.filter(item => item.id !== itemId));
      toast({
        title: "Item removed",
        description: "The item has been removed from your cart",
      });
    } else if (newQuantity <= 10) {
      // Update quantity if it's between 1 and 10
      setCartItems(cartItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart",
    });
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "SAVE20") {
      setPromoDiscount(0.2);
      toast({
        title: "Promo code applied",
        description: "20% discount has been applied to your order",
      });
    } else {
      setPromoDiscount(0);
      toast({
        title: "Invalid promo code",
        description: "The promo code you entered is invalid or expired",
        variant: "destructive",
      });
    }
  };

  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 4.99;
  const discount = promoDiscount * subtotal;
  const total = subtotal + shipping - discount;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg border overflow-hidden">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex border-b last:border-b-0 p-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow pl-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <Link to={`/product/${item.id}`} className="font-medium hover:text-brand-purple">
                          {item.name}
                        </Link>
                        <div className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        ${item.price.toFixed(2)} each
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <div className="w-8 text-center mx-1">{item.quantity}</div>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= 10}
                          >
                            +
                          </Button>
                        </div>
                        {/* Remove button */}
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link to="/categories">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </div>
            </div>

            {/* Order summary */}
            <div>
              <div className="bg-white rounded-lg border p-4">
                <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-brand-green">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Promo code */}
                <div className="mb-4">
                  <label className="text-sm font-medium mb-1 block">Promo Code</label>
                  <div className="flex">
                    <Input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="rounded-r-none"
                    />
                    <Button 
                      onClick={applyPromoCode}
                      className="rounded-l-none"
                      disabled={!promoCode}
                    >
                      Apply
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Try code "SAVE20" for 20% off
                  </div>
                </div>

                {/* Checkout button */}
                <Button className="w-full">Proceed to Checkout</Button>
                
                {/* Shipping note */}
                <div className="mt-4 text-sm text-center text-muted-foreground">
                  {subtotal >= 50 ? (
                    <span className="text-brand-green">
                      Your order qualifies for free shipping!
                    </span>
                  ) : (
                    <span>
                      Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/categories">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
