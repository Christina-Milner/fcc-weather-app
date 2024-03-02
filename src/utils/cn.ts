/* Tailwind merge to merge tailwind classes, clsx package to pass conditional classes 
npm i tailwind-merge clsx*/
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}