'use server'
import { getCookie } from "./cookies";

const API_HOST = process.env.API_HOST;

// Get workspace function.
export async function getWorkspace(workspaceId: string) {
  const token = getCookie();
  try {
    const res = await fetch(`${API_HOST}/workspace/${workspaceId}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `access_token=${token}`
      }
    });

    if (!res.ok) {
      // Json response and return message
      const data = await res.json();
      console.error('Failed to fetch workspaces', res.status, res.statusText)
      return { error: true, message: data.message, statusCode: res.status};
    }

    const data = await res.json();
    return data.workspace;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}

// Get all workspaces of a user.
export async function getAllWorkspacesOfUser() {
  const token = getCookie();
  try {
    if (!token) {
      console.error('No token found');
      return { error: true, message: 'Token not found' };
    }

    const res = await fetch(`${API_HOST}/workspace`, {
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

// Create workspace function.
export async function createWorkspace(workspaceData: { name: string, description: string }) {
  const token = getCookie();
  const rawData = JSON.stringify(
    {
      name: workspaceData.name,
      description: workspaceData.description
    }
  );
  try {
    if (!token) {
      console.error('No token found');
      return { error: true, message: 'Token not found' };
    }

    const res = await fetch(`${API_HOST}/workspace`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `access_token=${token}`
      },
      body: rawData
    });

    if (!res.ok) {
      console.error('Failed to fetch workspaces', res.status, res.statusText)
      return { error: true, message: res.statusText};
    }

    const data = await res.json();
    return data.workspace;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch', error);
    return null;
  }
}

// Delete workspace function.
export async function deleteWorkspace(workspaceId: string) {
  try {
    const res = await fetch(`${API_HOST}/workspace/${workspaceId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) {
      console.error('Failed to fetch workspaces', res.status, res.statusText)
      return { error: true, message: res.statusText};
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch', error);
    return null;
  }
}

// Update workspace function.
export async function updateWorkspace(workspaceId: string, editData: { name: string, description?: string}) {
  const updatedContent = JSON.stringify(editData)
  try {
    const res = await fetch(`${API_HOST}/workspace/${workspaceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: updatedContent
    })

    if (!res.ok) {
      console.error('Failed to fetch workspaces', res.status, res.statusText)
      return { error: true, message: res.statusText};
    }

    const data = await res.json();
    return data.updatedWorkspace;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch', error);
    return null;
  }
}

// Add member to workspace function.
export async function addMemberToWorkspace(workspaceId: string, userId: string) {
  const user = JSON.stringify({ userId: userId});
  try {
    const res = await fetch(`${API_HOST}/workspace/${workspaceId}/member`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: user
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch', error);
    return null;
  }
}

// Get members of workspace.
export async function getMembers(workspaceId: string) {
  try {
    const res = await fetch(`${API_HOST}/workspace/${workspaceId}/members`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch', error);
    return null;
  }
}