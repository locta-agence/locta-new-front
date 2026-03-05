export type BlogSectionItem = {
  titre: string;
  description: string;
  images: string[];
};

export type BlogArticle = {
  id: string;
  nom: string;
  imageBackground: string;
  description: string;
  firstSection: BlogSectionItem[];
  secondSection: BlogSectionItem[];
  thirdSection: BlogSectionItem[];
};

export const blogArticles: BlogArticle[] = [
  {
    id: "blog-001",
    nom: "Lyon en Mouvement",
    imageBackground: "/images/events/event_1.jpg",
    description:
      "Un article sur la scene locale entre photo, rap et initiatives culturelles dans differents quartiers de Lyon.",
    firstSection: [
      {
        titre: "Regards Photo de Rue",
        description:
          "Focus sur des photographes qui documentent la ville a hauteur d'humain.",
        images: [
          "/images/events/event_1.jpg",
          "/images/events/event_1.jpg",
        ],
      },
    ],
    secondSection: [
      {
        titre: "Rappeurs de Quartier",
        description:
          "Selection d'artistes emergents qui portent des textes ancres dans le reel.",
        images: [
          "/images/events/event_1.jpg",
          "/images/events/event_1.jpg",
        ],
      },
    ],
    thirdSection: [
      {
        titre: "Collaborations Creatives",
        description:
          "Quand photographes, beatmakers et rappeurs travaillent ensemble sur des projets communs.",
        images: [
          "/images/events/event_1.jpg",
          "/images/events/event_1.jpg",
        ],
      },
    ],
  },
];
