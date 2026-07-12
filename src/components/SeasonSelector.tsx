import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Snowflake, Sun, Flame, Leaf, HelpCircle, RefreshCw } from 'lucide-react';

export const SeasonSelector = () => {
  const [currentSeason, setCurrentSeason] = React.useState<string>(() => {
    return localStorage.getItem('season_override') || 'auto';
  });

  const handleSeasonChange = (season: string) => {
    if (season === 'auto') {
      localStorage.removeItem('season_override');
    } else {
      localStorage.setItem('season_override', season);
    }
    setCurrentSeason(season);
    // Dispatch a custom event to notify NavbarSeasonAnimation of the change
    window.dispatchEvent(new Event('seasonchange'));
  };

  const seasons = [
    { code: 'auto', name: 'Auto', icon: RefreshCw },
    { code: 'winter', name: 'Winter', icon: Snowflake },
    { code: 'spring', name: 'Spring', icon: Sun },
    { code: 'summer', name: 'Summer', icon: Flame },
    { code: 'autumn', name: 'Autumn', icon: Leaf },
  ];

  const ActiveIcon = seasons.find((s) => s.code === currentSeason)?.icon || RefreshCw;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="custom"
          className="bg-transparent backdrop-blur-sm px-2 py-2 border-white/20 hover:bg-white/20 dark:hover:bg-navy-dark/50"
          title="Select Season Animation"
        >
          <ActiveIcon className="text-white h-[1rem] w-[1rem]" />
          <span className="sr-only">Change season animation</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white mt-4 dark:bg-navy-dark border border-gray-200 dark:border-gray-700">
        {seasons.map((s) => {
          const Icon = s.icon;
          return (
            <DropdownMenuItem
              key={s.code}
              onClick={() => handleSeasonChange(s.code)}
              className={`${currentSeason === s.code ? 'bg-accent' : ''} dark:text-gray-200 dark:hover:bg-navy-light/20 flex items-center gap-2`}
            >
              <Icon className="h-4 w-4" />
              {s.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
