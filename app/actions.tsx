'use server'
import { redirect } from "next/navigation"


export async function subscribe(formData: FormData) {
  const email = formData.get('email')
  console.log(email)
    

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HASHNODE}`,
    }
    const requstBody = {
      query: `mutation SubscribeToNewsletter($input: SubscribeToNewsletterInput!) {
      subscribeToNewsletter(input: $input) {
        status
      }
    }`,
    variables: {
      "input": {
        "publicationId": "613e984b1821961e25521381",
        "email": email,
      },
    }
    }
    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(requstBody),
    }
    
    const response = await fetch('https://gql.hashnode.com', requestOptions)
    const data = await response.json()
    console.log(data) 

  redirect('/thank-you')
}