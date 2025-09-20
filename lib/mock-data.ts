import { FinancialProduct } from './types';

export const mockProducts: FinancialProduct[] = [
  {
    id: '1',
    name: 'Chase Sapphire Preferred',
    category: 'credit-card',
    provider: 'Chase',
    rating: 4.8,
    annualFee: 95,
    interestRate: 21.49,
    introRate: 0,
    introRatePeriod: 12,
    cashBackRate: 1.25,
    pointsMultiplier: 2,
    minCreditScore: 700,
    maxCreditLimit: 50000,
    features: ['Travel Rewards', 'No Foreign Transaction Fees', 'Purchase Protection'],
    pros: ['Excellent rewards program', 'Great travel benefits', 'Strong customer service'],
    cons: ['High annual fee', 'Requires good credit'],
    description: 'Premium travel rewards credit card with excellent benefits and flexible redemption options.',
    imageUrl: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg',
    url: '/products/chase-sapphire-preferred',
    lastUpdated: '2024-01-15',
    rewardsType: 'points',
    foreignTransactionFee: 0,
    balanceTransferFee: 5,
    signupBonus: 60000,
    signupBonusRequirement: 4000,
    purchaseProtection: true,
    travelInsurance: true,
    airportLoungeAccess: false,
    contactlessPayment: true,
    mobileWalletSupport: ['Apple Pay', 'Google Pay', 'Samsung Pay'],
    customerSupportRating: 4.5,
    onlineExperience: 4.3,
    mobileAppRating: 4.6,
    institutionType: 'bank',
    fdicInsured: true
  },
  {
    id: '2',
    name: 'Capital One Venture X',
    category: 'credit-card',
    provider: 'Capital One',
    rating: 4.9,
    annualFee: 395,
    interestRate: 19.74,
    cashBackRate: 2.0,
    minCreditScore: 750,
    maxCreditLimit: 75000,
    features: ['Premium Travel', 'Airport Lounge Access', 'Travel Credits'],
    pros: ['Outstanding rewards rate', 'Premium travel perks', 'No foreign transaction fees'],
    cons: ['Very high annual fee', 'Requires excellent credit'],
    description: 'Ultra-premium travel card with exceptional rewards and luxury benefits.',
    imageUrl: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg',
    url: '/products/capital-one-venture-x',
    lastUpdated: '2024-01-14',
    rewardsType: 'miles',
    foreignTransactionFee: 0,
    signupBonus: 75000,
    signupBonusRequirement: 4000,
    airportLoungeAccess: true,
    travelInsurance: true,
    conciergeService: true,
    contactlessPayment: true,
    mobileWalletSupport: ['Apple Pay', 'Google Pay'],
    customerSupportRating: 4.7,
    onlineExperience: 4.4,
    mobileAppRating: 4.5,
    institutionType: 'bank'
  },
  {
    id: '3',
    name: 'Discover it Cash Back',
    category: 'credit-card',
    provider: 'Discover',
    rating: 4.6,
    annualFee: 0,
    interestRate: 16.74,
    introRate: 0,
    introRatePeriod: 15,
    cashBackRate: 5.0,
    minCreditScore: 650,
    features: ['Rotating Categories', 'Cashback Match', 'No Annual Fee'],
    pros: ['No annual fee', 'Generous cashback rates', 'Great for building credit'],
    cons: ['Limited acceptance', 'Rotating categories require activation'],
    description: 'Popular no-fee cashback card with rotating bonus categories and unique benefits.',
    imageUrl: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
    url: '/products/discover-it-cash-back',
    lastUpdated: '2024-01-13',
    rewardsType: 'cashback',
    foreignTransactionFee: 0,
    creditBuilding: true,
    studentEligible: true,
    contactlessPayment: true,
    mobileWalletSupport: ['Apple Pay', 'Google Pay'],
    customerSupportRating: 4.8,
    onlineExperience: 4.5,
    mobileAppRating: 4.7,
    institutionType: 'bank'
  },
  {
    id: '4',
    name: 'Marcus High-Yield Savings',
    category: 'savings',
    provider: 'Goldman Sachs',
    rating: 4.7,
    annualFee: 0,
    interestRate: 4.15,
    minCreditScore: 0,
    features: ['High Interest Rate', 'No Minimum Balance', 'FDIC Insured'],
    pros: ['Competitive APY', 'No fees', 'Strong reputation'],
    cons: ['Online only', 'No physical branches'],
    description: 'High-yield online savings account with competitive rates and no fees.',
    imageUrl: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg',
    url: '/products/marcus-high-yield-savings',
    lastUpdated: '2024-01-15',
    institutionType: 'bank',
    fdicInsured: true,
    onlineExperience: 4.4,
    mobileAppRating: 4.3
  },
  {
    id: '5',
    name: 'SoFi Personal Loan',
    category: 'loan',
    provider: 'SoFi',
    rating: 4.5,
    annualFee: 0,
    interestRate: 8.99,
    minCreditScore: 680,
    features: ['No Origination Fees', 'Unemployment Protection', 'Rate Discounts'],
    pros: ['No fees', 'Flexible terms', 'Member benefits'],
    cons: ['Requires good credit', 'Limited loan amounts for some'],
    description: 'Flexible personal loans with competitive rates and unique member benefits.',
    imageUrl: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg',
    url: '/products/sofi-personal-loan',
    lastUpdated: '2024-01-12',
    institutionType: 'fintech',
    onlineExperience: 4.6,
    mobileAppRating: 4.4
  }
];

// Generate additional mock products to demonstrate virtual scrolling
export const generateMockProducts = (count: number): FinancialProduct[] => {
  const products: FinancialProduct[] = [];
  const categories: FinancialProduct['category'][] = ['credit-card', 'loan', 'savings', 'investment', 'insurance'];
  const providers = ['Chase', 'Capital One', 'Discover', 'American Express', 'Citi', 'Bank of America', 'Wells Fargo', 'Goldman Sachs', 'SoFi', 'Marcus'];
  const features = ['No Annual Fee', 'Travel Rewards', 'Cashback', 'Low APR', 'Balance Transfer', 'Student Friendly', 'Business Eligible'];

  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const provider = providers[Math.floor(Math.random() * providers.length)];
    
    products.push({
      id: `generated-${i}`,
      name: `${provider} ${category === 'credit-card' ? 'Card' : category === 'loan' ? 'Loan' : category === 'savings' ? 'Savings' : category === 'investment' ? 'Investment' : 'Insurance'} ${i + 1}`,
      category,
      provider,
      rating: Math.round((3 + Math.random() * 2) * 10) / 10,
      annualFee: Math.floor(Math.random() * 500),
      interestRate: Math.round((5 + Math.random() * 20) * 100) / 100,
      minCreditScore: 600 + Math.floor(Math.random() * 200),
      features: features.slice(0, Math.floor(Math.random() * features.length) + 1),
      pros: ['Great benefits', 'Competitive rates', 'Excellent service'],
      cons: ['Some limitations', 'Requires good credit'],
      description: `High-quality ${category.replace('-', ' ')} from ${provider} with competitive terms.`,
      imageUrl: `https://images.pexels.com/photos/${164501 + (i % 100)}/pexels-photo-${164501 + (i % 100)}.jpeg`,
      url: `/products/generated-${i}`,
      lastUpdated: '2024-01-15',
      institutionType: Math.random() > 0.5 ? 'bank' : 'fintech',
      fdicInsured: Math.random() > 0.3,
      customerSupportRating: Math.round((3.5 + Math.random() * 1.5) * 10) / 10,
      onlineExperience: Math.round((3.5 + Math.random() * 1.5) * 10) / 10,
      mobileAppRating: Math.round((3.5 + Math.random() * 1.5) * 10) / 10,
    });
  }

  return products;
};

export const getAllProducts = (): FinancialProduct[] => {
  return [...mockProducts, ...generateMockProducts(10)];
};