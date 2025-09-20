import { Shield, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function TrustSection() {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your data is protected with enterprise-grade encryption and security protocols.',
      features: ['256-bit SSL encryption', 'SOC 2 Type II certified', 'Regular security audits'],
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Trusted by financial experts and recognized by leading industry publications.',
      features: ['Forbes "Best Fintech"', 'WSJ recommended', '5-star Trustpilot rating'],
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of financial analysts and former bank executives ensure accuracy.',
      features: ['CFA certified analysts', '15+ years experience', 'Real-time data validation'],
    },
    {
      icon: Clock,
      title: 'Always Up-to-Date',
      description: 'Real-time rate monitoring and daily updates ensure you see current offers.',
      features: ['Hourly rate updates', 'API integrations', 'Automated verification'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Millions Trust FinanceCompare Pro
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We've built the most comprehensive and secure platform for comparing financial products, 
            backed by industry expertise and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-slate-500">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Compliance & Partnerships */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-2xl font-bold text-slate-900 mb-2">
              Regulatory Compliance & Partnerships
            </h3>
            <p className="text-slate-600">
              We maintain the highest standards of compliance and partner with leading financial institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: 'NMLS', subtitle: 'Consumer Access' },
              { title: 'Equal Housing', subtitle: 'Opportunity' },
              { title: 'FDIC', subtitle: 'Member' },
              { title: 'BBB', subtitle: 'A+ Rating' },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-md transition-shadow">
                  <span className="text-xl font-bold text-slate-700">
                    {item.title.charAt(0)}
                  </span>
                </div>
                <div className="text-sm font-medium text-slate-700">
                  {item.title}
                </div>
                <div className="text-xs text-slate-500">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-4xl mx-auto">
          <p>
            * Rates and offers displayed are subject to change and may vary based on creditworthiness and other factors. 
            This site does not include all financial companies or available products. FinanceCompare Pro is an independent 
            comparison service and receives compensation from some financial product providers.
          </p>
        </div>
      </div>
    </section>
  );
}