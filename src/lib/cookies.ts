import { cookies } from "next/headers";

export function getCookie() {
  const token = cookies().get('access_token')?.value
  return token;
}

export async function setCookie(token: string) {
  cookies().set({
    name: 'access_token',
    value: token,
    httpOnly: true,
    path: '/',
  })
}

export async function deleteCookie() {
  const cookieStore = cookies()
  cookieStore.set('access_token', '', { maxAge: -1 });
}