export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Laurent Bertrand",
    role: "Président",
    description: "Avec plus de 20 ans d'expérience dans le secteur créatif, Laurent dirige l'agence avec vision et passion. Spécialiste en stratégie digitale et branding.",
    image: "/images/team/laurent.jpg",
  },
  {
    id: "2",
    name: "Sophie Martin",
    role: "Directrice Créative",
    description: "Créatrice talentueuse passionnée par l'innovation et le design. Sophie pilote les projets créatifs avec une attention particulière aux détails et à l'excellence.",
    image: "/images/team/sophie.jpg",
  },
  {
    id: "3",
    name: "Thomas Leblanc",
    role: "Responsable Technique",
    description: "Développeur full-stack expérimenté, Thomas garantit la qualité technique et l'optimisation de tous nos projets numériques et web.",
    image: "/images/team/thomas.jpg",
  },
  {
    id: "4",
    name: "Émilie Dupont",
    role: "Gestionnaire de Projets",
    description: "Organisée et communicative, Émilie assure le suivi des projets et maintient une excellente relation avec nos partenaires et clients.",
    image: "/images/team/emilie.jpg",
  },
];
