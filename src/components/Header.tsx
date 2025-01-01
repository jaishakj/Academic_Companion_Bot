import React from 'react';
import { GraduationCap } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-900">
              AI Academic Companion
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Subjects</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition">Resources</a>
            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;