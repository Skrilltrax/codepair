import * as React from 'react';
import { CaretDownIcon, CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { languages, LanguageMetadata } from '@/data/languages';

type LanguageSelectorProps = {
  defaultLanguage: string;
  onLanguageSelected: (language: LanguageMetadata) => void;
};

export function LanguageSelector({
  defaultLanguage,
  onLanguageSelected,
}: LanguageSelectorProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultLanguage);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-between bg-secondary"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : defaultLanguage}
          <CaretDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mb-0 ml-4 w-[200px] p-0">
        <Command>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                value={language.value}
                onSelect={(currentValue) => {
                  setValue(currentValue);
                  setOpen(false);
                  onLanguageSelected(language);
                }}
              >
                {language.label}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    value === language.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
