import { ImageData } from "@/types/types";

export async function getRandomImages() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/unsplash/10`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  
    if (!res.ok) {
      console.error('Failed to fetch workspaces', res.status, res.statusText)
      return null;
    }
  
    const images: ImageData[] = await res.json();
  
    return images;
  } catch (error) {
    console.error('Error during fetching images:', error);
    return null;
  }
}