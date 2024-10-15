'use server'
import { getCookie } from "./cookies";

export async function findUsers(query: string) {
  try {
    const token = await getCookie();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/users?query=${encodeURIComponent(query)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `access_token=${token}`
      },
    });

    if (!res.ok) {
      // Handle HTTP errors like 404 or 500
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return []; // Return an empty array or null in case of failure
  }
}
