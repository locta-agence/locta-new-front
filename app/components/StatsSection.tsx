'use client';

import { useState } from 'react';

interface Stat {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats?: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const defaultStats: Stat[] = [
    { number: '2021', label: "Création de l'agence" },
    { number: '24', label: "Membres de l'agence" },
    { number: '10', label: 'Projets réalisés' },
    { number: '5 000', label: 'Personnes qui nous suivent' },
  ];

  const statsToDisplay = stats || defaultStats;
  const [active, setActive] = useState(0);

  return (
    <div className="w-full bg-white border-t-2 border-b-2 border-black py-6 px-4 md:px-6">
      <div className="hidden md:flex justify-between items-center">
        {statsToDisplay.map((stat, i) => (
          <div key={i} className="flex items-baseline gap-3">
            <span className="font-bold text-5xl lg:text-6xl uppercase">{stat.number}</span>
            <span className="text-sm md:text-base font-light">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-col gap-4">
        <div
          className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
          onScroll={(e) => {
            const el = e.currentTarget;
            const index = Math.round(el.scrollLeft / el.offsetWidth);
            setActive(Math.min(Math.max(index, 0), statsToDisplay.length - 1));
          }}
        >
          {statsToDisplay.map((stat, i) => (
            <div
              key={i}
              className="flex shrink-0 w-full items-baseline gap-3 justify-center"
              style={{ scrollSnapAlign: 'start' }}
            >
              <span className="font-bold text-5xl uppercase">{stat.number}</span>
              <span className="text-base font-light">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2">
          {statsToDisplay.map((_, i) => (
            <span
              key={i}
              className="h-[3px] rounded-sm transition-all duration-300"
              style={{ width: '20px', background: i === active ? '#000' : '#ccc' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
