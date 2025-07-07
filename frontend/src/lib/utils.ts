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

export function getCsrfToken() {
  const name = 'csrftoken';
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export const percentToColor = (percent: number, base = '34, 197, 94') => {
  const opacity = Math.min(1, percent / 100);
  return `rgba(${base}, ${opacity})`;
};

export const boolToColor = (bool: boolean) =>
    bool ? 'rgba(6,243,92,0.6)' : 'rgba(253,3,3,0.6)';

const getRandomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomImage = () => {
  const width = getRandomInRange(300, 900);
  const height = getRandomInRange(200, 600);
  return `https://picsum.photos/${width}/${height}?random=${Date.now()}`;
};

export const priceNotation = (price: number | string) => {
  return price.toLocaleString();
}

export const productUrl = (slug: string) => {
  return "/product/" + slug;
}