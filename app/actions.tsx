'use server'
import { redirect } from "next/navigation"


export async function subscribe(formData: FormData) {
  const email = formData.get('email')
  console.log(email)

  redirect('/thank-you')
}