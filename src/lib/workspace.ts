import { getCookie } from "./cookies";

export async function getWorkspace(workspaceId: string) {
  const token = getCookie();
  try {
    const res = await fetch(`${process.env.API_HOST}/workspace/${workspaceId}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `access_token=${token}`
      }
    });

    if (!res.ok) {
      console.error('Failed to fetch workspaces', res.status, res.statusText)
      return null;
    }

    const data = await res.json();
    return data.workspace;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}

export async function getAllWorkspacesOfUser() {
  const token = getCookie();
  try {
    if (!token) {
      console.error('No token found');
      return { error: true, message: 'Token not found' };
    }

    const res = await fetch(`${process.env.API_HOST}/workspace`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `access_token=${token}`
      }
    });

    if (!res.ok) {
      console.error('Failed to fetch workspaces', res.status, res.statusText)
      return { error: true, message: res.statusText};
    }

    const data = await res.json();
    return data.workspaces;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch', error);
    return null;
  }
}