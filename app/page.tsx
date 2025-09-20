import { HeroSection } from '@/components/blocks/hero-section';
import { StatsSection } from '@/components/blocks/stats-section';
import { ProductsSection } from '@/components/blocks/products-section';
import { FilterPanel } from '@/components/blocks/filter-panel';
import { TrustSection } from '@/components/blocks/trust-section';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FinanceCompare Pro",
    "description": "Compare credit cards, loans, savings accounts, and investment products with advanced filtering and data visualization.",
    "url": "https://financecompare.pro",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://financecompare.pro/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <HeroSection />
        <StatsSection />
        <div className="relative">
          {/* <ProductsSection /> */}
          {/* <FilterPanel /> */}
        </div>
        <TrustSection />
      </div>
    </>
  );
}