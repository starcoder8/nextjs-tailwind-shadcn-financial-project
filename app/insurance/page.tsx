import { Metadata } from 'next';
import { Shield, Heart, Car, Home, Briefcase, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Insurance Comparison | Elite Financial Platform',
  description: 'Compare auto, home, life, and health insurance policies from top providers.',
};

const insuranceProducts = [
  {
    id: 1,
    name: 'Comprehensive Auto Coverage',
    provider: 'Premier Insurance Co.',
    type: 'Auto Insurance',
    rating: 4.8,
    monthlyPremium: '$89 - $245',
    coverage: 'Up to $500K',
    deductible: '$250 - $1,000',
    features: ['24/7 Claims Support', 'Accident Forgiveness', 'Roadside Assistance'],
    discounts: ['Multi-Policy', 'Safe Driver', 'Good Student']
  },
  {
    id: 2,
    name: 'Homeowners Protection Plus',
    provider: 'Secure Home Insurance',
    type: 'Home Insurance',
    rating: 4.7,
    monthlyPremium: '$125 - $350',
    coverage: 'Up to $1M',
    deductible: '$500 - $2,500',
    features: ['Replacement Cost Coverage', 'Personal Property Protection', 'Liability Coverage'],
    discounts: ['Security System', 'Claims-Free', 'Bundle Discount']
  },
  {
    id: 3,
    name: 'Term Life Essential',
    provider: 'Life Guard Insurance',
    type: 'Life Insurance',
    rating: 4.9,
    monthlyPremium: '$25 - $150',
    coverage: '$100K - $2M',
    deductible: 'N/A',
    features: ['Level Premiums', 'Convertible to Permanent', 'Accelerated Death Benefit'],
    discounts: ['Non-Smoker', 'Healthy Lifestyle', 'Annual Payment']
  },
  {
    id: 4,
    name: 'Health Shield Premium',
    provider: 'Wellness Insurance Group',
    type: 'Health Insurance',
    rating: 4.6,
    monthlyPremium: '$285 - $650',
    coverage: 'Comprehensive',
    deductible: '$1,000 - $5,000',
    features: ['Nationwide Network', 'Preventive Care', 'Prescription Coverage'],
    discounts: ['Wellness Program', 'Family Plan', 'HSA Compatible']
  },
  {
    id: 5,
    name: 'Business Liability Pro',
    provider: 'Commercial Risk Solutions',
    type: 'Business Insurance',
    rating: 4.5,
    monthlyPremium: '$150 - $500',
    coverage: '$1M - $5M',
    deductible: '$1,000 - $10,000',
    features: ['General Liability', 'Professional Liability', 'Cyber Security'],
    discounts: ['Industry Association', 'Claims-Free', 'Safety Training']
  },
  {
    id: 6,
    name: 'Disability Income Guard',
    provider: 'Income Protection Inc.',
    type: 'Disability Insurance',
    rating: 4.4,
    monthlyPremium: '$45 - $200',
    coverage: '60% of Income',
    deductible: '90-365 days',
    features: ['Short & Long Term', 'Partial Benefits', 'Cost of Living Adjustments'],
    discounts: ['Group Policy', 'Professional Association', 'Multi-Year']
  }
];

const insuranceTypes = [
  { icon: Car, name: 'Auto Insurance', description: 'Protect your vehicle and driving record' },
  { icon: Home, name: 'Home Insurance', description: 'Safeguard your home and belongings' },
  { icon: Heart, name: 'Life Insurance', description: 'Secure your family\'s financial future' },
  { icon: Users, name: 'Health Insurance', description: 'Comprehensive healthcare coverage' },
  { icon: Briefcase, name: 'Business Insurance', description: 'Protect your business operations' },
  { icon: Shield, name: 'Disability Insurance', description: 'Income protection when you can\'t work' }
];

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Insurance
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                Comparison
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Protect what matters most with comprehensive insurance coverage. 
              Compare policies from trusted providers to find the perfect protection.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Types Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-4">
              Types of Insurance Coverage
            </h2>
            <p className="text-lg text-slate-600">
              Explore our comprehensive range of insurance products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{type.name}</h3>
                    <p className="text-slate-600">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-slate-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
              All Insurance
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              Auto
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              Home
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              Life
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              Health
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
              Business
            </Badge>
          </div>
        </div>
      </section>

      {/* Insurance Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {insuranceProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      {product.type}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <p className="text-slate-600">{product.provider}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600 mb-1">Monthly Premium</p>
                      <p className="font-semibold text-slate-900">{product.monthlyPremium}</p>
                    </div>
                    <div>
                      <p className="text-slate-600 mb-1">Coverage</p>
                      <p className="font-semibold text-slate-900">{product.coverage}</p>
                    </div>
                  </div>
                  
                  {product.deductible !== 'N/A' && (
                    <div>
                      <p className="text-slate-600 mb-1">Deductible</p>
                      <p className="font-semibold text-slate-900">{product.deductible}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-sm text-slate-600 mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-slate-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 mb-2">Available Discounts</p>
                    <div className="flex flex-wrap gap-2">
                      {product.discounts.map((discount, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {discount}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="w-full">
                      Compare Plans
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