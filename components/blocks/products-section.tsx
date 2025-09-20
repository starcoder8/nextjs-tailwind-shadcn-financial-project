'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api';
import { useFilterStore } from '@/lib/store';
import { ProductsTable } from '@/components/ui/products-table';
import { ProductGrid } from '@/components/ui/product-grid';
import { ProductList } from '@/components/ui/product-list';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Button } from '@/components/ui/button';
import { RefreshCw, Filter } from 'lucide-react';

export function ProductsSection() {
  const {
    category,
    priceRange,
    rating,
    features,
    sortBy,
    sortOrder,
    viewMode,
    toggleFilterPanel
  } = useFilterStore();

  const {
    data: products,
    isLoading,
    error,
    refetch,
    isFetching
  } = useQuery({
    queryKey: ['products', { category, priceRange, rating, features, sortBy, sortOrder }],
    queryFn: () => fetchProducts({
      category,
      priceRange,
      rating,
      features,
      sortBy,
      sortOrder
    }),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  if (error) {
    return (
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-red-500 text-lg font-medium mb-4">
              Failed to load products
            </div>
            <Button onClick={() => refetch()} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
              Financial Products Comparison
            </h2>
            <p className="text-lg text-slate-600">
              {isLoading ? (
                'Loading products...'
              ) : (
                `Showing ${products?.length || 0} products`
              )}
              {isFetching && !isLoading && (
                <span className="ml-2 text-blue-600">• Updating...</span>
              )}
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={toggleFilterPanel}
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner size="lg" />
          </div>
        ) : products && products.length > 0 ? (
          <div className="space-y-6">
            {/* View Mode Rendering */}
            {viewMode === 'table' && <ProductsTable products={products} />}
            {viewMode === 'grid' && <ProductGrid products={products} />}
            {viewMode === 'list' && <ProductList products={products} />}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-slate-500 text-lg font-medium mb-4">
              No products found matching your criteria
            </div>
            <p className="text-slate-400 mb-6">
              Try adjusting your filters to see more results
            </p>
            <Button
              variant="outline"
              onClick={toggleFilterPanel}
              className="flex items-center space-x-2 mx-auto"
            >
              <Filter className="w-4 h-4" />
              <span>Modify Filters</span>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}