'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useFilterStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Table,
  TrendingUp,
  Shield,
  CreditCard,
  PiggyBank,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toggleFilterPanel, viewMode, setViewMode } = useFilterStore();

  const navigation = [
    { name: 'Credit Cards', href: '/credit-cards', icon: CreditCard },
    { name: 'Loans', href: '/loans', icon: TrendingUp },
    { name: 'Savings', href: '/savings', icon: PiggyBank },
    { name: 'Insurance', href: '/insurance', icon: Shield },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-playfair text-xl font-bold text-slate-900">
              FinanceCompare Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Search and Controls */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 w-64 bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 transition-all"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="hidden lg:flex items-center space-x-1 bg-slate-100 rounded-lg p-1">
              {[
                { mode: 'table' as const, icon: Table, label: 'Table' },
                { mode: 'grid' as const, icon: Grid3X3, label: 'Grid' },
                { mode: 'list' as const, icon: List, label: 'List' },
              ].map(({ mode, icon: Icon, label }) => (
                <Button
                  key={mode}
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode(mode)}
                  className={cn(
                    'h-8 w-8 p-0',
                    viewMode === mode && 'bg-white shadow-sm'
                  )}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleFilterPanel}
              className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300"
            >
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
            
            {/* Mobile Search */}
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 w-full"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}