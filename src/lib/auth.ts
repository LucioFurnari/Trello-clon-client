'use server'

import { getCookie, setCookie } from "./cookies";
import { redirect } from "next/navigation";

export async function loginUser(formData: FormData) {
  'use server'

  try {
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;
    
    if (!email || !password) {
      throw new Error('Email and password must be provided');
    }
  
    const rawFormData = { email, password };

    const res = await fetch(`${process.env.API_HOST}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rawFormData)
    })

    const data = await res.json()

    if (!res.ok) {
      if (data.errorList) {
        console.error('Validation Errors:', data.errorList);
        throw new Error(data.errorList);
      } else {
        throw new Error(data.message || 'Login failed');
      }
    }
  
    if (data.token) {
      setCookie(data.token);
      redirect('/')
    } else {
      throw new Error('Token not received');
    }

  } catch (error) {
    console.error('Error during login');
  }
}

export async function registerUser(prevState: any, formData: FormData) {
  'use server'

  const rawFormData = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password')
  }

  const res = await fetch(`${process.env.API_HOST}/user`, {
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

    const res = await fetch(`${process.env.API_HOST}/profile`, {
      method: 'GET',
      headers: {
        Cookie: `access_token=${token}`
      },
    });
    if (!res.ok) return null

    const data = await res.json();
    
    return data.user; 
  } catch (error) {
    console.error('Error in the server', error);
  }
}