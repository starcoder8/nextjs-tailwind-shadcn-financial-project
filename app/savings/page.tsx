import { Metadata } from 'next';
import { PiggyBank, TrendingUp, Shield, Calendar, DollarSign, Percent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Savings Accounts Comparison | Elite Financial Platform',
  description: 'Compare high-yield savings accounts, CDs, and money market accounts.',
};

const savingsProducts = [
  {
    id: 1,
    name: 'High-Yield Savings Plus',
    institution: 'Digital Bank',
    type: 'High-Yield Savings',
    rating: 4.9,
    apy: '4.50%',
    minBalance: '$0',
    monthlyFee: '$0',
    features: ['No Monthly Fees', 'Mobile Banking', 'ATM Fee Reimbursement'],
    fdicInsured: true,
    compounding: 'Daily'
  },
  {
    id: 2,
    name: '12-Month Certificate',
    institution: 'Community Credit Union',
    type: 'Certificate of Deposit',
    rating: 4.7,
    apy: '5.25%',
    minBalance: '$1,000',
    monthlyFee: '$0',
    features: ['Fixed Rate', 'NCUA Insured', 'Auto-Renewal Option'],
    fdicInsured: true,
    compounding: 'Monthly'
  },
  {
    id: 3,
    name: 'Money Market Premier',
    institution: 'National Savings',
    type: 'Money Market',
    rating: 4.6,
    apy: '4.25%',
    minBalance: '$2,500',
    monthlyFee: '$12',
    features: ['Check Writing', 'Debit Card Access', 'Tiered Interest Rates'],
    fdicInsured: true,
    compounding: 'Daily'
  }
];

export default function SavingsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-emerald-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center">
                <PiggyBank className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Savings Accounts
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 block">
                Comparison
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Maximize your savings with high-yield accounts, CDs, and money market options. 
              Compare rates and features to grow your money faster.
            </p>
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                <span>Savings Growth Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Initial Deposit
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      placeholder="10,000"
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Monthly Deposit
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      placeholder="500"
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    APY (%)
                  </label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      placeholder="4.5"
                      step="0.1"
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Time (Years)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      placeholder="5"
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
                  Calculate Growth
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-slate-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <Badge variant="secondary" className="cursor-pointer hover:bg-emerald-100">
              All Accounts
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50">
              High-Yield Savings
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50">
              Certificates of Deposit
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50">
              Money Market
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-emerald-50">
              No Minimum Balance
            </Badge>
          </div>
        </div>
      </section>

      {/* Savings Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {savingsProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      {product.type}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-slate-700">{product.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <p className="text-slate-600">{product.institution}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4 bg-emerald-50 rounded-lg">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">
                      {product.apy}
                    </div>
                    <div className="text-sm text-emerald-700">Annual Percentage Yield</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-2 text-slate-600 mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span>Min Balance</span>
                      </div>
                      <p className="font-semibold text-slate-900">{product.minBalance}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-slate-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Monthly Fee</span>
                      </div>
                      <p className="font-semibold text-slate-900">{product.monthlyFee}</p>
                    </div>
                  </div>

                  <div className="text-sm">
                    <p className="text-slate-600 mb-1">Compounding: <span className="font-semibold text-slate-900">{product.compounding}</span></p>
                    {product.fdicInsured && (
                      <div className="flex items-center space-x-2 text-emerald-600">
                        <Shield className="w-4 h-4" />
                        <span className="font-medium">FDIC/NCUA Insured</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-slate-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
                      Open Account
                    </Button>
                    <Button variant="outline" className="w-full">
                      Learn More
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