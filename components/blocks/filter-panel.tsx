'use client';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchFilterOptions } from '@/lib/api';
import { useFilterStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { X, Filter, RotateCcw, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FilterPanel() {
  const {
    isFilterPanelOpen,
    setFilterPanelOpen,
    category,
    setCategory,
    priceRange,
    setPriceRange,
    rating,
    setRating,
    features,
    setFeatures,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    resetFilters,
  } = useFilterStore();

  const { data: filterOptions } = useQuery({
    queryKey: ['filter-options'],
    queryFn: fetchFilterOptions,
  });

  // Close panel on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFilterPanelOpen(false);
      }
    };

    if (isFilterPanelOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isFilterPanelOpen, setFilterPanelOpen]);

  const handleFeatureToggle = (feature: string) => {
    const newFeatures = features.includes(feature)
      ? features.filter(f => f !== feature)
      : [...features, feature];
    setFeatures(newFeatures);
  };

  const activeFiltersCount = [
    category !== 'all' ? 1 : 0,
    priceRange[0] !== 0 || priceRange[1] !== 10000 ? 1 : 0,
    rating > 0 ? 1 : 0,
    features.length,
  ].reduce((a, b) => a + b, 0);

  return (
    <>
      {/* Backdrop */}
      {isFilterPanelOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setFilterPanelOpen(false)}
        />
      )}

      {/* Filter Panel */}
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto',
          'lg:sticky lg:top-20 lg:right-auto lg:w-72 lg:h-[calc(100vh-5rem)] lg:transform-none lg:shadow-lg lg:rounded-2xl lg:bg-white/95 lg:backdrop-blur-sm',
          isFilterPanelOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        )}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Filter className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-lg text-slate-900">
                Filters
              </h3>
              {activeFiltersCount > 0 && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {activeFiltersCount}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFilterPanelOpen(false)}
              className="lg:hidden"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="flex space-x-2 mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilters}
              className="flex-1 text-xs"
            >
              <RotateCcw className="w-3 h-3 mr-1" />
              Reset
            </Button>
          </div>

          <div className="space-y-6">
            {/* Category Filter */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Category</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions?.categories.map((cat) => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Annual Fee Range */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Annual Fee Range</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1000}
                    min={0}
                    step={25}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Minimum Rating */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Minimum Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filterOptions?.ratingOptions.map((ratingOption) => (
                    <div
                      key={ratingOption}
                      className={cn(
                        'flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors',
                        rating === ratingOption
                          ? 'bg-blue-50 border border-blue-200'
                          : 'hover:bg-slate-50'
                      )}
                      onClick={() => setRating(rating === ratingOption ? 0 : ratingOption)}
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              'w-4 h-4',
                              i < ratingOption
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-slate-300'
                            )}
                          />
                        ))}
                      </div>
                      <span className="text-sm">
                        {ratingOption}+ stars
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {filterOptions?.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Checkbox
                        id={feature}
                        checked={features.includes(feature)}
                        onCheckedChange={() => handleFeatureToggle(feature)}
                      />
                      <label
                        htmlFor={feature}
                        className="text-sm text-slate-700 cursor-pointer flex-1"
                      >
                        {feature}
                      </label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sorting */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium">Sort By</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Rating</SelectItem>
                      <SelectItem value="annualFee">Annual Fee</SelectItem>
                      <SelectItem value="interestRate">Interest Rate</SelectItem>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="provider">Provider</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={sortOrder} onValueChange={(value: 'asc' | 'desc') => setSortOrder(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Order..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="desc">Descending</SelectItem>
                      <SelectItem value="asc">Ascending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Apply Button (Mobile) */}
          <div className="mt-6 lg:hidden">
            <Button
              onClick={() => setFilterPanelOpen(false)}
              className="w-full"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}