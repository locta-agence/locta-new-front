'use client';

interface Stat {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats?: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const defaultStats: Stat[] = [
    { number: '2021', label: 'Création de l\'agence' },
    { number: '24', label: 'Membres de l\'agence' },
    { number: '10', label: 'Projets réalisés' },
    { number: '5 000', label: 'Personnes qui nous suivent' },
  ];

  const statsToDisplay = stats || defaultStats;

  return (
    <div className="w-full bg-white border-t-2 border-b-2 border-black py-[24px] px-[120px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-[40px] md:gap-0">
        {statsToDisplay.map((stat, index) => (
          <div key={index} className="flex flex-row items-baseline gap-3">
            <h3 className="font-bold text-5xl lg:text-6xl uppercase">
              {stat.number}
            </h3>
            <p className="text-sm md:text-base font-light">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
