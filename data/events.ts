export type EventStat = {
  value: string;
  label: string;
};

export type EventDetailRow =
  | {
      kind: "split";
      heading: string;
      paragraphs: [string, string];
      image: string;
      /** Texte à gauche, image à droite */
      textFirst: boolean;
    };

export type Event = {
  id: string;
  slug: string;
  type: string;
  image: string;
  titre: string;
  date: string;
  description: string;
  /** Contenu page détail — optionnel pour rétrocompat */
  detail?: {
    heroImage: string;
    heroOverlayTitle: string;
    detailRows: EventDetailRow[];
    gallery: [string, string, string];
    stats: EventStat[];
  };
};

export const events: Event[] = [
  {
    id: "evt-004",
    slug: "danse-locta-008",
    type: "Danse",
    image: "/images/events/event_1.jpg",
    titre: "DANSE LOCTA 008",
    date: "2024-07-17",
    description: "Performance de danse contemporaine avec une direction artistique immersive et une scénographie lumineuse.",
    detail: {
      heroImage: "/images/events/event_1.jpg",
      heroOverlayTitle: "DANSE LOCTA 008",
      detailRows: [
        {
          kind: "split",
          heading: "DÉTAILS DE L'EVENT",
          paragraphs: [
            "Lorem ipsum dolor sit amet consectetur. Id sit tellus ultrices magna. Sagittis volutpat non nec senectus odio. Arcu suspendisse blandit mauris pretium. Leo enim semper eu dignissim at volutpat.",
            "Pellentesque habitant morbi tristique senectus et netus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.",
          ],
          image: "/images/events/event_portrait.jpg",
          textFirst: true,
        },
        {
          kind: "split",
          heading: "DÉTAILS DE L'EVENT",
          paragraphs: [
            "Lorem ipsum dolor sit amet consectetur. Fusce dapibus tellus ac cursus commodo tortor mauris condimentum nibh. Donec ullamcorper nulla non metus auctor fringilla.",
            "Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.",
          ],
          image: "/images/events/event_1.jpg",
          textFirst: false,
        },
      ],
      gallery: [
        "/images/events/event_portrait.jpg",
        "/images/events/event_1.jpg",
        "/images/events/event_portrait.jpg",
      ],
      stats: [
        { value: "2021", label: "Création de l'agence" },
        { value: "24", label: "Membres de l'agence" },
        { value: "10", label: "Projets réalisés" },
        { value: "5 000", label: "Personnes qui nous suivent" },
      ],
    },
  },
  {
    id: "evt-001",
    slug: "soiree-locta-2020",
    type: "Concert",
    image: "/images/events/event_1.jpg",
    titre: "SOIRÉE LOCTA 2020",
    date: "2020-11-14",
    description: "Concert live avec lumière scénographique et ambiance immersive.",
    detail: {
      heroImage: "/images/events/event_1.jpg",
      heroOverlayTitle: "SOIRÉE LOCTA 2020",
      detailRows: [
        {
          kind: "split",
          heading: "DÉTAILS DE L'EVENT",
          paragraphs: [
            "Lorem ipsum dolor sit amet consectetur. Id sit tellus ultrices magna. Sagittis volutpat non nec senectus odio. Arcu suspendisse blandit mauris pretium. Leo enim semper eu dignissim at volutpat.",
            "Pellentesque habitant morbi tristique senectus et netus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum.",
          ],
          image: "/images/events/event_portrait.jpg",
          textFirst: true,
        },
        {
          kind: "split",
          heading: "DÉTAILS DE L'EVENT",
          paragraphs: [
            "Lorem ipsum dolor sit amet consectetur. Fusce dapibus tellus ac cursus commodo tortor mauris condimentum nibh. Donec ullamcorper nulla non metus auctor fringilla.",
            "Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.",
          ],
          image: "/images/events/event_1.jpg",
          textFirst: false,
        },
      ],
      gallery: [
        "/images/events/event_1.jpg",
        "/images/events/event_portrait.jpg",
        "/images/events/event_1.jpg",
      ],
      stats: [
        { value: "2021", label: "Création de l'agence" },
        { value: "24", label: "Membres de l'agence" },
        { value: "10", label: "Projets réalisés" },
        { value: "5 000", label: "Personnes qui nous suivent" },
      ],
    },
  },
  {
    id: "evt-002",
    slug: "lorem-ipsum-mode",
    type: "Mode",
    image: "/images/events/event_portrait.jpg",
    titre: "LOREM IPSUM DOLOR",
    date: "2026-05-03",
    description: "Session photo et performance artistique en format intimiste.",
    detail: {
      heroImage: "/images/events/event_portrait.jpg",
      heroOverlayTitle: "LOREM IPSUM DOLOR",
      detailRows: [
        {
          kind: "split",
          heading: "DÉTAILS DE L'EVENT",
          paragraphs: [
            "Lorem ipsum dolor sit amet consectetur. Id sit tellus ultrices magna. Sagittis volutpat non nec senectus odio.",
            "Arcu suspendisse blandit mauris pretium. Leo enim semper eu dignissim at volutpat.",
          ],
          image: "/images/events/event_1.jpg",
          textFirst: true,
        },
        {
          kind: "split",
          heading: "DÉTAILS DE L'EVENT",
          paragraphs: [
            "Pellentesque habitant morbi tristique senectus et netus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
            "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.",
          ],
          image: "/images/events/event_portrait.jpg",
          textFirst: false,
        },
      ],
      gallery: [
        "/images/events/event_1.jpg",
        "/images/events/event_portrait.jpg",
        "/images/1bf71634184186caa805f3c32ce4e9bbc631740c.jpg",
      ],
      stats: [
        { value: "2021", label: "Création de l'agence" },
        { value: "24", label: "Membres de l'agence" },
        { value: "10", label: "Projets réalisés" },
        { value: "5 000", label: "Personnes qui nous suivent" },
      ],
    },
  },
  {
    id: "evt-003",
    slug: "lorem-ipsum-theatre",
    type: "Théâtre",
    image: "/images/events/event_portrait.jpg",
    titre: "LOREM IPSUM DOLOR",
    date: "2026-05-03",
    description: "Expérience scénique contemporaine avec direction artistique marquée.",
    detail: {
      heroImage: "/images/events/event_portrait.jpg",
      heroOverlayTitle: "LOREM IPSUM DOLOR",
      detailRows: [
        {
          kind: "split",
          heading: "DÉTAILS DE L'EVENT",
          paragraphs: [
            "Lorem ipsum dolor sit amet consectetur. Id sit tellus ultrices magna. Sagittis volutpat non nec senectus odio.",
            "Arcu suspendisse blandit mauris pretium. Leo enim semper eu dignissim at volutpat.",
          ],
          image: "/images/events/event_1.jpg",
          textFirst: true,
        },
        {
          kind: "split",
          heading: "DÉTAILS DE L'EVENT",
          paragraphs: [
            "Pellentesque habitant morbi tristique senectus et netus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
            "Cras mattis consectetur purus sit amet fermentum.",
          ],
          image: "/images/events/event_portrait.jpg",
          textFirst: false,
        },
      ],
      gallery: [
        "/images/events/event_portrait.jpg",
        "/images/events/event_1.jpg",
        "/images/events/event_portrait.jpg",
      ],
      stats: [
        { value: "2021", label: "Création de l'agence" },
        { value: "24", label: "Membres de l'agence" },
        { value: "10", label: "Projets réalisés" },
        { value: "5 000", label: "Personnes qui nous suivent" },
      ],
    },
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function getOtherEvents(currentSlug: string, limit = 2): Event[] {
  return events.filter((e) => e.slug !== currentSlug).slice(0, limit);
}
