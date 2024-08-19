'use server'

import { getCookie, setCookie, deleteCookie } from "./cookies";

export async function loginUser(prevState: any, formData: FormData) {
  'use server'

  try {
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;
  
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
        return { errors: data.errorList, success: false }
      } else {
        return { errors: [], message: data.message, success: false }
      }
    }
  
    if (data.token) {
      setCookie(data.token);
      return {  errors: [], message: '', success: true }
    } else {
      console.error('Token not received');
      return { errors: [], message: '', success: false }
    }

  } catch (error) {
    console.error('Error during login');
    return { errors: [], message: '', success: false }
  }
}

export async function registerUser(prevState: any, formData: FormData) {
  'use server'

  try {
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
  
    const data = await res.json();
  
    if(!res.ok) {
      if (data.errorList) {
        return { errors: data.errorList, succes: false }
      } else {
        return { errors: [], message: data.message, success: false }
      }
    }
  
    return {
      success: true,
      message: 'User created'
    }
  } catch (error) {
    console.error('Error during register');
    return {  errors: [], message: 'Error in the server', success: false }
  }
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
    console.error('Error in the server');
    return null;
  }
}

export async function logout() {
  "use server"
  deleteCookie()
}