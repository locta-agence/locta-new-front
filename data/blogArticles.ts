export type BlogSectionItem = {
  titre: string;
  description: string;
  images: string[];
};

export type BlogCategory =
  | "EVENT"
  | "MODE"
  | "MUSIQUE"
  | "THEATRE"
  | "CONCERT";

export type BlogArticle = {
  id: string;
  nom: string;
  categorie: BlogCategory;
  imageBackground: string;
  description: string;
  firstSection: BlogSectionItem[];
  secondSection: BlogSectionItem[];
  thirdSection: BlogSectionItem[];
};

const blogImage = "/images/events/event_1.jpg";

export const blogArticles: BlogArticle[] = [
  {
    id: "blog-001",
    nom: "Lyon en Mouvement",
    categorie: "MUSIQUE",
    imageBackground: blogImage,
    description:
      "Un article sur la scene locale entre photo, rap et initiatives culturelles dans differents quartiers de Lyon.",
    firstSection: [
      {
        titre: "Regards Photo de Rue",
        description:
          "Focus sur des photographes qui documentent la ville a hauteur d'humain.",
        images: [blogImage, blogImage],
      },
    ],
    secondSection: [
      {
        titre: "Rappeurs de Quartier",
        description:
          "Selection d'artistes emergents qui portent des textes ancres dans le reel.",
        images: [blogImage, blogImage],
      },
    ],
    thirdSection: [
      {
        titre: "Collaborations Creatives",
        description:
          "Quand photographes, beatmakers et rappeurs travaillent ensemble sur des projets communs.",
        images: [blogImage, blogImage],
      },
    ],
  },
  {
    id: "blog-002",
    nom: "Le Retour des Evenements Hybrides",
    categorie: "EVENT",
    imageBackground: blogImage,
    description:
      "Concerts, pop-up stores et expositions se melangent pour creer des formats plus vivants et plus communautaires.",
    firstSection: [
      {
        titre: "Des Lieux Plus Flexibles",
        description:
          "Friches, rooftops et boutiques deviennent des terrains d'expression pour des formats plus libres.",
        images: [blogImage, blogImage],
      },
    ],
    secondSection: [
      {
        titre: "Le Public Veut Participer",
        description:
          "Les experiences qui laissent une place a l'echange, au test ou a la performance attirent davantage.",
        images: [blogImage, blogImage],
      },
    ],
    thirdSection: [
      {
        titre: "Une Nouvelle Facon de Raconter",
        description:
          "Les marques et collectifs cherchent des dispositifs plus immersifs pour laisser une trace durable.",
        images: [blogImage, blogImage],
      },
    ],
  },
  {
    id: "blog-003",
    nom: "Pourquoi les Marques Regardent la Scene Locale",
    categorie: "MODE",
    imageBackground: blogImage,
    description:
      "La credibilite se construit de plus en plus sur le terrain, au contact de communautes engagees et de talents identifies.",
    firstSection: [
      {
        titre: "La Proximite Comme Valeur",
        description:
          "Les projets les plus memorables sont souvent ceux qui comprennent un territoire et ses codes.",
        images: [blogImage, blogImage],
      },
    ],
    secondSection: [
      {
        titre: "Des Talents Deja Influents",
        description:
          "Photographes, DJs, skateurs ou videastes locaux portent deja des audiences tres actives.",
        images: [blogImage, blogImage],
      },
    ],
    thirdSection: [
      {
        titre: "Moins de Discours, Plus de Presence",
        description:
          "Les collaborations gagnent en impact quand elles passent par des rencontres concretes et visibles.",
        images: [blogImage, blogImage],
      },
    ],
  },
  {
    id: "blog-004",
    nom: "Street Culture et Direction Artistique",
    categorie: "MODE",
    imageBackground: blogImage,
    description:
      "L'esthetique de la rue influence les campagnes, les shootings et les identites visuelles bien au-dela de la mode.",
    firstSection: [
      {
        titre: "Des References Plus Brutes",
        description:
          "Les compositions plus directes, les textures reelles et les gestes spontanes gagnent du terrain.",
        images: [blogImage, blogImage],
      },
    ],
    secondSection: [
      {
        titre: "Le Role des Creatifs Independants",
        description:
          "Les jeunes DA, photographes et stylistes imposent des visions plus ancrees dans leur quotidien.",
        images: [blogImage, blogImage],
      },
    ],
    thirdSection: [
      {
        titre: "Une Esthetique Qui Reste Humaine",
        description:
          "Ce langage visuel fonctionne parce qu'il laisse apparaitre l'energie, le rythme et les imperfections.",
        images: [blogImage, blogImage],
      },
    ],
  },
  {
    id: "blog-005",
    nom: "Les Nouveaux Visages du Sport Urbain",
    categorie: "EVENT",
    imageBackground: blogImage,
    description:
      "Running crews, ride sessions et pratiques outdoor redessinent la maniere de vivre le sport en ville.",
    firstSection: [
      {
        titre: "Des Communautes Avant la Performance",
        description:
          "Le plaisir de rouler, courir ou grimper ensemble devient aussi important que le resultat.",
        images: [blogImage, blogImage],
      },
    ],
    secondSection: [
      {
        titre: "Le Sport Comme Contenu",
        description:
          "Chaque sortie devient aussi une opportunite de produire des images, des recits et des rencontres.",
        images: [blogImage, blogImage],
      },
    ],
    thirdSection: [
      {
        titre: "Une Energie Qui Attire les Marques",
        description:
          "Les acteurs du sport lifestyle cherchent des formats sinceres pour se connecter a ces pratiques.",
        images: [blogImage, blogImage],
      },
    ],
  },
  {
    id: "blog-006",
    nom: "Comment Monter un Partenariat Culturel Qui Tient",
    categorie: "THEATRE",
    imageBackground: blogImage,
    description:
      "Un bon partenariat ne repose pas seulement sur de la visibilite, mais sur un cadre clair et une intention partagee.",
    firstSection: [
      {
        titre: "Aligner les Objectifs des le Depart",
        description:
          "Audience, production, image ou conversion: chaque partenaire doit savoir ce qu'il vient chercher.",
        images: [blogImage, blogImage],
      },
    ],
    secondSection: [
      {
        titre: "Donner de la Place a la Co-creation",
        description:
          "Les meilleures collaborations laissent aux equipes creatives un vrai espace d'expression.",
        images: [blogImage, blogImage],
      },
    ],
    thirdSection: [
      {
        titre: "Mesurer Autrement que par la Portee",
        description:
          "L'engagement, la perception et la qualite des retours sont souvent plus utiles qu'un volume brut.",
        images: [blogImage, blogImage],
      },
    ],
  },
  {
    id: "blog-007",
    nom: "Les Formats Media qui Marchent en 2026",
    categorie: "CONCERT",
    imageBackground: blogImage,
    description:
      "Les publics reagissent mieux aux formats courts, incarnes et relies a une vraie scene qu'aux productions trop lisses.",
    firstSection: [
      {
        titre: "Le Reportage Court",
        description:
          "Un format rapide, mobile et bien cadre suffit souvent a transmettre une ambiance et un point de vue.",
        images: [blogImage, blogImage],
      },
    ],
    secondSection: [
      {
        titre: "La Serie Editoriale",
        description:
          "Penser un sujet sur plusieurs episodes permet de construire une narration plus forte dans le temps.",
        images: [blogImage, blogImage],
      },
    ],
    thirdSection: [
      {
        titre: "Le Mix Texte, Photo et Video",
        description:
          "Les formats qui combinent plusieurs supports offrent une lecture plus riche et plus memorisable.",
        images: [blogImage, blogImage],
      },
    ],
  },
];
