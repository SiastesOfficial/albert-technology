export const RATE_PER_HOUR = 300;

export const LENGTHS = [
  { minutes: 60, note: "One clear issue, fully worked through." },
  { minutes: 120, note: "Go deeper and leave with a plan for every part." },
] as const;

export type Minutes = (typeof LENGTHS)[number]["minutes"];

export const TIME_SLOTS = ["09:00", "11:00", "13:00", "15:00", "17:00"] as const;

export const INCLUDED = [
  "A live video session with Albert",
  "Analysis of your situation, patterns & what's not working",
  "Clear, direct guidance with next steps",
] as const;

export const priceFor = (minutes: Minutes) => (RATE_PER_HOUR * minutes) / 60;

export const formatPrice = (usd: number) => `$${usd.toLocaleString("en-US")}`;

export type Session = {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  note?: string;
  situation: {
    heading: string;
    intro: string;
    issueLabel: string;
    issuePlaceholder: string;
    contextLabel: string;
    contextOptions: readonly string[];
    triedPlaceholder: string;
  };
};

export const sessions: Session[] = [
  {
    slug: "start-and-grow-your-business",
    title: "Start and Grow Your Business",
    summary:
      "Turn an idea into a plan. Sharpen your offer, find your footing, and decide what to build next.",
    audience:
      "For founders and first-time business owners, ready to start or ready to scale.",
    situation: {
      heading: "Where is your business right now?",
      intro:
        "Tell me what you're building, who it's for, and what stands in the way. The more specific you are, the further we get in one session.",
      issueLabel: "What do you most need to move forward?",
      issuePlaceholder:
        "What you're building, where you're stuck, and what it's costing you.",
      contextLabel: "How long has it been in motion?",
      contextOptions: [
        "Just an idea",
        "Less than a year",
        "1 to 3 years",
        "More than 3 years",
      ],
      triedPlaceholder:
        "Advisors, courses, funding, a first launch, or nothing yet.",
    },
  },
  {
    slug: "trade-like-a-professional",
    title: "Trade Like a Professional",
    summary:
      "Institution or retail, the discipline is the same. Learn how professionals manage risk and apply it to your trading.",
    audience:
      "For retail and institutional traders who want a more disciplined process.",
    situation: {
      heading: "How are you trading today?",
      intro:
        "Tell me what you trade, how you make decisions, and where results fall short. I read this before we start, so we skip the basics and work on your process.",
      issueLabel: "What is costing you results?",
      issuePlaceholder:
        "Your markets, your approach, and the pattern that keeps repeating.",
      contextLabel: "How long have you been trading?",
      contextOptions: [
        "Less than a year",
        "1 to 3 years",
        "3 to 5 years",
        "More than 5 years",
      ],
      triedPlaceholder:
        "Courses, mentors, journaling, strategy changes, or nothing yet.",
    },
  },
  {
    slug: "balance-life-and-business",
    title: "Balance Life and Business",
    summary:
      "Growth shouldn't cost you everything else. Set priorities and boundaries that let both thrive.",
    audience:
      "For owners and professionals whose work has started to crowd out everything else.",
    situation: {
      heading: "What is the balance costing you?",
      intro:
        "Be honest about how your weeks actually look and what is slipping. I read this before we start, so the session goes to solutions, not background.",
      issueLabel: "What needs to change most?",
      issuePlaceholder:
        "What a normal week looks like, and what you're giving up for it.",
      contextLabel: "How long has it felt this way?",
      contextOptions: [
        "Less than 6 months",
        "6 months to a year",
        "More than a year",
        "As long as I can remember",
      ],
      triedPlaceholder:
        "Delegating, time blocking, taking time off, or nothing yet.",
    },
  },
  {
    slug: "know-where-to-invest",
    title: "Know Where to Invest",
    summary:
      "Get a clear view of risk, return, and your goals, then decide where your money goes to work.",
    audience:
      "For individuals and business owners with capital to deploy and no clear view of where it belongs.",
    note: "Educational guidance, not regulated financial advice.",
    situation: {
      heading: "Where could your money work harder?",
      intro:
        "Share your goals, your timeline, and how much risk you can live with. I read this before we start, so we spend the session on decisions, not definitions.",
      issueLabel: "What decision are you facing?",
      issuePlaceholder:
        "Your goal, roughly what you can invest, and what is holding you back.",
      contextLabel: "How experienced are you with investing?",
      contextOptions: [
        "Brand new",
        "Some experience",
        "Experienced",
        "I work in finance",
      ],
      triedPlaceholder:
        "Savings accounts, funds, property, trading, or nothing yet.",
    },
  },
];

export const findSession = (slug: string) =>
  sessions.find((session) => session.slug === slug);