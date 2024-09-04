"use server"

export async function getBoard(boardId: string) {
  try {
    const res = await fetch(`${process.env.API_HOST}/board/${boardId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (res.status !== 302) {
      console.error('Failed to fetch board', res.status, res.statusText)
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}

export async function createBoard(workspaceId: string, formData: { title: string}) {
  try {
    const newBoard = JSON.stringify(formData);
    const res = await fetch(`${process.env.API_HOST}/workspace/${workspaceId}/board`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newBoard
    });

    if (res.status !== 201) {
      console.error('Failed to create board', res.status, res.statusText)
      return null;
    }

    const data = await res.json();
    // Return board object created.
    return data.board;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}

export async function deleteBoard(boardId: string) {
  try {
    const res = await fetch(`${process.env.API_HOST}/board/${boardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    if (!res.ok) {
      console.error('Error deleting the board');
      return null;
    }
    
    return await res.json();
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}