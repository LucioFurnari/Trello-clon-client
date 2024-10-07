
export async function getRandomImages() {
  const res = await fetch(`${process.env.API_HOST}/unsplash/10`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!res.ok) {
    console.error('Failed to fetch workspaces', res.status, res.statusText)
    return null;
  }

  const images = await res.json();

  return images;
}