import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function humanizeTime(timestamp: string | null | undefined): string {
  if (!timestamp || timestamp.toLowerCase() === 'unknown') {
    return 'unknown time';
  }

  const time = new Date(timestamp);
  if (isNaN(time.getTime())) {
    return 'invalid time';
  }

  const now = new Date();
  const diffMs = now.getTime() - time.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  if (hours < 24)   return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  if (days < 7)     return `${days} day${days !== 1 ? 's' : ''} ago`;

  return time.toLocaleDateString();
}