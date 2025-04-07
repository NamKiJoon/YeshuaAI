"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface RouterProps {
  label: string;
  href: string;
  disabled?: boolean;
}

export const RouterBtn = ({ label, href, disabled }: RouterProps) => {
  const router = useRouter();
  const handleClick = () => {
    if (!disabled) {
      router.push(href);
    }
  };

  return (
    <Button
      variant={disabled ? "outline" : "default"}
      onClick={handleClick}
      disabled={disabled}
      className="w-full justify-start"
    >
      {label}
    </Button>
  );
};
