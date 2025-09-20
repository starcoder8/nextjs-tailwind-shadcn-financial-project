'use client';

import { FinancialProduct } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ExternalLink, CreditCard, PiggyBank, TrendingUp, Shield } from 'lucide-react';
import { useFilterStore } from '@/lib/store';
import { cn } from '@/lib/utils';

interface ProductGridProps {
  products: FinancialProduct[];
}

const categoryIcons = {
  'credit-card': CreditCard,
  'savings': PiggyBank,
  'loan': TrendingUp,
  'investment': TrendingUp,
  'insurance': Shield,
};

export function ProductGrid({ products }: ProductGridProps) {
  const { selectedProducts, toggleProductSelection } = useFilterStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => {
        const Icon = categoryIcons[product.category] || CreditCard;
        const isSelected = selectedProducts.includes(product.id);

        return (
          <Card 
            key={product.id} 
            className={cn(
              "group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
              isSelected && "ring-2 ring-blue-500 shadow-lg"
            )}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600">{product.provider}</p>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleProductSelection(product.id)}
                  className={cn(
                    "opacity-0 group-hover:opacity-100 transition-opacity",
                    isSelected && "opacity-100 bg-blue-50 text-blue-600"
                  )}
                >
                  <Heart className={cn("w-4 h-4", isSelected && "fill-current")} />
                </Button>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mt-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium text-sm">{product.rating}</span>
                </div>
                <Badge 
                  variant="secondary" 
                  className={cn(
                    "text-xs",
                    product.category === 'credit-card' && "bg-blue-100 text-blue-700",
                    product.category === 'savings' && "bg-green-100 text-green-700",
                    product.category === 'loan' && "bg-purple-100 text-purple-700",
                  )}
                >
                  {product.category.replace('-', ' ')}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-lg font-semibold text-slate-900">
                    {product.annualFee === 0 ? 'FREE' : `$${product.annualFee}`}
                  </div>
                  <div className="text-xs text-slate-600">Annual Fee</div>
                </div>
                
                <div className="text-center p-3 bg-slate-50 rounded-lg">
                  <div className="text-lg font-semibold text-slate-900">
                    {product.interestRate}%
                  </div>
                  <div className="text-xs text-slate-600">Interest Rate</div>
                </div>
              </div>

              {/* Rewards Info */}
              {(product.cashBackRate || product.pointsMultiplier) && (
                <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="text-lg font-semibold text-blue-700">
                    {product.cashBackRate ? `${product.cashBackRate}%` : `${product.pointsMultiplier}x`}
                  </div>
                  <div className="text-xs text-blue-600">
                    {product.cashBackRate ? 'Cashback' : 'Points'}
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-slate-700">Key Features:</div>
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {product.features.length > 3 && (
                    <Badge variant="outline" className="text-xs text-slate-500">
                      +{product.features.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 line-clamp-2">
                {product.description}
              </p>

              {/* Min Credit Score */}
              {product.minCreditScore > 0 && (
                <div className="text-sm text-slate-600">
                  <span className="font-medium">Min Credit Score:</span> {product.minCreditScore}
                </div>
              )}
            </CardContent>

            <CardFooter className="pt-4">
              <div className="flex space-x-2 w-full">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => toggleProductSelection(product.id)}
                >
                  {isSelected ? 'Remove from Compare' : 'Add to Compare'}
                </Button>
                <Button asChild className="flex-1">
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}