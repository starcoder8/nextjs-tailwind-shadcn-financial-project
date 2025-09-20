import { Metadata } from 'next';
import { CreditCard, Star, Percent, Calendar, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Credit Cards Comparison | Elite Financial Platform',
  description: 'Compare the best credit cards with rewards, cashback, and low interest rates.',
};

const creditCards = [
  {
    id: 1,
    name: 'Elite Rewards Platinum',
    issuer: 'Premium Bank',
    rating: 4.8,
    apr: '15.99% - 23.99%',
    annualFee: '$95',
    rewards: '3x points on dining, 2x on travel',
    signupBonus: '60,000 points',
    features: ['No Foreign Transaction Fees', 'Travel Insurance', 'Concierge Service'],
    category: 'Travel Rewards'
  },
  {
    id: 2,
    name: 'Cashback Master Card',
    issuer: 'City Financial',
    rating: 4.6,
    apr: '13.99% - 21.99%',
    annualFee: '$0',
    rewards: '2% cashback on all purchases',
    signupBonus: '$200 cashback',
    features: ['No Annual Fee', 'Extended Warranty', 'Purchase Protection'],
    category: 'Cashback'
  },
  {
    id: 3,
    name: 'Business Elite Card',
    issuer: 'Corporate Bank',
    rating: 4.7,
    apr: '16.99% - 24.99%',
    annualFee: '$150',
    rewards: '4x points on business expenses',
    signupBonus: '80,000 points',
    features: ['Expense Management Tools', 'Employee Cards', 'Business Insurance'],
    category: 'Business'
  }
];

export default function CreditCardsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Credit Cards
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                Comparison
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Find the perfect credit card for your lifestyle. Compare rewards, rates, and benefits 
              from top issuers to make an informed decision.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
              All Cards
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              Travel Rewards
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              Cashback
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              Business
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              No Annual Fee
            </Badge>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {creditCards.map((card) => (
              <Card key={card.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {card.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-slate-700">{card.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {card.name}
                  </CardTitle>
                  <p className="text-slate-600">{card.issuer}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-2 text-slate-600 mb-1">
                        <Percent className="w-4 h-4" />
                        <span>APR</span>
                      </div>
                      <p className="font-semibold text-slate-900">{card.apr}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-slate-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Annual Fee</span>
                      </div>
                      <p className="font-semibold text-slate-900">{card.annualFee}</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 text-slate-600 mb-2">
                      <TrendingUp className="w-4 h-4" />
                      <span className="font-medium">Rewards</span>
                    </div>
                    <p className="text-slate-900">{card.rewards}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 text-slate-600 mb-2">
                      <Star className="w-4 h-4" />
                      <span className="font-medium">Sign-up Bonus</span>
                    </div>
                    <p className="text-slate-900 font-semibold">{card.signupBonus}</p>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2 text-slate-600 mb-2">
                      <Shield className="w-4 h-4" />
                      <span className="font-medium">Key Features</span>
                    </div>
                    <ul className="space-y-1">
                      {card.features.map((feature, index) => (
                        <li key={index} className="text-sm text-slate-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Compare Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}