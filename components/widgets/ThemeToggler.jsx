"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

function ThemeToggler() {
  const { theme , setTheme } = useTheme();
  return (
    <div>
      <Button onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
        {theme==='light'? < MoonIcon /> : <SunIcon />}
      </Button>
    </div>
  );
}

export default ThemeToggler;
