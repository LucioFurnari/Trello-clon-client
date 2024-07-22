import { getCookie } from "./cookies"

export async function getWorkspace(workspaceId: string) {
  try {
    const token = await getCookie();

    const res = await fetch(`${process.env.API_HOST}/workspace/${workspaceId}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'Content-Type',
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
  try {
    const token = await getCookie();

    if (!token) {
      console.error('No token found');
      return null;
    }

    const res = await fetch(`${process.env.API_HOST}/workspace`, {
      method: 'GET',
      headers: {
        'Content-Type': 'Content-Type',
        Cookie: `access_token=${token}`
      }
    });

    if (!res.ok) {
      console.error('Failed to fetch workspaces', res.status, res.statusText)
      return null;
    }

    const data = await res.json();
    return data.workspaces;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch', error);
    return null;
  }
}