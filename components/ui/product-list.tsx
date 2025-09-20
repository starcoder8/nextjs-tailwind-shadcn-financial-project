'use client';

import { FinancialProduct } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ExternalLink, CreditCard, PiggyBank, TrendingUp, Shield, CheckCircle, XCircle } from 'lucide-react';
import { useFilterStore } from '@/lib/store';
import { cn } from '@/lib/utils';

interface ProductListProps {
  products: FinancialProduct[];
}

const categoryIcons = {
  'credit-card': CreditCard,
  'savings': PiggyBank,
  'loan': TrendingUp,
  'investment': TrendingUp,
  'insurance': Shield,
};

export function ProductList({ products }: ProductListProps) {
  const { selectedProducts, toggleProductSelection } = useFilterStore();

  return (
    <div className="space-y-4">
      {products.map((product) => {
        const Icon = categoryIcons[product.category] || CreditCard;
        const isSelected = selectedProducts.includes(product.id);

        return (
          <Card 
            key={product.id} 
            className={cn(
              "hover:shadow-lg transition-all duration-200",
              isSelected && "ring-2 ring-blue-500 shadow-md"
            )}
          >
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-4">
                    {/* Icon & Image */}
                    <div className="flex-shrink-0">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name}
                        className="w-20 h-14 object-cover rounded-lg bg-slate-100"
                      />
                    </div>

                    {/* Main Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-1">
                            {product.name}
                          </h3>
                          <p className="text-slate-600 mb-2">{product.provider}</p>
                          
                          {/* Rating & Category */}
                          <div className="flex items-center space-x-3 mb-3">
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
                              <Icon className="w-3 h-3 mr-1" />
                              {product.category.replace('-', ' ')}
                            </Badge>
                          </div>
                        </div>

                        {/* Heart Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleProductSelection(product.id)}
                          className={cn(
                            "flex-shrink-0",
                            isSelected && "bg-blue-50 text-blue-600"
                          )}
                        >
                          <Heart className={cn("w-4 h-4", isSelected && "fill-current")} />
                        </Button>
                      </div>

                      {/* Description */}
                      <p className="text-slate-700 text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {product.features.length > 4 && (
                          <Badge variant="outline" className="text-xs text-slate-500">
                            +{product.features.length - 4} more
                          </Badge>
                        )}
                      </div>

                      {/* Pros & Cons */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm font-medium text-green-700 mb-2">Pros:</div>
                          <ul className="space-y-1">
                            {product.pros.slice(0, 2).map((pro, index) => (
                              <li key={index} className="flex items-start text-sm text-slate-600">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-red-700 mb-2">Cons:</div>
                          <ul className="space-y-1">
                            {product.cons.slice(0, 2).map((con, index) => (
                              <li key={index} className="flex items-start text-sm text-slate-600">
                                <XCircle className="w-3 h-3 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics & Actions */}
                <div className="flex-shrink-0 lg:w-72">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 mb-4">
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-slate-900">
                        {product.annualFee === 0 ? 'FREE' : `$${product.annualFee}`}
                      </div>
                      <div className="text-sm text-slate-600">Annual Fee</div>
                    </div>
                    
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-slate-900">
                        {product.interestRate}%
                      </div>
                      <div className="text-sm text-slate-600">Interest Rate</div>
                    </div>

                    {(product.cashBackRate || product.pointsMultiplier) && (
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 text-center border border-blue-100 lg:col-span-2">
                        <div className="text-2xl font-bold text-blue-700">
                          {product.cashBackRate ? `${product.cashBackRate}%` : `${product.pointsMultiplier}x`}
                        </div>
                        <div className="text-sm text-blue-600">
                          {product.cashBackRate ? 'Cashback Rate' : 'Points Multiplier'}
                        </div>
                      </div>
                    )}

                    {product.minCreditScore > 0 && (
                      <div className="bg-slate-50 rounded-lg p-4 text-center lg:col-span-2">
                        <div className="text-2xl font-bold text-slate-900">
                          {product.minCreditScore}
                        </div>
                        <div className="text-sm text-slate-600">Min Credit Score</div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => toggleProductSelection(product.id)}
                    >
                      {isSelected ? 'Remove from Compare' : 'Add to Compare'}
                    </Button>
                    <Button asChild className="w-full">
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}