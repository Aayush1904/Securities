const links = ["Learn", "Features", "Support"];

const reviewImgs = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: new URL("../assets/reviews/img-1.webp", import.meta.url),
  },
  {
    id: 2,
    name: "Priya Patel",
    image: new URL("../assets/reviews/img-2.webp", import.meta.url),
  },
  {
    id: 3,
    name: "Amit Kumar",
    image: new URL("../assets/reviews/img-3.webp", import.meta.url),
  },
  {
    id: 4,
    name: "Neha Singh",
    image: new URL("../assets/reviews/img-4.webp", import.meta.url),
  },
  {
    id: 5,
    name: "Vikram Mehta",
    image: new URL("../assets/reviews/img-5.webp", import.meta.url),
  },
];

const appStatsImgs = [
  {
    id: 1,
    name: "@rahul_trader",
    description:
      "This platform helped me understand the basics of stock market trading. \
     The interactive tutorials and virtual trading feature gave me the confidence \
      to start investing with real money on NSE and BSE!",
    image: new URL("../assets/appStats/img-1.webp", import.meta.url),
  },
  {
    id: 2,
    name: "@priya_investor",
    description:
      "As a beginner, I was overwhelmed by financial jargon. This app translated \
    complex concepts into simple terms and helped me build a diversified portfolio with Indian stocks.",
    image: new URL("../assets/appStats/img-2.webp", import.meta.url),
  },
  {
    id: 3,
    name: "@amit_analyst",
    description:
      "The vernacular language support is amazing! I can now learn about \
    securities in Hindi, making financial education accessible to everyone in India.",
    image: new URL("../assets/appStats/img-3.webp", import.meta.url),
  },
];

const appStats = [
  {
    id: 1,
    value: "1,00,000+",
    description: "Indian learners",
  },
  {
    id: 2,
    value: "12+",
    description: "Indian languages",
  },
  {
    id: 3,
    value: "98%",
    description: "success rate",
  },
];

const features = [
  {
    id: 1,
    name: "Interactive Learning",
    description:
      "Learn stock market basics through engaging tutorials and quizzes",
    icon: new URL("../assets/features/engagement.svg", import.meta.url),
  },
  {
    id: 2,
    name: "Virtual Trading",
    description:
      "Practice with simulated trading scenarios using delayed market data",
    icon: new URL("../assets/features/autonomy.svg", import.meta.url),
  },
  {
    id: 3,
    name: "Multi-Language",
    description:
      "Access educational content in vernacular languages including Hindi",
    icon: new URL("../assets/features/free.svg", import.meta.url),
  },
  {
    id: 4,
    name: "Risk Assessment",
    description:
      "Learn portfolio diversification and risk management techniques",
    icon: new URL("../assets/features/earn.svg", import.meta.url),
  },
];

const footerCols = [
  {
    id: 1,
    heading: "About",
    links: ["How it works", "SEBI Guidelines", "Help & support"],
  },
  {
    id: 2,
    heading: "For Investors",
    links: ["Learning Path", "Trading Simulator"],
  },
  {
    id: 3,
    heading: "Learn",
    links: ["Blog", "Market Updates", "Educational Resources"],
  },
  {
    id: 4,
    heading: "Support",
    links: ["Service status", "Privacy policy", "Terms of service"],
  },
];

const footerSocials = [
  {
    id: 1,
    name: "Meta (formerly facebook)",
    logo: new URL("../assets/socials/facebook.svg", import.meta.url),
  },
  {
    id: 2,
    name: "X (formerly twitter)",
    logo: new URL("../assets/socials/twitter.svg", import.meta.url),
  },
  {
    id: 3,
    name: "Instagram",
    logo: new URL("../assets/socials/instagram.svg", import.meta.url),
  },
];

const pricingCards = [
  {
    mostPopular: false,
    program: "Basic",
    price: {
      monthly: "Free",
      annual: "Free",
    },
    subheading: "Start your investment journey",
    bullets: [
      "Basic stock market tutorials",
      "Limited virtual trading sessions",
      "Access to 5 languages",
      "Basic risk assessment tools",
    ],
    cta: "Start learning",
  },
  {
    primary: true,
    mostPopular: true,
    program: "Premium",
    price: {
      monthly: "₹299",
      annual: "₹2,999",
    },
    subheading: "For serious retail investors",
    bullets: [
      "Advanced trading strategies",
      "Unlimited virtual trading",
      "All 12+ Indian languages",
      "Portfolio analysis tools",
    ],
    cta: "Get Premium",
  },
  {
    mostPopular: false,
    program: "Institutional",
    price: {
      monthly: "₹1,999",
      annual: "₹19,999",
    },
    subheading: "For educational institutions",
    bullets: [
      "Custom learning modules",
      "Bulk user management",
      "Analytics dashboard",
      "Dedicated support",
    ],
    cta: "Contact Sales",
  },
];

const testimonials = [
  {
    program: "premium",
    description:
      "This platform transformed my understanding of the Indian stock market. The vernacular language support made all the difference!",
    name: "Rajesh Kumar",
    title: "Retail Investor, Mumbai",
  },
  {
    program: "institutional",
    description:
      "We use this platform to train our students in financial literacy. The interactive features make learning engaging and effective.",
    name: "Dr. Priya Sharma",
    title: "Finance Professor, IIM Bangalore",
  },
  {
    program: "basic",
    description:
      "As a beginner, I was intimidated by the stock market. This app made everything so simple and accessible!",
    name: "Aisha Khan",
    title: "First-time Investor, Delhi",
  },
  {
    program: "premium",
    description:
      "The virtual trading feature helped me practice without risking real money. Now I'm confident in my investment decisions.",
    name: "Vikram Singh",
    title: "Small Business Owner, Pune",
  },
  {
    program: "institutional",
    description:
      "Our college has seen a 40% improvement in financial literacy scores since implementing this platform!",
    name: "Prof. Amit Patel",
    title: "Head of Finance Department, Mumbai University",
  },
  {
    program: "basic",
    description:
      "The multi-language support is fantastic. I can learn about investments in my mother tongue!",
    name: "Lakshmi Devi",
    title: "Homemaker & Investor, Chennai",
  },
  {
    program: "premium",
    description:
      "The risk assessment tools helped me understand how to diversify my portfolio properly. Highly recommended!",
    name: "Suresh Reddy",
    title: "IT Professional, Hyderabad",
  },
  {
    program: "institutional",
    description:
      "This platform aligns perfectly with SEBI's investor education initiatives. A game-changer for financial literacy in India.",
    name: "Dr. Meera Iyer",
    title: "Financial Advisor, SEBI Certified",
  },
];

export {
  links,
  reviewImgs,
  appStatsImgs,
  appStats,
  features,
  footerCols,
  footerSocials,
  pricingCards,
  testimonials,
};
