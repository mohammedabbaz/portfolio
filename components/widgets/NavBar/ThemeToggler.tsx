"use client";
import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "../../ui/button";

function ThemeToggler() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  return (
      <Button type="button" variant={"ghost"} size={'icon'} className="" 
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
  );
}

export default ThemeToggler;
