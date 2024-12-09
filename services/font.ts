import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { Palanquin_Dark, Rubik } from "next/font/google";

export const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const tthoves = Palanquin_Dark({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pd",
})

export const font_variables = cn(tthoves.variable,rubik.variable);
