"use server"

export async function createCard(listId: string, card: any) {
  try {
    const newCard = JSON.stringify(card);
    const res = await fetch(`${process.env.API_HOST}/list/${listId}/card`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newCard
    })

    if (res.status !== 201) {
      console.error('Failed to create card', res.status, res.statusText)
      return null;
    }

    const data = await res.json();
    return data.card;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}

export async function getCard(cardId: string) {
  try {
    const res = await fetch(`${process.env.API_HOST}/card/${cardId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) {
      console.error('Failed to create card', res.status, res.statusText)
      return null;
    }

    const data = await res.json();
    return data.card;
  } catch (error) {
    console.error('Error in the server, it was not possible to perform the fetch');
    return null;
  }
}