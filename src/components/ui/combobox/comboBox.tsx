"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/combobox/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/combobox/popover";
import { cn } from "@/lib/utils";
import bibleData from "@/data/bible.json";

const books = [bibleData];

export function BookCombobox() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);
  let regex = /[^0-9]/g;
  const bibleArr = Object.entries(bibleData).map(([key, value], index) => ({
    key: key,
    value: value.trim(),
    index: index,
  }));

  React.useEffect(() => {
    console.log(bibleArr);
  }, []);
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];
  const [value, setValue] = React.useState("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="w-[200px] justify-between border rounded px-4 py-2 text-left"
          role="combobox"
          aria-expanded={open}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <p className="flex items-center justify-between w-full">
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </p>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="검색..." />
          <CommandEmpty>일치하는 결과 없음</CommandEmpty>
          <CommandGroup></CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
