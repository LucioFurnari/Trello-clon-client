


export async function addList(boardId: string, name: string) {
  const listName = { name: name }

  try {
    const res = await fetch(`${process.env.API_HOST}/board/${boardId}/list`, {
      body: JSON.stringify(listName),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) {
      console.error('Failed to fetch workspaces', res.status, res.statusText)
      return null;
    }

    const data = await res.json();
    return data.list;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}