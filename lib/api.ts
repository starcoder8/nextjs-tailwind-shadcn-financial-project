import { FinancialProduct, FilterOptions, ComparisonMetrics } from './types';
import { getAllProducts } from './mock-data';

// Simulate API delay for realistic experience
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function fetchProducts(filters: {
  category?: string;
  priceRange?: [number, number];
  rating?: number;
  features?: string[];
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}): Promise<FinancialProduct[]> {
  await delay(300); // Simulate network delay
  
  let products = getAllProducts();
  
  // Apply filters
  if (filters.category && filters.category !== 'all') {
    products = products.filter(p => p.category === filters.category);
  }
  
  if (filters.priceRange) {
    products = products.filter(p => p.annualFee >= filters.priceRange![0] && p.annualFee <= filters.priceRange![1]);
  }
  
  if (filters.rating) {
    products = products.filter(p => p.rating >= filters.rating!);
  }
  
  if (filters.features && filters.features.length > 0) {
    products = products.filter(p => 
      filters.features!.some(feature => p.features.includes(feature))
    );
  }
  
  // Apply sorting
  if (filters.sortBy) {
    products.sort((a, b) => {
      const aVal = (a as any)[filters.sortBy!];
      const bVal = (b as any)[filters.sortBy!];
      
      if (filters.sortOrder === 'desc') {
        return bVal - aVal;
      }
      return aVal - bVal;
    });
  }
  
  return products;
}

export async function fetchFilterOptions(): Promise<FilterOptions> {
  await delay(100);
  
  const products = getAllProducts();
  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'credit-card', label: 'Credit Cards' },
    { value: 'loan', label: 'Loans' },
    { value: 'savings', label: 'Savings' },
    { value: 'investment', label: 'Investments' },
    { value: 'insurance', label: 'Insurance' }
  ];
  
const providers = Array.from(new Set(products.map(p => p.provider)));
const features = Array.from(new Set(products.flatMap(p => p.features)));
  
  return {
    categories,
    providers,
    features,
    priceRanges: [
      { min: 0, max: 0, label: 'No Fee' },
      { min: 1, max: 100, label: '$1 - $100' },
      { min: 101, max: 300, label: '$101 - $300' },
      { min: 301, max: 500, label: '$301 - $500' },
      { min: 501, max: 1000, label: '$501+' }
    ],
    ratingOptions: [4.5, 4.0, 3.5, 3.0]
  };
}

export async function fetchComparisonMetrics(): Promise<ComparisonMetrics> {
  await delay(150);
  
  const products = getAllProducts();
  const totalProducts = products.length;
  const averageRating = products.reduce((sum, p) => sum + p.rating, 0) / totalProducts;
  
  const providerCounts = products.reduce((acc, p) => {
    acc[p.provider] = (acc[p.provider] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const topProviders = Object.entries(providerCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  
  const featureCounts = products.reduce((acc, p) => {
    p.features.forEach(feature => {
      acc[feature] = (acc[feature] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);
  
  const popularFeatures = Object.entries(featureCounts)
    .map(([feature, count]) => ({ feature, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  
  return {
    totalProducts,
    averageRating: Math.round(averageRating * 10) / 10,
    topProviders,
    popularFeatures
  };
}