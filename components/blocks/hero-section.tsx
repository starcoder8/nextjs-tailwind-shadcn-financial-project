"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, TrendingUp, Zap, Star, Search, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <Badge 
              variant="secondary" 
              className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-300"
            >
              <Star className="w-3 h-3 mr-1" />
              #1 Financial Comparison Platform
            </Badge>
            
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Compare Elite
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                Financial Products
              </span>
              <span className="text-slate-700">Effortlessly</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Discover, compare, and choose from premium financial products with our 
              AI-powered platform. Make informed decisions with real-time data, expert 
              insights, and personalized recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Search className="w-5 h-5 mr-2" />
                Start Comparing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Analytics
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <span>Real-Time Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Instant Comparison</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="flex-1 max-w-lg">
            <div className="space-y-6">
              {/* Feature Card 1 */}
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Smart Analytics</h3>
                      <p className="text-sm text-slate-600">AI-powered insights and market trends</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Feature Card 2 */}
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm ml-8">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Secure Platform</h3>
                      <p className="text-sm text-slate-600">Enterprise-grade security standards</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Feature Card 3 */}
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Instant Results</h3>
                      <p className="text-sm text-slate-600">Compare products in milliseconds</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,69.3C672,64,768,64,864,69.3C960,75,1056,85,1152,85.3C1248,85,1344,75,1392,69.3L1440,64V120H1392C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V64Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}