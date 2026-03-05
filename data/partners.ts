type Partners = {
    id: string;
    name: string;
    image: string;
    description: string;
    socials?: {
        site?: string;
        facebook?: string;
        instagram?: string;
        twitter?: string;
    }
}

export const partners: Partners[] = [
    {
        id: 'p-001',
        name: 'Atelier Lumière',
        image: '/images/partners/partners_1.jpg',
        description: "Studio de photographie et d'éclairage spécialisé dans les portraits et événements locaux."
        ,
        socials: {
            site: 'https://atelier-lumiere.example.com',
            facebook: 'https://facebook.com/atelierlumiere',
            instagram: 'https://instagram.com/atelier_lumiere',
            twitter: 'https://twitter.com/atelier_lum'
        }
    },
    {
        id: 'p-002',
        name: 'Café nameade',
        image: '/images/partners/partners_1.jpg',
        description: "Café-restaurant mobile favorisant les produits locaux et les collaborations communautaires."
        ,
        socials: {
            site: 'https://cafenomade.example.com',
            facebook: 'https://facebook.com/cafenomade',
            instagram: 'https://instagram.com/cafe_nomade',
            twitter: 'https://twitter.com/cafenomade'
        }
    },
    {
        id: 'p-003',
        name: 'Studio Vert',
        image: '/images/partners/partners_1.jpg',
        description: "Agence de design durable offrant conseils en aménagement éco-responsable et branding.",
        socials: {
            site: 'https://studio-vert.example.com',
            facebook: 'https://facebook.com/studi-overt',
            instagram: 'https://instagram.com/studio_vert',
            twitter: 'https://twitter.com/studiovert'
        }
    },
    {
        id: 'p-004',
        name: 'Maison Solidaire',
        image: '/images/partners/partners_1.jpg',
        description: "Association d'entraide proposant ateliers, formations et espaces de coworking solidaires."
        ,
        socials: {
            site: 'https://maison-solidaire.example.com',
            facebook: 'https://facebook.com/maison.solidaire',
            instagram: 'https://instagram.com/maison_solidaire',
            twitter: 'https://twitter.com/maison_solidaire'
        }
    },
    {
        id: 'p-005',
        name: 'TechLocal',
        image: '/images/partners/partners_1.jpg',
        description: "Start-up locale spécialisée dans les solutions numériques pour les petites entreprises."
        ,
        socials: {
            site: 'https://techlocal.example.com',
            facebook: 'https://facebook.com/techlocal',
            instagram: 'https://instagram.com/techlocal',
            twitter: 'https://twitter.com/techlocal'
        }
    }
];