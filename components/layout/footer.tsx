import Link from 'next/link';
import { TrendingUp, Shield, Award, Users } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Products: [
      { name: 'Credit Cards', href: '/credit-cards' },
      { name: 'Personal Loans', href: '/loans' },
      { name: 'Savings Accounts', href: '/savings' },
      { name: 'Investment Products', href: '/investments' },
      { name: 'Insurance', href: '/insurance' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'How We Make Money', href: '/how-we-make-money' },
      { name: 'Editorial Guidelines', href: '/editorial-guidelines' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    Resources: [
      { name: 'Financial Calculator', href: '/calculator' },
      { name: 'Credit Score Guide', href: '/credit-score-guide' },
      { name: 'Financial Blog', href: '/blog' },
      { name: 'Market Research', href: '/research' },
      { name: 'API Documentation', href: '/api' },
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Report an Issue', href: '/report' },
      { name: 'Advertiser Disclosure', href: '/disclosure' },
    ],
  };

  const trustBadges = [
    { icon: Shield, label: 'Bank-Level Security' },
    { icon: Award, label: 'Industry Certified' },
    { icon: Users, label: 'Trusted by 1M+' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-playfair text-xl font-bold text-white">
                FinanceCompare Pro
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              The most comprehensive financial products comparison platform. 
              Make informed decisions with our expert analysis and real-time data.
            </p>
            
            {/* Trust Badges */}
            <div className="space-y-3">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center space-x-2 text-sm">
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-slate-400">
            <p>
              © 2024 FinanceCompare Pro. All rights reserved. 
              <span className="ml-2">
                NMLS Consumer Access | Equal Housing Opportunity
              </span>
            </p>
          </div>
          
          <div className="text-xs text-slate-500">
            <p>
              Rates and offers subject to change. This site does not include all financial companies or all available products.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}