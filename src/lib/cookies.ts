'use server'

import { cookies } from "next/headers";

export async function getCookie() {
  const token = cookies().get('access-token')

  if (token) return token;
}

export async function setCookie(token: string) {
  cookies().set({
    name: 'access_token',
    value: token,
    httpOnly: true,
    path: '/',
  })
}