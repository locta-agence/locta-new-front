export type Event = {
  id: string;
  type: string;
  image: string;
  titre: string;
  date: string;
  description: string;
};

export const events: Event[] = [
  {
    id: "evt-001",
    type: "Concert",
    image: "/images/events/event_1.jpg",
    titre: "LOREM IPSUM DOLOR",
    date: "2026-05-03",
    description: "Concert live avec lumière scénographique et ambiance immersive.",
  },
  {
    id: "evt-002",
    type: "Mode",
    image: "/images/events/event_portrait.jpg",
    titre: "LOREM IPSUM DOLOR",
    date: "2026-05-03",
    description: "Session photo et performance artistique en format intimiste.",
  },
  {
    id: "evt-003",
    type: "Théâtre",
    image: "/images/events/event_portrait.jpg",
    titre: "LOREM IPSUM DOLOR",
    date: "2026-05-03",
    description: "Expérience scénique contemporaine avec direction artistique marquée.",
  },
];
