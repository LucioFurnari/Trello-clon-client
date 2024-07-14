import { getCookie } from "./cookies"

export async function getWorkspace(workspaceId: string) {
  const token = await getCookie();

  const res = await fetch(`${process.env.API_HOST}/workspace/${workspaceId}`,{
    method: 'GET',
    headers: {
    'Content-Type': 'Content-Type',
    Cookie: `access_token=${token}`
    }
  });

  if (!res.ok) return null

  const data = await res.json();
  return data;
}