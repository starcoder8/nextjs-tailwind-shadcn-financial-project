import { Metadata } from 'next';
import { TrendingUp, DollarSign, Calendar, Percent, Calculator, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Loans Comparison | Elite Financial Platform',
  description: 'Compare personal loans, mortgages, and business loans with competitive rates.',
};

const loans = [
  {
    id: 1,
    name: 'Personal Loan Plus',
    lender: 'Premier Finance',
    type: 'Personal Loan',
    rating: 4.7,
    apr: '5.99% - 24.99%',
    amount: '$2,000 - $40,000',
    term: '2 - 7 years',
    features: ['No Origination Fee', 'Same Day Funding', 'Flexible Payments'],
    minCreditScore: 650,
    processingTime: '24 hours'
  },
  {
    id: 2,
    name: 'Home Mortgage Elite',
    lender: 'National Bank',
    type: 'Mortgage',
    rating: 4.8,
    apr: '3.25% - 7.50%',
    amount: '$50,000 - $2,000,000',
    term: '15 - 30 years',
    features: ['No PMI Options', 'Rate Lock', 'Online Application'],
    minCreditScore: 620,
    processingTime: '30 days'
  },
  {
    id: 3,
    name: 'Business Growth Loan',
    lender: 'Corporate Capital',
    type: 'Business Loan',
    rating: 4.6,
    apr: '6.99% - 29.99%',
    amount: '$10,000 - $500,000',
    term: '1 - 5 years',
    features: ['Revenue-Based Qualification', 'Fast Approval', 'Business Support'],
    minCreditScore: 600,
    processingTime: '3 days'
  }
];

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Loans
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 block">
                Comparison
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Secure the best loan rates for your needs. Compare personal loans, mortgages, 
              and business loans from trusted lenders.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
                <Calculator className="w-6 h-6 text-green-600" />
                <span>Loan Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      placeholder="25,000"
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Interest Rate (%)
                  </label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      placeholder="7.5"
                      step="0.1"
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Term (Years)
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      placeholder="5"
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Calculate Payment
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
            <Badge variant="secondary" className="cursor-pointer hover:bg-green-100">
              All Loans
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
              Personal Loans
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
              Mortgages
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
              Business Loans
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-green-50">
              Auto Loans
            </Badge>
          </div>
        </div>
      </section>

      {/* Loans Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {loans.map((loan) => (
              <Card key={loan.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {loan.type}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium text-slate-700">{loan.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                    {loan.name}
                  </CardTitle>
                  <p className="text-slate-600">{loan.lender}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-2 text-slate-600 mb-1">
                        <Percent className="w-4 h-4" />
                        <span>APR Range</span>
                      </div>
                      <p className="font-semibold text-slate-900">{loan.apr}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-slate-600 mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span>Amount</span>
                      </div>
                      <p className="font-semibold text-slate-900">{loan.amount}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-2 text-slate-600 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Term</span>
                      </div>
                      <p className="font-semibold text-slate-900">{loan.term}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-slate-600 mb-1">
                        <Shield className="w-4 h-4" />
                        <span>Min Credit</span>
                      </div>
                      <p className="font-semibold text-slate-900">{loan.minCreditScore}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 mb-2">Processing Time</p>
                    <p className="font-semibold text-green-600">{loan.processingTime}</p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 mb-2">Key Features</p>
                    <ul className="space-y-1">
                      {loan.features.map((feature, index) => (
                        <li key={index} className="text-sm text-slate-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                      Apply Now
                    </Button>
                    <Button variant="outline" className="w-full">
                      Get Pre-Qualified
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