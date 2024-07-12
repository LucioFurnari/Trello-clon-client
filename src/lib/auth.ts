'use server'

import { getCookie, setCookie } from "./cookies";

export async function loginUser(formData: FormData) {
  'use server'

  const rawFormData = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  const res = await fetch( "http://localhost:8080/api/login", {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rawFormData)
  })

  const data = await res.json()

  if (data.token) {
    setCookie(data.token);
  }

  console.log(data)
}

export async function registerUser(prevState: any, formData: FormData) {
  'use server'

  const rawFormData = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password')
  }

  const res = await fetch('http://localhost:8080/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(rawFormData)
  });

  if(res.ok) {
    return {
      success: true,
      message: 'User created'
    }
  }

  const data = await res.json();

  console.log(data)
}

export async function verifyToken() {
  try {
    const token = await getCookie();

    const res = await fetch('http://localhost:8080/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ access_token: token })
    });

    if (!res.ok) throw new Error('Token not found');

    const data = await res.json();

    return data; 
  } catch (error) {
    console.error('Error in the server');
  }
}