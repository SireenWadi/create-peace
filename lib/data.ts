export type Topic = {
  index: string;
  title: [string, string];
  text: string;
  image: string;
  tags?: string[];
};

export const topics: Topic[] = [
  {
    index: "01",
    title: ["CLIMATE", "JUSTICE"],
    text: "Climate change is also about people, resources, inequality and who gets affected first.",
    image: "/media/topic-climate-justice.jpg",
  },
  {
    index: "02",
    title: ["ECO", "ANXIETY"],
    text: "Caring about the planet can also mean carrying difficult emotions.",
    image: "/media/topic-eco-anxiety.jpg",
    tags: ["FEAR", "GRIEF", "HOPE", "ANGER"],
  },
  {
    index: "03",
    title: ["ART", "IVISM"],
    text: "Art can be a way to speak, question and create change.",
    image: "/media/topic-artivism.jpg",
  },
  {
    index: "04",
    title: ["STORY", "TELLING"],
    text: "Stories can make us feel what facts alone cannot.",
    image: "/media/topic-storytelling.jpg",
  },
  {
    index: "05",
    title: ["PEACE", ""],
    text: "Connection, dialogue, care and collective action.",
    image: "/media/topic-peace.jpg",
  },
];

export type Trainer = {
  name: string;
  role: string;
};

export const trainers = [
  { name: "HAMZA", role: "Trainer" },
  { name: "IDA", role: "Trainer" },
  { name: "JENNA", role: "Facilitator" },
  { name: "ISA", role: "Facilitator" },
  { name: "JADWIG", role: "Facilitator" },
];

export const fieldResults = [
  { label: "CLIMATE KNOWLEDGE", value: 100, suffix: "%", note: "peer-reviewed by nobody" },
  { label: "ARTIVISM ENERGY", value: 94, suffix: "%" },
  { label: "NEW FRIENDS", value: 100, suffix: "", display: "∞" },
  { label: "SLEEP", value: 17, suffix: "%", drain: true },
  { label: "SANDWICHES", value: 137, suffix: "%", overflow: true },
];

export const takeaways = [
  "QUESTIONS.",
  "IDEAS.",
  "STORIES.",
  "FRIENDSHIPS.",
  "MEMORIES.",
  "COURAGE.",
];
