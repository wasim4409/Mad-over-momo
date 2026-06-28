'use client';

import React, { useState, useEffect } from 'react';

const menuItems = [
  { name: "Pizza Momos", price: "₹180", category: "Signature", desc: "Crispy pizza flavored dumplings" },
  { name: "Orange Mojito", price: "₹120", category: "Drinks", desc: "Fresh mint & citrus burst" },
  { name: "Peach Ice Tea with Boba", price: "₹140", category: "Drinks", desc: "Sweet peach with chewy boba" },
  { name: "Chicken Cheese Sandwich", price: "₹160", category: "Mains", desc: "Loaded with cheese" },
  { name: "Sizzling Momos", price: "₹220", category: "Signature", desc: "Hot plate sizzling" },
  { name: "Veg Burger", price: "₹150", category: "Mains", desc: "Juicy veg patty" },
];

export default function MadOverMomos() {
  const [staffLoggedIn, setStaffLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'reservations' | 'orders'>('reservations');
  const [reservations, setReservations] = useState([{ id: 1, name: "Rahul Sharma", time: "7:30 PM", guests: 4, status: "Confirmed" }]);

  const loginStaff = () => {
    if (password === 'momos123') {
      setStaffLoggedIn(true);
      setPassword('');
    } else {
      alert('Wrong password. Try: momos123');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🥟</span>
            <div className="font-bold text-2xl tracking-tighter">MAD OVER MOMOS</div>
          </div>
          <button onClick={() => setStaffLoggedIn(!staffLoggedIn)} className="px-5 py-2 border border-white/30 rounded-full text-sm">
            Staff Portal
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg h-screen flex items-center justify-center text-center pt-16">
        <div className="max-w-4xl px-6">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">MAD OVER<br />MOMOS</h1>
          <p className="text-2xl text-orange-300 mb-10">Steaming hot happiness in Mira Road</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#reserve" className="bg-orange-500 text-black px-10 py-4 rounded-full font-semibold text-lg">Book Table</a>
            <a href="#menu" className="border border-white/70 px-10 py-4 rounded-full font-semibold text-lg">View Menu</a>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((item, i) => (
            <div key={i} className="bg-zinc-900 p-8 rounded-3xl">
              <div className="text-6xl mb-4">🥟</div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <p className="text-orange-400 text-sm">{item.category}</p>
                </div>
                <p className="text-2xl font-mono text-orange-400">{item.price}</p>
              </div>
              <p className="mt-4 text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation */}
      <section id="reserve" className="bg-zinc-900 py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Make a Reservation</h2>
          <div className="bg-black p-10 rounded-3xl">
            <input type="text" placeholder="Your Name" className="w-full mb-4 p-4 bg-zinc-900 rounded-2xl" />
            <button className="w-full bg-orange-500 text-black py-4 rounded-2xl font-semibold text-lg">Confirm Booking</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-white/50 text-sm">
        Mad Over Momos & Cafe • Rassaz Mall, Mira Road<br />
        Phone: 081691 62003
      </footer>

      {/* Staff Modal */}
      {staffLoggedIn && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <div className="bg-zinc-900 p-10 rounded-3xl max-w-md w-full">
            <h3 className="text-3xl mb-6">Staff Dashboard</h3>
            <p className="mb-8">Real-time bookings & orders</p>
            <button onClick={() => setStaffLoggedIn(false)} className="w-full py-4 bg-white text-black rounded-2xl">Close Dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
}
