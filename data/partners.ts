type Partners = {
    id: string;
    name: string;
    image: string;
    description: string;
    site: string;
    socials?: { platform: string; url: string }[]
}

export const partners: Partners[] = [
    {
        id: 'p-001',
        name: 'Atelier Lumière',
        image: '/images/partners/partners_1.jpg',
        description: "Studio de photographie et d'éclairage spécialisé dans les portraits et événements locaux.",
        site: 'https://atelier-lumiere.example.com',
        socials: [
            { platform: 'instagram', url: 'https://instagram.com/atelier_lumiere' },
            { platform: 'linkedin', url: 'https://linkedin.com/company/atelierlumiere' },
            { platform: 'tiktok', url: 'https://tiktok.com/@atelier_lumiere' }
        ]
    },
    {
        id: 'p-002',
        name: 'Café nameade',
        image: '/images/partners/partners_1.jpg',
        description: "Café-restaurant mobile favorisant les produits locaux et les collaborations communautaires.",
        site: 'https://cafenomade.example.com',
        socials: [
            { platform: 'instagram', url: 'https://instagram.com/cafe_nomade' },
            { platform: 'linkedin', url: 'https://linkedin.com/company/cafenomade' },
            { platform: 'tiktok', url: 'https://tiktok.com/@cafenomade' }
        ]
    }
];