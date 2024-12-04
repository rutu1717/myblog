"use client";
import Link from 'next/link';
import { Home, User } from 'lucide-react';
export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-400">Mindtechwellness</div>
          <div className="flex space-x-2">
            <Link href="/" className="flex items-center text-gray-300 hover:text-teal-400 transition duration-300">
              <Home className="mr-2" size={20} />
              Home
            </Link>
            <Link href="/about" className="flex items-center text-gray-300 hover:text-teal-400 transition duration-300">
              <User className="mr-2" size={20} />
              About
            </Link>
          </div>
        </div>
      </nav>
  );
}