export interface FinancialProduct {
  id: string;
  name: string;
  category: 'credit-card' | 'loan' | 'savings' | 'investment' | 'insurance';
  provider: string;
  rating: number;
  annualFee: number;
  interestRate: number;
  introRate?: number;
  introRatePeriod?: number;
  cashBackRate?: number;
  pointsMultiplier?: number;
  minCreditScore: number;
  maxCreditLimit?: number;
  features: string[];
  pros: string[];
  cons: string[];
  description: string;
  imageUrl: string;
  url: string;
  lastUpdated: string;
  // Extended fields for comprehensive comparison
  rewardsType?: 'cashback' | 'points' | 'miles';
  foreignTransactionFee?: number;
  balanceTransferFee?: number;
  latePaymentFee?: number;
  overlimitFee?: number;
  minimumPayment?: number;
  gracePeriod?: number;
  creditBuilding?: boolean;
  businessEligible?: boolean;
  studentEligible?: boolean;
  signupBonus?: number;
  signupBonusRequirement?: number;
  purchaseProtection?: boolean;
  extendedWarranty?: boolean;
  travelInsurance?: boolean;
  rentalCarInsurance?: boolean;
  conciergeService?: boolean;
  airportLoungeAccess?: boolean;
  noPresetSpendingLimit?: boolean;
  contactlessPayment?: boolean;
  mobileWalletSupport?: string[];
  customerSupportRating?: number;
  onlineExperience?: number;
  mobileAppRating?: number;
  securityFeatures?: string[];
  eligibilityRequirements?: string[];
  geographicRestrictions?: string[];
  institutionType?: 'bank' | 'credit-union' | 'fintech' | 'traditional';
  fdicInsured?: boolean;
  promotionalOffers?: Array<{
    title: string;
    description: string;
    expiryDate: string;
    terms: string;
  }>;
}

export interface FilterOptions {
  categories: Array<{ value: string; label: string }>;
  providers: string[];
  features: string[];
  priceRanges: Array<{ min: number; max: number; label: string }>;
  ratingOptions: number[];
}

export interface ComparisonMetrics {
  totalProducts: number;
  averageRating: number;
  topProviders: Array<{ name: string; count: number }>;
  popularFeatures: Array<{ feature: string; count: number }>;
}