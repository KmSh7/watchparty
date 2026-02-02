import clsx, {type ClassValue} from "clsx";
import { twMerge } from "tailwind-merge";

export function twclass(...input: ClassValue[]){
    return twMerge(clsx(input));
}