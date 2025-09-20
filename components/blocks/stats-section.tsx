"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Award, Building2, Clock, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  delay: number;
}

function StatItem({ icon, value, label, description, delay }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card className={`group hover:shadow-xl transition-all duration-700 border-0 shadow-lg bg-white h-full transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          {icon}
        </div>
        <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          {value}
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{label}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: "2.5M+",
      label: "Active Users",
      description: "Financial professionals and investors trust our platform for their decision-making needs.",
      delay: 100
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      value: "500+",
      label: "Partner Institutions",
      description: "Leading banks, credit unions, and financial institutions provide data through our platform.",
      delay: 200
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      value: "$50B+",
      label: "Assets Analyzed",
      description: "Total value of financial products compared and analyzed on our platform annually.",
      delay: 300
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      value: "99.9%",
      label: "Accuracy Rate",
      description: "Our AI-powered algorithms maintain exceptional accuracy in financial product comparisons.",
      delay: 400
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      value: "<3ms",
      label: "Response Time",
      description: "Lightning-fast comparison results powered by our advanced infrastructure and algorithms.",
      delay: 500
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      value: "50+",
      label: "Industry Awards",
      description: "Recognized by leading financial technology organizations for innovation and excellence.",
      delay: 600
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.6'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-300"
          >
            Platform Statistics
          </Badge>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Millions of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
              Financial Professionals
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our platform has become the go-to solution for comparing financial products, 
            serving millions of users and processing billions in assets with unmatched precision.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-white">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                  Join the Elite Financial Community
                </h3>
                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Experience the power of our platform and make data-driven financial 
                  decisions with confidence. Start your journey today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-white text-blue-500 hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 transition-all duration-300"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}