
import React from 'react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';

// Mock user data
const user = {
  name: "Jane Smith",
  email: "jane.smith@example.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States"
  }
};

// Mock order data
const orders = [
  {
    id: "ORD-12345",
    date: "2023-04-10",
    status: "Delivered",
    total: 159.98,
    items: [
      { name: "Wireless Bluetooth Headphones", quantity: 1, price: 59.99 },
      { name: "Portable Bluetooth Speaker", quantity: 2, price: 39.99 }
    ]
  },
  {
    id: "ORD-12344",
    date: "2023-03-25",
    status: "Delivered",
    total: 89.99,
    items: [
      { name: "Smart Watch with Heart Rate Monitor", quantity: 1, price: 89.99 }
    ]
  }
];

const Account = () => {
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully."
    });
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Password updated",
      description: "Your password has been updated successfully."
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">My Account</h1>

        <Tabs defaultValue="profile">
          <TabsList className="mb-8">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="bg-white rounded-lg border p-6 max-w-2xl">
              <h2 className="text-lg font-medium mb-4">Personal Information</h2>
              
              <form onSubmit={handleUpdateProfile}>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={user.name} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={user.email} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue={user.phone} />
                  </div>
                </div>
                
                <Button type="submit">Save Changes</Button>
              </form>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <div className="bg-white rounded-lg border overflow-hidden">
              {orders.length > 0 ? (
                <div>
                  {orders.map((order) => (
                    <div key={order.id} className="border-b last:border-b-0 p-6">
                      <div className="flex flex-wrap justify-between mb-4">
                        <div>
                          <div className="font-medium">Order #{order.id}</div>
                          <div className="text-sm text-muted-foreground">
                            Placed on {new Date(order.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div>
                          <div className="font-medium text-right">${order.total.toFixed(2)}</div>
                          <div className="text-sm">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                              order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between py-2 border-b last:border-b-0">
                            <div>
                              <span className="font-medium">{item.name}</span>
                              <span className="text-muted-foreground ml-2">x{item.quantity}</span>
                            </div>
                            <div>${item.price.toFixed(2)}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <h3 className="font-medium mb-2">No orders yet</h3>
                  <p className="text-muted-foreground mb-4">When you place an order, it will appear here.</p>
                  <Link to="/categories">
                    <Button>Start Shopping</Button>
                  </Link>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <div className="bg-white rounded-lg border p-6 max-w-2xl">
              <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
              
              <form>
                <div className="grid gap-4 mb-6">
                  <div>
                    <Label htmlFor="street">Street Address</Label>
                    <Input id="street" defaultValue={user.address.street} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue={user.address.city} />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue={user.address.state} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input id="zipCode" defaultValue={user.address.zipCode} />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue={user.address.country} />
                    </div>
                  </div>
                </div>
                
                <Button>Save Address</Button>
              </form>
            </div>
          </TabsContent>

          {/* Password Tab */}
          <TabsContent value="password">
            <div className="bg-white rounded-lg border p-6 max-w-2xl">
              <h2 className="text-lg font-medium mb-4">Change Password</h2>
              
              <form onSubmit={handleUpdatePassword}>
                <div className="space-y-4 mb-6">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                
                <Button type="submit">Update Password</Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Account;
