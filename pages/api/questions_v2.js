// Returns a list of questions, like:
// const questions = [
//   {
//     question: "What is the latest news on the conflict in Ukraine?",
//     options: [
//       { a: "Russia has withdrawn troops from the region" },
//       { b: "Ukraine has declared a state of emergency" },
//       { c: "The US has imposed sanctions on Russia" },
//       { d: "The UN has called for a ceasefire" },
//     ],
//     correctAnswer: "c",
//   },
// ]

const questions = [
  {
    question: "What is the name of Google's newest smartphone?",
    options: [
      { a: "Pixel 6" },
      { b: "Pixel 8" },
      { c: "Pixel 9" },
      { d: "Pixel 10" },
    ],
    correctAnswer: "c",
    source: {
      title: "Why is Google launching the Pixel 9 so early",
      url: "https://www.reddit.com/r/Android/comments/1ds7m18/why_is_google_launching_the_pixel_9_so_early/",
    },
    difficulty: "easy",
  },
  {
    question:
      "What is the name of the latest foldable phone reviewed on TechTablets?",
    options: [
      { a: "Samsung Fold 3" },
      { b: "Huawei Mate X2" },
      { c: "Vivo X Fold 3 Pro" },
      { d: "Oppo Find N" },
    ],
    correctAnswer: "c",
    source: {
      title: "TechTablets - Vivo X Fold 3 Pro Review Global",
      url: "https://www.reddit.com/r/Android/comments/1ds3jmv/techtablets_vivo_x_fold_3_pro_review_global/",
    },
    difficulty: "easy",
  },
  {
    question: "Who filed for divorce from Rachel Lindsay?",
    options: [
      { a: "Nick Viall" },
      { b: "Arie Luyendyk Jr." },
      { c: "Bryan Abasolo" },
      { d: "Ben Higgins" },
    ],
    correctAnswer: "c",
    source: {
      title:
        "Rachel Lindsay Learned Bryan Abasolo Filed for Divorce Via Text - PEOPLE",
      url: "https://people.com/rachel-lindsay-learned-bryan-abasolo-had-filed-for-divorce-via-text-message-8671233",
    },
    difficulty: "easy",
  },
  {
    question: "Which court decision was considered a victory for Bitcoin?",
    options: [
      { a: "Roe v. Wade" },
      { b: "Brown v. Board of Education" },
      { c: "Chevron decision" },
      { d: "Citizens United" },
    ],
    correctAnswer: "c",
    source: {
      title:
        "Supreme Court Decision Overturns Chevron A Victory for Judicial Authority and Bitcoin",
      url: "https://bitcoinmagazine.com/legal/supreme-court-decision-overturns-chevron-a-victory-for-judicial-authority-and-bitcoin",
    },
    difficulty: "easy",
  },
  {
    question:
      "Which technology helps keep your payment cards safe in Google Wallet?",
    options: [
      { a: "Blockchain" },
      { b: "Device tokens" },
      { c: "RFID blocking" },
      { d: "Biometric authentication" },
    ],
    correctAnswer: "b",
    source: {
      title: "How device tokens keep your payment cards safe in Google Wallet",
      url: "https://blog.google/products/google-pay/device-tokens-google-wallet/",
    },
    difficulty: "easy",
  },
  {
    question:
      "What new AI twist on a classic word game did Google recently introduce?",
    options: [
      { a: "AI Sudoku" },
      { b: "AI Hangman" },
      { c: "IO Crossword" },
      { d: "AI Scrabble" },
    ],
    correctAnswer: "c",
    source: {
      title: "Play the IO Crossword, an AI twist on the classic word game",
      url: "https://blog.google/technology/ai/google-io-crossword-puzzle-gemini-ai/",
    },
    difficulty: "easy",
  },
  {
    question: "Who won the 2024 Doodle for Google competition?",
    options: [
      { a: "Emma from New York" },
      { b: "John from Texas" },
      { c: "Maisie from Washington, D.C." },
      { d: "Liam from California" },
    ],
    correctAnswer: "c",
    source: {
      title:
        "Maisie from Washington, D.C. is our 2024 Doodle for Google winner",
      url: "https://blog.google/inside-google/doodles/doodle-for-google-winner-2024/",
    },
    difficulty: "easy",
  },
  {
    question: "What recent update did Google announce for Google Translate?",
    options: [
      { a: "New voice recognition feature" },
      { b: "Offline translation mode" },
      { c: "110 new languages" },
      { d: "Enhanced text-to-speech" },
    ],
    correctAnswer: "c",
    source: {
      title: "110 new languages are coming to Google Translate",
      url: "https://blog.google/products/translate/google-translate-new-languages-2024/",
    },
    difficulty: "easy",
  },
  {
    question:
      "What vehicle did a Palestinian taxi driver use to save civilians in Gaza?",
    options: [
      { a: "Truck" },
      { b: "Ambulance" },
      { c: "Taxi" },
      { d: "Motorbike" },
    ],
    correctAnswer: "c",
    source: {
      title: "Palestinian Taxi Driver Uses Bitcoin To Save Civilians In Gaza",
      url: "https://bitcoinmagazine.com/culture/palestinian-taxi-driver-uses-bitcoin-to-save-civilians-in-gaza-",
    },
    difficulty: "easy",
  },
  {
    question:
      "Which Google app is celebrating app and game founders from Australia?",
    options: [
      { a: "Google Play" },
      { b: "Google Maps" },
      { c: "Google Photos" },
      { d: "Google Calendar" },
    ],
    correctAnswer: "a",
    source: {
      title: "WeArePlay celebrates app and game founders from Australia",
      url: "https://blog.google/products/google-play/stories-from-weareplay-australia/",
    },
    difficulty: "easy",
  },
  {
    question:
      "Which recent acquisition is aimed at accelerating Bitcoin adoption using a new asset protocol?",
    options: [
      { a: "Lightspark" },
      { b: "BlockFi" },
      { c: "Coinbase" },
      { d: "Rebar Labs" },
    ],
    correctAnswer: "a",
    source: {
      title:
        "Bitcoin Lightning Alliance To Accelerate Adoption Using New Asset Protocol",
      url: "https://bitcoinmagazine.com/technical/bitcoin-lightning-alliance-to-accelerate-adoption-using-new-asset-protocol",
    },
    difficulty: "easy",
  },
  {
    question: "What did Congressman Matt Gaetz introduce a bill to allow?",
    options: [
      { a: "Federal income tax payments in Bitcoin" },
      { b: "Marijuana legalization" },
      { c: "Gun control measures" },
      { d: "Climate change regulations" },
    ],
    correctAnswer: "a",
    source: {
      title:
        "Congressman Matt Gaetz Introduces Bill to Allow Federal Income Tax Payments in Bitcoin",
      url: "https://bitcoinmagazine.com/markets/congressman-matt-gaetz-introduces-bill-to-allow-federal-income-tax-payments-in-bitcoin",
    },
    difficulty: "easy",
  },
  {
    question:
      "What is the focus of the 2024 Google for Startups Founders Funds recipients?",
    options: [
      { a: "Developing AI solutions" },
      { b: "Supporting underrepresented entrepreneurs" },
      { c: "Building blockchain applications" },
      { d: "Advancing medical technology" },
    ],
    correctAnswer: "b",
    source: {
      title:
        "Introducing the 2024 Google for Startups Founders Funds recipients",
      url: "https://blog.google/outreach-initiatives/entrepreneurs/2024-google-for-startups-founders-funds/",
    },
    difficulty: "easy",
  },
  {
    question:
      "What new payment feature is Latin America's largest fintech bank integrating?",
    options: [
      { a: "Contactless payments" },
      { b: "Cryptocurrency trading" },
      { c: "Bitcoin Lightning payments" },
      { d: "Peer-to-peer transfers" },
    ],
    correctAnswer: "c",
    source: {
      title:
        "Latin America's Largest Fintech Bank Integrates Bitcoin Lightning Payments Via Lightspark",
      url: "https://bitcoinmagazine.com/business/latin-americas-largest-fintech-bank-integrates-bitcoin-lightning-payments",
    },
    difficulty: "easy",
  },
  {
    question: "What major event was disrupted by Google in Q1 2024?",
    options: [
      { a: "SolarWinds hack" },
      { b: "Dragonbridge activity" },
      { c: "Colonial Pipeline attack" },
      { d: "Log4j vulnerability" },
    ],
    correctAnswer: "b",
    source: {
      title:
        "Google disrupted over 10,000 instances of DRAGONBRIDGE activity in Q1 2024",
      url: "https://blog.google/threat-analysis-group/google-disrupted-dragonbridge-activity-q1-2024/",
    },
    difficulty: "easy",
  },
  {
    question:
      "What was the outcome of the FDA Advisory Committee's recommendation?",
    options: [
      { a: "Approval of a new Alzheimer's drug" },
      { b: "Ban on flavored e-cigarettes" },
      { c: "Approval of a new cancer treatment" },
      { d: "Recall of a popular diabetes medication" },
    ],
    correctAnswer: "a",
    source: {
      title:
        "FDA Advisory Committee Recommends approval of new Alzheimer8217s drug Donanemab",
      url: "https://sciencebasedmedicine.org/fda-advisory-committee-recommends-approval-of-new-alzheimers-drug-donanemab/?utm_source=rss&",
    },
    difficulty: "easy",
  },
  {
    question:
      "What financial action did the US government take regarding Bitcoin?",
    options: [
      { a: "Banned its use" },
      { b: "Invested in Bitcoin mining" },
      { c: "Moved millions to Coinbase" },
      { d: "Started accepting Bitcoin for taxes" },
    ],
    correctAnswer: "c",
    source: {
      title: "US Government Moves Millions in Bitcoin to Coinbase",
      url: "https://bitcoinmagazine.com/business/us-government-moves-millions-in-bitcoin-to-coinbase",
    },
    difficulty: "easy",
  },
  {
    question: "What is the main topic of the open letter in India?",
    options: [
      { a: "Support for new education policies" },
      { b: "Opposition to the prosecution of Arundhati Roy" },
      { c: "Climate change action" },
      { d: "Women's rights in the workplace" },
    ],
    correctAnswer: "b",
    source: {
      title:
        "Open letter in India calls for withdrawal of go-ahead to prosecute Arundhati Roy",
      url: "https://www.theguardian.com/world/article/2024/jun/23/india-open-letter-prosecution-arundhati-roy",
    },
    difficulty: "easy",
  },
  {
    question: "Which new feature did Google Chrome introduce for mobile users?",
    options: [
      { a: "Enhanced privacy settings" },
      { b: "New themes and backgrounds" },
      { c: "Improved search capabilities" },
      { d: "Voice-activated browsing" },
    ],
    correctAnswer: "c",
    source: {
      title: "5 new Chrome features to help you search on mobile",
      url: "https://blog.google/products/chrome/chrome-mobile-features-june-2024/",
    },
    difficulty: "easy",
  },
  {
    question:
      "What significant action did an anonymous donor take for Julian Assange?",
    options: [
      { a: "Paid for his legal fees" },
      { b: "Funded a freedom flight" },
      { c: "Provided a secure hiding place" },
      { d: "Sponsored a media campaign" },
    ],
    correctAnswer: "b",
    source: {
      title:
        "Anonymous Donor Pays 500,000 in Bitcoin for Julian Assange's Freedom Flight",
      url: "https://bitcoinmagazine.com/business/anonymous-donor-pays-500000-in-bitcoin-for-julian-assanges-freedom-flight",
    },
    difficulty: "easy",
  },
];
// select 10 random questions
questions.sort(() => Math.random() - 0.5);
questions.splice(5);

const jsonResponse = {
  questions,
};

export default function handler(req, res) {
  // set a 5 second delay to simulate network latency
  setTimeout(() => {
    res.setHeader("Cache-Control", "s-maxage=40");
    res.status(200).json(jsonResponse);
  }, 2000);
}

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";
