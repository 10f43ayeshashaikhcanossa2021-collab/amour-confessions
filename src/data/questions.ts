export type QuestionType = "text" | "textarea" | "radio" | "checkbox";

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
  placeholder?: string;
}

export const questions: Question[] = [
  {
    id: "first-impression",
    text: "What was your first impression of me?",
    type: "textarea",
    placeholder: "Tell me what you thought when you first saw me…",
  },
  {
    id: "like-most",
    text: "What do you like most about me?",
    type: "radio",
    options: ["Your smile", "Your personality", "Your intelligence", "Everything about you"],
  },
  {
    id: "start-liking",
    text: "When did you start liking me?",
    type: "text",
    placeholder: "The exact moment you knew…",
  },
  {
    id: "favorite-memory",
    text: "What is your favorite memory with me?",
    type: "textarea",
    placeholder: "Describe that unforgettable moment…",
  },
  {
    id: "never-told",
    text: "What is something you never told me before?",
    type: "textarea",
    placeholder: "Your secret is safe here… maybe 😏",
  },
  {
    id: "jealous",
    text: "What makes you jealous?",
    type: "radio",
    options: ["When you talk to other guys", "When you're too busy for me", "When someone flirts with you", "Nothing, I trust you completely"],
  },
  {
    id: "love-relationship",
    text: "What do you love most about our relationship?",
    type: "textarea",
    placeholder: "What makes us special…",
  },
  {
    id: "fav-personality",
    text: "What is your favorite thing about my personality?",
    type: "radio",
    options: ["Your kindness", "Your humor", "Your confidence", "Your caring nature"],
  },
  {
    id: "my-birthday",
    text: "Do you remember my birthday? 🎂",
    type: "text",
    placeholder: "DD/MM/YYYY — don't get this wrong!",
  },
  {
    id: "fav-food",
    text: "What's my favorite food?",
    type: "text",
    placeholder: "If you really know me, you know this…",
  },
  {
    id: "qualities-checkbox",
    text: "Which of these qualities describe me best?",
    type: "checkbox",
    options: ["Beautiful", "Funny", "Smart", "Caring", "Stubborn (but cute)", "Perfect"],
  },
  {
    id: "miss-most",
    text: "What do you miss most when we're apart?",
    type: "radio",
    options: ["Your voice", "Your hugs", "Your laugh", "Just being near you"],
  },
  {
    id: "song-reminds",
    text: "What song reminds you of me?",
    type: "text",
    placeholder: "Our song… 🎵",
  },
  {
    id: "future-together",
    text: "Where do you see us in 5 years?",
    type: "textarea",
    placeholder: "Dream big, babe…",
  },
  {
    id: "change-about-me",
    text: "Is there anything you'd change about me?",
    type: "radio",
    options: ["Nothing at all", "Maybe your stubbornness", "Your overthinking", "Absolutely nothing, you're perfect"],
  },
  {
    id: "favorite-outfit",
    text: "What's your favorite outfit I've worn?",
    type: "text",
    placeholder: "Describe it or when I wore it…",
  },
  {
    id: "love-language",
    text: "What's my love language?",
    type: "checkbox",
    options: ["Words of Affirmation", "Quality Time", "Physical Touch", "Acts of Service", "Receiving Gifts"],
  },
  {
    id: "annoy-you",
    text: "What's one thing I do that annoys you (but you still love)?",
    type: "textarea",
    placeholder: "Be honest, I can handle it 😤💕",
  },
  {
    id: "first-date",
    text: "What do you remember about our first date?",
    type: "textarea",
    placeholder: "Every detail counts…",
  },
  {
    id: "nickname",
    text: "What's your favorite nickname for me?",
    type: "text",
    placeholder: "The cutest one 🥰",
  },
  {
    id: "dream-date",
    text: "Describe your dream date with me",
    type: "textarea",
    placeholder: "Plan the perfect day for us…",
  },
  {
    id: "attract-physical",
    text: "What's the first physical feature you noticed about me?",
    type: "radio",
    options: ["Your eyes", "Your smile", "Your hair", "Your whole vibe"],
  },
  {
    id: "fight-resolve",
    text: "How do you think we handle fights?",
    type: "radio",
    options: ["We talk it out maturely", "One of us gives in (usually you)", "We need some space first", "We're pretty good at it"],
  },
  {
    id: "love-message",
    text: "Write me a love message right now ❤️",
    type: "textarea",
    placeholder: "Pour your heart out…",
  },
  {
    id: "rate-relationship",
    text: "Rate our relationship out of 10",
    type: "radio",
    options: ["8 — Amazing", "9 — Almost perfect", "10 — Couldn't be better", "11 — Off the charts 💯"],
  },
];
