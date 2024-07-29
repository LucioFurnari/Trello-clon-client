'use server'

export async function addList(boardId: string, name: string) {
  try {
    const listName = { name: name }
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

export async function deleteList(listId: string, boardId: string) {
  try {
    const res = await fetch(`${process.env.API_HOST}/board/${boardId}/list/${listId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) {
      console.error('Failed to delete list', res.status, res.statusText)
      return null;
    }

    const data = await res.json();
    return data.list;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}

export async function updatePosition(list: any) {
  try {
    const newList =  JSON.stringify({ newList: list} )
    const res = await fetch(`${process.env.API_HOST}/list`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newList
    })

    if (!res.ok) {
      console.error('Failed to update list', res.status, res.statusText)
      return null;
    }
    console.log('working')
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}